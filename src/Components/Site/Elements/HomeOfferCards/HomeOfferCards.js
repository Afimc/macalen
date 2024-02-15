import React from "react";
import './HomeOfferCards.css';
import Card from './Card/Card';
import {Offers} from '../../../../Data/Offers';



const HomeOfferCards = () => {
    return(
        <div className="HomeOfferCards">
            {
                Offers.map(Offer =>{
                    return(
                        <Card key={Offer.id} Offer={Offer}/>
                    )
                })
            }
        </div>
    )
}

export default HomeOfferCards;