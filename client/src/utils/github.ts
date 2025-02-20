export const fetchReposWithReadme = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    const data = await response.json();

    const reposWithReadme = await Promise.all(data.map(async (repo: any) => {
      const readmeResponse = await fetch(`https://raw.githubusercontent.com/${username}/${repo.name}/refs/heads/main/README.md`);
      const readme = await readmeResponse.text();
      return { ...repo, readme };
    }));

    return reposWithReadme;
  } catch (error) {
    console.error('Error fetching repos:', error);
    throw error;
  }
};