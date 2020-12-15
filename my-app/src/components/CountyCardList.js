import React from 'react';
import { Ring } from 'react-awesome-spinners';
import Card from './Card';
import { Link } from 'react-router-dom';

/*
    Component that will act a a container to hold each Card Component.
    * Props
        * Loaded: Boolean that represents if the page is loaded
        * Counties: Array of county objects that hold County information
        * Search: County name that was searched for in the previous search
*/
export default function CountyCardList(props) {
    // If there is not loaded prop, will render a loading ring to illustrate loading
    if (!props.loaded) {
        return (
            <div className="margin-top"><Ring/></div>
        );
    }

    if (props.counties.length > 0) {
        let counties = props.counties.map((county) => {
            return (
                <Card key={county.name + ", " + county.state} county={county}/>
            );
        });
        return (
            <div className="list">
                <p className="search-result">{props.counties.length} search results found for "{props.search}"</p>
                <Link to="/">Back to Saved Locations</Link>
                <img className="risk-scale2" src="../../riskscale.png" alt="Risk color scale"/>
                <div className="card-container">
                    {counties}
                </div>
            </div>
        );
    } else {
        return (
        <div className="empty-list">
            <p>Oops... we have no Covid-19 related data for "{props.search}"</p>
            <img src="../../error.jpg" alt="no results found"></img>
        </div>
        );
    }
}