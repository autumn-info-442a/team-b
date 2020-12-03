import React, { useState, useEffect } from 'react';
import AlertDialog from './ConfirmationDialog';

/*
    Card Component that represents either a search result or saved location for a user
    Provides higher level detail about a specific county.
    * Props:
        * County: Object that holds County information related to Covid.
        * Remove: If present, the card has a button to remove the saved Location, if not it will have a button to save a location.
*/
export default function Card(props) {
    const [risk, setRisk] = useState("NA");
    const [isSaved, setSaved] = useState(false);
    let county = props.county;
    let date = county.date.split(" ")[0];

    useEffect(() => {
        console.log(county["id"]);
        if (county["1dd"] >= 500) {
            setRisk("High");
        } else if (county["1dd"] > 250 && county["1dd"] < 500) {
            setRisk("Medium");
        } else if (county["1dd"] < 250 && county["1dd"] > 0) {
            setRisk("Low");
        }
        
        let saved = JSON.parse(localStorage.getItem("counties"));
        if (saved) {
          let index = saved.indexOf(county["id"]);
          if (index > -1) {
            setSaved(true);
          }
        }
    }, []);

    return (
        <div className="card">
            <div className={"card-option county-" + risk}>
                {isSaved ? <AlertDialog 
                    info={county["id"]}
                    label={<span class="material-icons saved card-button">favorite</span>}
                    remove
                    description={"Are you sure you want to remove '" + county.name + " County, " + county.state + "' from your homepage?"}
                    classes="modal-button"
                /> : 
                <AlertDialog 
                    info={county["id"]}
                    label={<span class="material-icons unsaved card-button">favorite</span>}
                    add
                    description={"Would you like to add " + county.name + " County, " + county.state + " to your dashboard?"}
                    classes="modal-button"
                />}
            </div>
            <a className="card-link" href={"/county/" + county.name + "/" + county.state}>
                <div className={"card-body county-" + risk}>
                    <div>{"Total Cases: " + county["cnt"]}</div>
                    <div>{"Risk Level: " + risk}</div>
                </div>
                <div className="card-footer">
                    <div className="card-name">{county.name + " County, " + county.state}</div>
                    <div className="card-time">{"Last Updated: " + date}</div>
                </div>
            </a>
        </div>
    );
}