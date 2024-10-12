import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import audioFile from "../assets/beles.mp3";

import { PauseIcon, PlayCircle02Icon } from "../assets/Icons";

function WaveformPlayer() {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize Wavesurfer
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "black",
      progressColor: "#3B8686",
      barWidth: 2,
      //   width: "70%",
      responsive: true,
      height: 40,
      backend: "MediaElement",
    });

    // Load the audio file
    wavesurferRef.current.load(audioFile);

    // Handle loop by rewinding to start after track ends
    wavesurferRef.current.on("finish", () => {
      wavesurferRef.current.play(); // Replay the audio when it finishes
    });

    return () => {
      wavesurferRef.current.destroy(); // Cleanup on unmount
    };
  }, []);

  const handlePlayPause = () => {
    if (wavesurferRef.current.isPlaying()) {
      wavesurferRef.current.pause();
      setIsPlaying(false);
    } else {
      wavesurferRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex mx-8">
      <button onClick={handlePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayCircle02Icon />}
      </button>
      <div className="bg-gray-200 mx-2 rounded-lg w-full px-2">
        <div ref={waveformRef} id="waveform" className="waveform-container" />
      </div>
    </div>
  );
}

export default WaveformPlayer;
