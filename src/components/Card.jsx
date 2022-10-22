import { useContext, memo } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ToolbarContext } from "../contexts/ToolbarContext";
import { CardContext, CardProvider } from "../contexts/CardContext";
import CardFamiliar from "./CardFamiliar";
import CardDelete from "./CardDelete";
import ErrorBoundary from "./ErrorBoundary";

const CardNoErrorBoundary = memo(function CardNoErrorBoundary({rec, updateRecord, insertRecord, deleteRecord}){
    const {id, word, type, desc, tags, hits, familiar} = rec;

    // Get theme Context
    const {theme} = useContext(ThemeContext);
    const extraThemeCardClass = theme === "light" ? "" : "bg-gradient"

    // Get toolbar Context
    const {showDesc} = useContext(ToolbarContext);

    console.log(`card: ${id} | ${word}`);

    return (
        <CardProvider rec={rec} updateRecord={updateRecord} insertRecord={insertRecord} deleteRecord={deleteRecord}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-4" key={id}>
                <div className={`card bg-${theme} ${extraThemeCardClass} p-2`}>
                    <div className="card-title">
                        <h5>{word}</h5>
                    </div>
                    <div className="card-body">
                        <span className="oCardDesc">{ showDesc ? desc.substr(1,3) : ""}</span>
                        <div className="oCardCat my-1">
                            <b>{type}</b>{" "}{tags.toString()}
                        </div>
                        <CardFamiliar />
                        <CardDelete />
                    </div>
                </div>
            </div>
        </CardProvider>
    );
}, areEqualCard);

function areEqualCard(prevProps, nextProps){
    return (prevProps.rec.familiar === nextProps.rec.familiar);
}

function Card(props){
    return (
        <ErrorBoundary errorUI={<div>Something went wrond in the Card component</div>}>
            <CardNoErrorBoundary {...props}></CardNoErrorBoundary>
        </ErrorBoundary>
    );
}

export default Card;