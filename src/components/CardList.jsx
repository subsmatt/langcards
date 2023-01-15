import { useContext } from "react";
import { useSelector } from "react-redux";
import { ToolbarContext } from "../contexts/ToolbarContext";
import useRequestRest, {REQUEST_STATUS}  from "../hooks/useRequestRest";
import ReactPlaceholder from "react-placeholder/lib";
import Card from "./Card";
import CardAdd from "./CardAdd";

function CardList(){
    // Get theme settings
    const theme = useSelector((state) => state.toolbar.theme);
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
                            if (Object.hasOwn(rec, "word") && rec.word !== null && Object.hasOwn(rec, "desc") && rec.desc !== null) {
                                return rec.word.toLowerCase().includes(searchQuery) || rec.desc.toLowerCase().includes(searchQuery);
                            } else {
                                console.log("ERROR: malformed data, check that both 'word' and 'desc' properties are defined.");
                                return false;
                            }
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