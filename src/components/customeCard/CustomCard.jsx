import "./customCard.css";

function CustomCard({ smalltitle, title, desc }) {
  return (
    <div className="customCardWrapper">
      <div className="customCardContentWrapper">
        <span>{smalltitle}</span>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="btn">
          <button className="customBtn">Join now</button>
          <button className="customBtnHow">How we use your voice</button>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
