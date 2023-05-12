import React from 'react';
import cardsData from   '../cardsData.json';


const Cards = () => {
  debugger
  return (
    <div>
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <h3 className="card-block--title">{card.title}</h3>
          <img src={card.imageUrl} alt={card.title} />
          <div className="card-info--params">
            <div className="card-params--row">
              <div className="card-params--header">Årsavgift:</div>
              <div className="card-params--value">{card.fee}</div>
            </div>
            <div className="card-params--row">
              <div className="card-params--header">Maxkredit:</div>
              <div className="card-params--value">{card.credit}</div>
            </div>
            <div className="card-params--row">
              <div className="card-params--header">Årsränta:</div>
              <div className="card-params--value">{card.interestRate}</div>
            </div>
          </div>
          <div className="card-info--bullets">
            <ul>
              {card.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
          <a href={card.reviewLink}>Recension</a>
          <a href={card.applicationLink}>Gå till ansökan</a>
        </div>
      ))}
    </div>
  );
};

export default Cards;