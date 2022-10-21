import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ToolbarContext } from "../contexts/ToolbarContext";
import { sampleData } from "../data/sampleData";
//import useRequestDelay, {REQUEST_STATUS}  from "../hooks/useRequestDelay";
import useRequestRest, {REQUEST_STATUS}  from "../hooks/useRequestRest";
import ReactPlaceholder from "react-placeholder/lib";
import Card from "./Card";
import CardAdd from "./CardAdd";

function CardList(){
    // Get theme context
    const {theme} = useContext(ThemeContext);
    const extraThemeContainerClass = theme === "light" ? "" : "bg-opacity-75"

    // Get toolbar context
    const {searchQuery} = useContext(ToolbarContext);

    // Load data
    const {data, requestStatus, error, updateRecord, insertRecord, deleteRecord} = useRequestRest();

    // Show Error and abort if loading failed
    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
            <div className="text-center text-danger my-5">
                ERROR: <b>Loading data failed {error}</b>
            </div>
        );
    }

    return (        
        <div className={`container bg-${theme} text-bg-${theme} ${extraThemeContainerClass}`}>
            <ReactPlaceholder type="media" rows={10} ready={requestStatus === REQUEST_STATUS.SUCCESS}>
                <CardAdd insertRecord={insertRecord}/>
                <div className="row">
                    {data.filter(function(rec){
                        return (
                            rec.word.toLowerCase().includes(searchQuery) ||
                            rec.desc.toLowerCase().includes(searchQuery) 
                        )
                        }).map(function(rec){                        
                            return (
                                <Card key={rec.id} rec={rec} updateRecord={updateRecord} insertRecord={insertRecord} deleteRecord={deleteRecord}/>
                            );
                        }
                    )}
                </div>
            </ReactPlaceholder>
        </div>        
    );
}

export default CardList;