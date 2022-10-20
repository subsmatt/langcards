import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ToolbarContext } from "../contexts/ToolbarContext";
import { data } from "../data/sampleData"

function CardList(){
    const {theme} = useContext(ThemeContext);
    const extraThemeContainerClass = theme === "light" ? "" : "bg-opacity-75"
    const extraThemeCardClass = theme === "light" ? "" : "bg-gradient"
    const {searchQuery} = useContext(ToolbarContext);

    return (
        <div className={`container bg-${theme} text-bg-${theme} ${extraThemeContainerClass}`}>
            <div className="row">
                {data.map(function(rec){
                    let {id, word, type, desc, tags, hits, iknowthis} = rec;
                    
                    return (
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-4" key={id}>
                            <div className={`card bg-${theme} ${extraThemeCardClass} p-2`}>
                                <div className="card-title">
                                    <h5>{word}</h5>
                                </div>
                                <div className="card-body">
                                    <span>{desc}</span>
                                    <br/>
                                    <b>{type}</b>{" "}{tags.toString()}
                                    <i className="fa fa-star orange"></i>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CardList;