import { uriInDoubleQuotedAttr, inHTMLData } from 'xss-filters';

const username = 'komachi';
interface GithubRepo {
  fork: boolean;
  html_url: string;
  name: string;
  stargazers_count: number;
  description: string;
}

export function githubrepos():Promise<string> {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=created&direction=desc`
  )
    .then(res => res.json())
    .then(repos => repos.filter((repo: GithubRepo) => repo.fork === false)
      .sort((repo1: GithubRepo, repo2: GithubRepo) =>
        repo1.stargazers_count < repo2.stargazers_count
      )
      .map((repo: GithubRepo) => {
        return `<a href="${uriInDoubleQuotedAttr(repo.html_url)}">${inHTMLData(repo.name)}<a>\n${inHTMLData(repo.description)}\n`
      }).join('\n')
    ).catch(() => 'Error: can\'t get GitHub repos')
}