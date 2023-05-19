import './CardService.css';

function CardService({titleService, textService}) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            <h3>{titleService}</h3>
        </div>
        <div class="flip-card-back">
            <p>{textService}</p>
        </div>
      </div>
    </div>
  );
}

export default CardService;
