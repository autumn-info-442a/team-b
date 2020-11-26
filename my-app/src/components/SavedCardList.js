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
                <li>{county}</li>
            );
        });
        return (
            <div className="list">
                <ul>
                    {counties}
                </ul>
            </div>
        );
    } 
}