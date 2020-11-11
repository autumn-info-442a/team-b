import React from 'react';

/*
Component that will act a a container to hold each CountyCard Component.
*/
export default function CountyCardList(props) {
    if (props.counties) {
        if (props.counties.length > 0) {
            let counties = props.counties.map((county) => {
            return <div><a href={"/county/" + county.county + "/" + county.province}>{county.county + ", " + county.province}</a></div>
            });
            return (
                <div className="list">
                    <p>{props.counties.length} search results found for "{props.search}"</p>
                    <div className="card-container">
                        {counties}
                    </div>
                </div>
            );
        } else {
            return (
            <div className="empty-list">
                <p>Unfortunately, we have no results for "{props.search}"</p>
                <img src="../error.jpg" alt="no results found"></img>
            </div>
            );
        }
    } else  {
        return (
            <div></div>
        );
    }
}