import React from 'react';
import Card from './Card';

/*
    Component that will act a a container to hold each Card Component (For Saved Location Cards).
    * Props
        * Counties: Array of county objects that hold County information
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