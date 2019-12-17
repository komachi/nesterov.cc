import { inHTMLData } from 'xss-filters';
import commands from './commands';
import './styles.css';

class Terminal {
  container: HTMLElement;
  textarea: HTMLTextAreaElement;
  history: Array<string> = [];
  currentHistoryIndex: number = 0;
  terminalPromt: string = 'anton@nesterov.cc:~$&nbsp;';
  autorun: Array<string> = [
    'whoami',
    'cat contacts.txt',
    'nginx -t',
    'help',
  ];

  constructor(container: HTMLElement, textarea: HTMLTextAreaElement) {
    this.container = container;
    this.textarea = textarea;

    this.textarea.addEventListener('keydown', e => this.handleKeydown(e));
    this.textarea.addEventListener('blur', () => this.handleBlur());

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

  handleCommand(value: string):void {
    this.textarea.value = '';
    const trimmedValue = this.trim(value);

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
    newLine.innerHTML = `${this.terminalPromt}${text}`;
    this.container.insertBefore(newLine, this.textarea.parentNode);
    this.scrollToBottom();
  }

  scrollToBottom():void {
    this.container.scrollTop = this.container.scrollHeight;
  }

  trim(value: string): string {
    return inHTMLData(value.trim());
  }
}

window.addEventListener('load', () => {
  const container = document.getElementById('terminal-container');
  const textarea = <HTMLTextAreaElement>document.getElementById('terminal-textarea');
  if (container && textarea) {
    new Terminal(container, textarea);
  }
});