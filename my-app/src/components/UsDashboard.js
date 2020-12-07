import React, { useEffect, useState } from 'react';

/*
  Component that represents a US Dashboard on Home Page.
*/
export default function UsDashboard() {
    const requestUri = "https://disease.sh/v3/covid-19/countries/us?yesterday=true";
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(requestUri).then((response) => response.json())
        .then((responseData) => {
            setData(responseData);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="us-page">
            <div>
                <p>United States COVID-19 Cases and Deaths</p>
            </div>
            <div className="us-stats">
                <div className="us-individual">
                    <p>TOTAL CASES:</p>
                    <div className="us-cases"><p>{data['cases']}</p></div>
                </div>
                <div className="us-individual">
                    <p>NEW CASES (1 Day):</p>
                    <div className="us-cases"><p>{data['todayCases']}</p></div>
                </div>
                <div className="us-individual">
                    <p>TOTAL DEATHS:</p>
                    <div className="us-cases"><p>{data['deaths']}</p></div>
                </div>
            </div>
            <div className="us-update">
                <p>Worldometers | Updated Every 10 Minutes</p>
            </div>
        </div>
      );
}