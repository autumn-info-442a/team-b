import React, { useState, useEffect } from 'react';

export default function Card(props) {
    const [risk, setRisk] = useState("NA");
    let county = props.county;
    let date = county.date.split(" ")[0];

    useEffect(() => {
    if (county["1dd"] >= 500) {
        setRisk("High");
        } else if (county["1dd"] > 250 && county["1dd"] < 500) {
        setRisk("Medium");
        } else if (county["1dd"] < 250 && county["1dd"] > 0) {
        setRisk("Low");
        }     
    }, []);

    return (
        <div className="card">
            <a className="card-link" href={"/county/" + county.name + "/" + county.state}>
                <div className={"card-body county-" + risk}>
                    <div>{"Total Cases: " + county["cnt"]}</div>
                    <div>{"Risk Level: " + risk}</div>
                </div>
                <div className="card-footer">
                    <div className="card-name">{county.name + ", " + county.state}</div>
                    <div className="card-time">{"Last Updated: " + date}</div>
                </div>
            </a>
        </div>
    );
}