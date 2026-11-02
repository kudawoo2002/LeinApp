import "./contribution.css";
import CustomCard from "../../../components/customeCard/CustomCard";

function Contribution() {
  return (
    <div className="contributionWrapper">
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

export default Contribution;
