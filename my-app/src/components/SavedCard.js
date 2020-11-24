import React, { useState, useEffect } from 'react';
import AlertDialog from './ConfirmationDialog';

export default function SavedCard(props) {
    const county = props.county;
    let countyData = county.split("/");
    console.log(countyData);
    const name = countyData[0];
    const state = countyData[1];
    const risk = countyData[2];
    const count = countyData[3];
    const date = countyData[4];
    //<button className="remove-button">X</button>
    return (
        <div className="card">
            <div className={"card-option county-" + risk}>
                <AlertDialog 
                    info={county} 
                    label="X" 
                    remove="true" 
                    description={"Are you sure you want to remove '" + name + " County, " + state + " from your homepage?"}
                    classes="modal-button"
                />
            </div>
            <a className="card-link" href={"/county/" + name + "/" + state}>
                <div className={"card-body county-" + risk}>
                    <div>{"Total Cases: " + count}</div>
                    <div>{"Risk Level: " + risk}</div>
                </div>
                <div className="card-footer">
                    <div className="card-name">{name + " County, " + state}</div>
                    <div className="card-time">{"Last Updated: " + date}</div>
                </div>
            </a>
        </div>
    );
    
}