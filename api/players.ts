import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

/**
 * GET /api/players
 * Queries Google Analytics to retrieve the active players and games played for Endless Traffic Game.
 */
export default async function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  // todo: query ga api (temporarily use data from Sept 18, 2021)
  res.setHeader('Cache-control', 'public, max-age=43200');
  res.json({ players: '3,386', games: '5,778' });
}
