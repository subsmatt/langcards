import { useState, useContext } from "react";
import { CardContext, CardProvider } from "../contexts/CardContext";

function CardFamiliar(){
    const [inTransition, setInTransition] =  useState(false);
    const {rec, updateRecord} = useContext(CardContext);
    //const {familiar} = rec;

    function doneCallback(){
        console.log(`In CardFamiliar:doneCallback ${new Date().getMilliseconds()}`);
        setInTransition(false);
    }

    return (
        <div className="oCardFavorite">
            <span>Familiar?</span>            
            <i className={rec.familiar ? "fa fa-star pull-right" : "fa fa-star-o pull-right"} onClick={function() {
                setInTransition(true);
                updateRecord({...rec, familiar: !rec.familiar}, doneCallback);
            }}></i>
            {inTransition ? (<span className="fas fa-circle-notch fa-spin"></span>) : null}
        </div>
    );
}

export default CardFamiliar;