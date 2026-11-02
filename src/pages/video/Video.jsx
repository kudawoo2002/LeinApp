import CustomCard from "../../components/customeCard/CustomCard";
import "./video.css";

function Video() {
  return (
    <div className="videoWrapper">
      <CustomCard
        smalltitle="One minute first"
        title="Join to contribute"
        desc="Before you record or write, read how your contributions will be used
          and choose what you share about yourself. No email or phone number
          needed."
      />
    </div>
  );
}

export default Video;
