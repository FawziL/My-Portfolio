import './CardService.css';

function CardService({titleService, textService}) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            <p>{titleService}</p>
        </div>
        <div class="flip-card-back">
            <p>{textService}</p>
        </div>
      </div>
    </div>
  );
}

export default CardService;
