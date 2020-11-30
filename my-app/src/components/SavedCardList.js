import React from 'react';
import Card from './Card';

/*
Component that will act a a container to hold each CountyCard Component.
*/
export default function SavedCardList(props) {
    if (props.counties) {
        let counties = props.counties.map((county) => {
            return (
                <Card key={county.name + "," + county.state} county={county} remove/>
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