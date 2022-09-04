import { sanitize } from 'dompurify';
import commands from './commands';
import './styles.css';

const domPurifyPolicy = {
  ALLOWED_TAGS: ['a'],
  ALLOWED_ATTR: ['href', 'target'],
  RETURN_TRUSTED_TYPE: true
};

class Terminal {
  container: HTMLElement;
  textarea: HTMLTextAreaElement;
  history: Array<string> = [];
  currentHistoryIndex: number = 0;
  terminalPromt: string = 'anton@nesterov.cc:~$&nbsp;';
  autorun: Array<string> = [
    'whoami',
    'cat contacts.txt',
    'help',
  ];

  constructor(container: HTMLElement, textarea: HTMLTextAreaElement) {
    this.container = container;
    this.textarea = textarea;

    this.textarea.addEventListener('keydown', e => this.handleKeydown(e));
    this.textarea.addEventListener('blur', () => this.handleBlur());
    this.container.addEventListener('click', () => {
      this.textarea.focus();
    });
    this.autorun.forEach(command => this.handleCommand(command));
  }

  handleKeydown(e: KeyboardEvent):void {
    // code === 'Enter' doesn't work on mobile, so we need a little hack
    if (e.keyCode === 13) {
      this.handleCommand(this.textarea.value);
      return;
    }

    switch(e.code) {
      case 'ArrowUp': {
        const prevIndex =  this.currentHistoryIndex - 1;
        if (this.history[prevIndex]) {
          this.currentHistoryIndex = prevIndex;
          this.textarea.value = this.history[prevIndex];
        }
        break;
      }
      case 'ArrowDown': {
        const nextIndex = this.currentHistoryIndex + 1;
        if (nextIndex < this.history.length) {
          this.currentHistoryIndex = nextIndex;
        }
        this.textarea.value = this.history[nextIndex] || '';
        break;
      }
      case 'Tab': {
        e.preventDefault();
        break;
      }
    }
  }

  handleBlur():void {
    setTimeout(() => {
      this.textarea.focus();
    });
  }

  handleCommand(value: string): void {
    this.textarea.value = '';
    const trimmedValue = value.trim();

    if (trimmedValue === '') {
      this.addLine('');
      return;
    }

    this.history.push(trimmedValue);
    this.currentHistoryIndex = this.history.length;

    const argv = trimmedValue.split(' ');
    const command = argv[0].trim();
    const opts = argv[1] && argv[1].trim();
    

    if (!commands[command]) {
      this.addLine(trimmedValue + '\n' + command + ': command not found');
      return;
    }

    Promise.resolve(commands[command](opts)).then(res => {
      if (res) {
        this.addLine(trimmedValue + '\n' + res);
      }
    });
  };

  addLine(text: string):void {
    const newLine = document.createElement('div');
    newLine.innerHTML = sanitize(`${this.terminalPromt}${text}`, domPurifyPolicy);
    this.container.insertBefore(newLine, this.textarea.parentNode);
    this.scrollToBottom();
  }

  scrollToBottom():void {
    this.container.scrollTop = this.container.scrollHeight;
  }
}

if (typeof window !== 'undefined') {
  if (window.trustedTypes?.createPolicy) {
    window.trustedTypes.createPolicy('default', {
      createHTML(string) {
        return sanitize(string, domPurifyPolicy);
      } 
    });
  }

  window.addEventListener('load', () => {
    const container = document.getElementById('terminal-container');
    const textarea = <HTMLTextAreaElement>document.getElementById('terminal-textarea');
    if (container && textarea) {
      new Terminal(container, textarea);
    }
  });
}

