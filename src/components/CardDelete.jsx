import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";

function CardDelete(){
    const {rec, deleteRecord} = useContext(CardContext);

    return (
        <span>
            <a href="#" className="">
            <i onClick={(e) => {
                e.preventDefault();
 
                if (window.confirm("Are you sure you want to delete this record?")){
                    deleteRecord(rec);
                }
            }}>
                - Delete
            </i>
        </a>
        </span>
    );
}

export default CardDelete;