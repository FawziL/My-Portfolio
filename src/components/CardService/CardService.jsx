import './CardService.css';

function CardService({titleService, textService}) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
            <h3>{titleService}</h3>
        </div>
        <div className="flip-card-back">
            <p>{textService}</p>
        </div>
      </div>
    </div>
  );
}

export default CardService;
