import { files } from './ls';

export function cat(file: string): Promise<string> | string {
  if (!files[file]) {
    return `cat: ${file}: No such file or directory`;
  }
  return Promise.resolve(files[file]);
}