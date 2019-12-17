import { whoami } from './whoami';
import { cat } from './cat';
import { help } from './help';
import { ls } from './ls';
import { githubrepos } from './githubrepos';
import { nginx } from './nginx';

const commands: {
  [command: string]: (param: string) => (string | null) | Promise<string | null>
} = {
  cat,
  whoami,
  help,
  ls,
  githubrepos,
  nginx,
};

export default commands;