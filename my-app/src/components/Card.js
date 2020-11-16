import React from 'react';

export default function Card(props) {
    let county = props.county;
    let date = county.updatedAt.split(" ")[0];
    return(
        <div className="card">
            <a className="card-link" href={"/county/" + county.county + "/" + county.province}>
                <div className="card-body">

                </div>
                <div className="card-footer">
                    <div className="card-name">{county.county + ", " + county.province}</div>
                    <div className="card-time">{"Last Updated: " + date}</div>
                </div>
            </a>
        </div>
    );
}