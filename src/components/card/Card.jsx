import "./card.css";

function Card({ title, desc, footer }) {
  return (
    <div className="cardWrapper">
      <div className="">
        <h2>{title}</h2>
        <p>{desc}</p>
        <span>{footer}</span>
      </div>
    </div>
  );
}

export default Card;
