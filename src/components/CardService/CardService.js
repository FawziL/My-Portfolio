import './CardService.css';

function CardService({titleService, textService}) {
  return (
    <>
        <div className='CardService'>

          <div class="card-front">
          <p>{titleService}</p>
          </div>
          <div class="card-back">
            <p>{textService}</p>
          </div>

        </div>
    </>
  );
}

export default CardService;
