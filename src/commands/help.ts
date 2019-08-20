import commands from './';

export function help():string {
  return Object.keys(commands).join(' ');
}