export const files: {
  [file: string]: string | Promise<string>
} = {
  'contacts.txt': 'Email: <a href="mailto:anton@nesterov.cc">anton@nesterov.cc</a>\n'
    + 'Github: <a href="https://github.com/komachi" target="_blank">@komachi</a>\n'
    + 'Twitter: <a href="https://twitter.com/AntNesterov" target="_blank">@AntNesterov</a>'
};

export function ls(): string {
  return Object.keys(files).join(' ');
}