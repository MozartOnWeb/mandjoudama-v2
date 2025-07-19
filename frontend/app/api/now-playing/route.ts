import type { NextApiRequest, NextApiResponse } from "next";

let nowPlaying: {
  title: string;
  artist: string;
  artwork: string;
  timestamp: number;
} | null = null;

export async function POST(req: Request) {
  if (req.method === "POST") {
    const { title, artist, artwork } = await req.json();
    nowPlaying = {
      title,
      artist,
      artwork,
      timestamp: Date.now(),
    };
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new Response(null, {
    status: 405,
  });
}

export async function GET() {
  return new Response(JSON.stringify(nowPlaying), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
