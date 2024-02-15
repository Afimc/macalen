import React from "react";
import { Offers } from "../../../../../Data/Offers";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="Card ">
            <div className="TopOffer">
            <div className='pic'>
                <img  alt='sky'
                  src={props.Offer.pic}
                />
                </div>
                {props.Offer.title} 
                {props.Offer.uperText}
            </div>
            <div>{props.Offer.bottomText}</div>
        </div>
    );
};

export default Card;
