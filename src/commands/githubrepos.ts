

const username = 'komachi';
interface GithubRepo {
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  html_url: string;
  name: string;
  stargazers_count: number;
  description?: string;
  topics: Array<string>
}

export function githubrepos(): Promise<string> {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&type=owner&per_page=50`,
    {
      headers: {
        Accept: 'application/vnd.github+json'
      }
    }
  )
    .then(res => res.json())
    .then(repos => repos.filter((repo: GithubRepo) => {
      return repo.fork === false &&
        repo.archived === false &&
        repo.stargazers_count > 2
    })
      .map((repo: GithubRepo) => {
        return `<a href="${repo.html_url}" target="_blank">${repo.name}<a>${repo.description ? `\n${repo.description}` : ''}${repo.topics.length !== 0 ? `\nTags: ${repo.topics.join(', ')}` : ''}\n`;
      }).join('\n')
    ).catch(() => 'Error: can\'t get GitHub repos')
}