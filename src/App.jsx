import LinkComponent from "./components/LinkComponent";
import spotifyIcon from "./assets/_spotify.png";
import appleMusicIcon from "./assets/_apple.png";
import ytmusic from "./assets/_yt.png";
import boomplay from "./assets/boomplay.png";
import bg from "/3.jpg";

import WaveformPlayer from "./components/WaveformPlayer";

import "./font.css";

const links = {
  spotify:
    "https://open.spotify.com/track/4kx3e8xvTcaWLF6admGh4O?si=50f36d01f7e249aa",
  apple: "https://music.apple.com/gh/album/believer/1772929380?i=1772929550",
  yt: "https://music.youtube.com/watch?v=GcqzXG_LWp4&si=y3LsrIqUM5AE9UkJ",
  boomplay:
    "https://www.boomplay.com/songs/184984263?srModel=COPYLINK&srList=WEB",
};

function App() {
  return (
    <main
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="w-screen min-h-screen flex h-screen flex-col items-center justify-center"
    >
      <div className="w-[380px] flex rounded-lg flex-col py-2 my-2">
        <p className="flex justify-center text-center text-2xl font-semibold text-orange-500">
          {" "}
          Cl!Q ft. Yaw Palmer BELIEVER
        </p>
      </div>
      <div className="w-[380px] rounded-lg bg-gray-100 flex flex-col py-2">
        <div>
          <div className="text-center font-semibold mt-2 text-xl"></div>
          <div className="mt-4">
            <LinkComponent
              icon={spotifyIcon}
              link={links.spotify}
              imagew="100"
            />
            <LinkComponent
              icon={appleMusicIcon}
              link={links.apple}
              imagew="150"
            />
            <LinkComponent icon={ytmusic} link={links.yt} imagew="150" />
            <LinkComponent
              icon={boomplay}
              name={"Boomplay"}
              link={links.boomplay}
              imagew="100"
            />
          </div>
        </div>

        <div className="my-4">
          <WaveformPlayer />
        </div>
      </div>

      <footer className="text-gray-300 text-xs mt-2">
        <a href="https://x.com/dzidula_1" target="_blank">
          dev: thelocalgodd
        </a>
      </footer>
    </main>
  );
}

export default App;
