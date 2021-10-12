import fetch from 'node-fetch';
import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

/**
 * GET /api/contribs
 * Queries GitHub to retrieve the total contributions made by user samir-roy in the last year
 * using a private github token with read:user permissions.
 */
export default async function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  const token = process.env.GITHUB_TOKEN;
  const headers = {
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const body = {
    query: `query {
      user(login: "samir-roy") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }`,
  };

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      redirect: 'follow',
      body: JSON.stringify(body),
    });

    const json = await response.json();
    const { totalContributions } = json.data.user.contributionsCollection.contributionCalendar;

    res.setHeader('Cache-control', 'public, max-age=43200');
    res.json({ contribs: totalContributions.toLocaleString() });
  } catch (e) {
    res.status(500);
    res.json({ error: e.message });
  }
}
