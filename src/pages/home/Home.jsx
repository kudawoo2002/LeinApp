import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import VideoCard from "../../components/homeVideo/VideoCard";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Card from "../../components/card/Card";
import VoiceStat from "../../components/voiceStatic/VoiceStat";

function Home() {
  return (
    <div className="mainWrapper">
      <div className="mainContentWrapper">
        <div className="videoWrapper">
          <VideoCard />
        </div>

        <div className="videoContentWrapper">
          <h2 className="TopvideoHeader">
            Teach the machine <br />
            to hear how <br />
            Liberia talks.
          </h2>
          <p className="videoTopHear">Watch first · under a minute</p>
          <h2 className="videoHeader">
            Your voice <br />
            can teach the machine
          </h2>
          <p className="videoDesc">
            Under a minute, in Liberian English, on why our own way of talking
            needs to be in the machine, and how you can add yours right from
            your phone.
          </p>
          <Link to="/speak" className="btnTalk">
            Start talking
          </Link>
        </div>
      </div>
      <div className="homecardWrapper">
        <Card
          title="Speak"
          desc="Read sentences aloud, or talk freely about everyday life. 1 to 30
          seconds each."
          footer="Go→"
        />
        <Card
          title="Write"
          desc="Add sentences and short dialogues the way people really talk."
          footer="Go →"
        />
        <Card
          title="Photos"
          desc="Markets, food, kekes, signs and lappa: everyday Liberian life, with a caption."
          footer="Go →"
        />
        <Card
          title="Video"
          desc="Short clips of natural conversation, or audio only if you prefer."
          footer="Go →"
        />
        <Card
          title="My contributions"
          desc="Play back everything you sent, see its reference number and save a copy."
          footer="Go →"
        />
      </div>
      <div className="voiceStatWrapper">
        <VoiceStat />
      </div>
    </div>
  );
}

export default Home;
