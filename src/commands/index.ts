import { whoami } from './whoami';
import { cat } from './cat';
import { help } from './help';
import { ls } from './ls';
import { githubrepos } from './githubrepos';

const commands: {
  [command: string]: (param: string) => (string | null) | Promise<string | null>
} = {
  cat,
  whoami,
  help,
  ls,
  githubrepos
};

export default commands;