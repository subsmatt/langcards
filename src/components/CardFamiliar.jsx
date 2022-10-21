import { useState } from "react";

function CardFamiliar({familiar, onFamiliarToggle}){
    const [inTransition, setInTransition] =  useState(false);

    function doneCallback(){
        console.log(`In CardFamiliar:doneCallback ${new Date().getMilliseconds()}`);
        setInTransition(false);
    }

    return (
        <div className="oCardFavorite">
            <span>Familiar?</span>            
            <i className={familiar ? "fa fa-star pull-right" : "fa fa-star-o pull-right"} onClick={function() {
                setInTransition(true);
                onFamiliarToggle(doneCallback);
            }}></i>
            {inTransition ? (<span className="fas fa-circle-notch fa-spin"></span>) : null}
        </div>
    );
}

export default CardFamiliar;