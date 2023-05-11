import './CardService.css';

function CardService({titleService, textService}) {
  return (
    <>
        <div className='CardService'>

          <div className="card-front">
          <p>{titleService}</p>
          </div>
          <div className="card-back">
            <p>{textService}</p>
          </div>

        </div>
    </>
  );
}

export default CardService;
