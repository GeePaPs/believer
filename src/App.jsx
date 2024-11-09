import LinkComponent from "./components/LinkComponent";
// import spotifyIcon from "./assets/_spotify.png";
// import appleMusicIcon from "./assets/_apple.png";
import ytmusic from "./assets/_yt.png";
import boomplay from "./assets/boomplay.png";
import bg from "/3.jpg";

// import WaveformPlayer from "./components/WaveformPlayer";

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
      className="w-screen flex h-screen flex-col items-center justify-center overflow-auto py-16"
    >
      <div className="w-[380px] flex rounded-lg flex-col py-0 my-0 bg-white border-black border-2">
        <p className="flex justify-center text-center text-2xl font-semibold text-black">
          {" "}
          Cl!Q ft. Yaw Palmer BELIEVER
        </p>
      </div>
      <div className="w-[380px] rounded-lg flex flex-col py-2">
        <div>
          <iframe
            className="border border-transparent"
            height="175"
            width="100%"
            title="Media player"
            src="https://embed.music.apple.com/us/album/believer/1772929380?i=1772929550&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1772929550&amp;theme=auto"
            id="embedPlayer"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            allow="autoplay *; encrypted-media *; clipboard-write"
            // style="border: 0px; border-radius: 12px; width: 100%; height: 175px; max-width: 660px;"
          ></iframe>
          <iframe
            // style="border-radius:12px"
            src="https://open.spotify.com/embed/album/4jwyTprjYQa7T4LS4bz9UW?utm_source=generator"
            width="100%"
            height="152"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>{" "}
          <iframe
            id="ytplayer"
            type="text/html"
            width="380"
            style={{ marginTop: 10, marginBottom: 10, borderRadius: 10 }}
            height="360"
            src="https://www.youtube.com/embed/9iVnstd6FW0?autoplay=1&origin=http://www.youtube.com/watch?v=9iVnstd6FW0"
          ></iframe>
          <div className=" ">
            {/* <LinkComponent
              icon={spotifyIcon}
              link={links.spotify}
              imagew="100"
            /> */}
            {/* <LinkComponent
              icon={appleMusicIcon}
              link={links.apple}
              imagew="150"
            /> */}
            {/* <LinkComponent icon={ytmusic} link={links.yt} imagew="150" /> */}
            <LinkComponent
              icon={boomplay}
              name={"Boomplay"}
              link={links.boomplay}
              imagew="100"
            />
          </div>
        </div>

        {/* <div className="my-4"><WaveformPlayer /></div> */}
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
