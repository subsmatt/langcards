import { useState, useEffect } from "react";
import axios from "axios";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
};

const restUrl = "api/cards";

function useRequestRest() {
    const [data, setData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    const delay = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    useEffect(() => {
        async function delayFunc() {
            try {
                const result = await axios.get(restUrl);
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(result.data);
            }
            catch (e){
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }
        }
        
        delayFunc();
    },[]);

    function updateRecord(recordUpdated, doneCallback){
        const originalRecords = [...data];
        const newRecords = data.map(function(rec){
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });

        async function delayFunction(){
            try {
                setData(newRecords);
                await axios.put(`${restUrl}/${recordUpdated.id}`, recordUpdated);
                if (doneCallback){
                    doneCallback();
                }
            } catch (err) {
                console.log("error thrown inside delayFunciton: ", err);
                if (doneCallback){
                    doneCallback();
                }
                setData(originalRecords);
            }
        }

        delayFunction();
    }

    function insertRecord(record, doneCallback){
        const originalRecords = [...data];

        // Set new ID to be max id + 1
        const idNew = originalRecords.reduce((acc, current) => {
            const idCurrent = parseInt(current.id);
            return idCurrent > acc ? idCurrent : acc;
        }, 0) + 1;
        const newRec = {...record, id: idNew}


        const newRecords = [newRec, ...data];

        async function delayFunction(){
            try {
                setData(newRecords);
                await axios.post(`${restUrl}/99999`, record);
                if (doneCallback){
                    doneCallback();
                }
            } catch (err) {
                console.log("error thrown inside delayFunciton: ", err);
                if (doneCallback){
                    doneCallback();
                }
                setData(originalRecords);
            }
        }

        delayFunction();
    }

    function deleteRecord(record, doneCallback){
        const originalRecords = [...data];
        const newRecords = data.filter(function(rec){
            return rec.id != record.id;
        });

        async function delayFunction(){
            try {
                setData(newRecords);
                await axios.delete(`${restUrl}/${record.id}`, record);
                if (doneCallback){
                    doneCallback();
                }
            } catch (err) {
                console.log("error thrown inside delayFunciton: ", err);
                if (doneCallback){
                    doneCallback();
                }
                setData(originalRecords);
            }
        }

        delayFunction();
    }

    return {data, requestStatus, error, updateRecord, insertRecord, deleteRecord};
}

export default useRequestRest;