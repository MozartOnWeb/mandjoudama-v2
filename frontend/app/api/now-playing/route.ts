import type { NextApiRequest, NextApiResponse } from "next";

let nowPlaying: {
  title: string;
  artist: string;
  artwork: string;
  timestamp: number;
} | null = null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, artist, artwork } = req.body;
    nowPlaying = {
      title,
      artist,
      artwork,
      timestamp: Date.now(),
    };
    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    return res.status(200).json(nowPlaying);
  }

  res.status(405).end();
}
