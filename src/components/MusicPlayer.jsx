import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Play, Pause, Plus } from "lucide-react";

const focusTracks = [
  {
    title: "Lo-Fi Chill",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Deep Focus",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];

export default function MusicPlayer({ className }) {
  const [audio] = useState(new Audio(focusTracks[0].url));
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  useEffect(() => {
    audio.src = focusTracks[trackIndex].url;
    if (isPlaying) audio.play();
    return () => audio.pause();
  }, [trackIndex]);

  const togglePlay = () => {
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setTrackIndex((trackIndex + 1) % focusTracks.length);
    setIsPlaying(true);
  };

  return (
    <Card className={CardContent}>
      <CardContent>
        <h2>🎵 Music Player</h2>
        <p>{focusTracks[trackIndex].title}</p>
        <Button onClick={togglePlay} className="custom-button">
          {isPlaying ? <Pause /> : <Play />}
        </Button>
        <Button onClick={nextTrack} className="custom-button">
          <Plus />
        </Button>
      </CardContent>
    </Card>
  );
}
