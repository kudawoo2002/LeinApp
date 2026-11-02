import "./voiceStat.css";

function VoiceStat() {
  return (
    <div className="voiceStatMainWrapper">
      <div className="targetWrapper">
        <span className="stat">6 min of checked speech</span>
        <span>Goal: 1,000 hours</span>
      </div>
      <div className="progressBarWrapper"></div>
      <div className="contributionWrapper">
        <span className="totalContributionWrapper">
          30 contributors · 68 voice clips · 5 photos · 0 videos · 11 written
          pieces
        </span>
        <span className="btnAiWrapper">For researchers & AI teams →</span>
      </div>
    </div>
  );
}

export default VoiceStat;
