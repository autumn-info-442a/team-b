import React from 'react';
import { Ring } from 'react-awesome-spinners';
import SavedCard from './SavedCard';

/*
Component that will act a a container to hold each CountyCard Component.
*/
export default function SavedCardList(props) {
    if (props.counties) {
        let counties = props.counties.map((county) => {
            return (
                <SavedCard key={county} county={county}/>
            );
        });
        return (
            <div className="list">
                <div className="card-container">
                    {counties}
                </div>
            </div>
        );
    } 
}