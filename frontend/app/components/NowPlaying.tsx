"use client"; // This makes it a Client Component

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type NowPlayingData = {
  id: string;
  title: string;
  artist: string;
  artwork: string;
};

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingData>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("now_playing")
        .select("*")
        .eq("id", "now_playing")
        .single();

      setLoading(false);

      if (error) setError(error);
      else setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="section section_2">
      <div className="title">
        <h3>Listening now</h3>
        <div className="middle_dot"></div>
        <h3>Apple Music</h3>
      </div>

      {!loading ? (
        <div className="now_playing_footer">
          <img
            src={data?.artwork ? data?.artwork : ""}
            alt={`${data?.title} by ${data?.artist}`}
          />
          <div>
            <p>{data?.title}</p>
            <p>{data?.artist}</p>
          </div>
        </div>
      ) : (
        <div className="now_playing_footer">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png"
            }
            alt={`loading`}
          />
          <div>
            <p>Loading...</p>
            <p>Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
}
