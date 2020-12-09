import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

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
                <h4>United States COVID-19 Cases and Deaths</h4>
            </div>
            <div className="us-stats">
                <div className="us-individual">
                    <p>Total Cases:</p>
                    <div className="us-cases"><p><NumberFormat value={data['cases']} displayType="text" thousandSeparator={true} /></p></div>
                </div>
                <div className="us-individual">
                    <p>New Cases (1 Day):</p>
                    <div className="us-cases"><p><NumberFormat value={data['todayCases']} displayType="text" thousandSeparator={true} /></p></div>
                </div>
                <div className="us-individual">
                    <p>Total Deaths:</p>
                    <div className="us-cases"><p><NumberFormat value={data['deaths']} displayType="text" thousandSeparator={true} /></p></div>
                </div>
            </div>
            <div className="us-update">
                <p> Data from <a href="https://www.worldometers.info/coronavirus/country/us/">Worldometers</a> | Updated every 10 minutes</p>
            </div>
        </div>
      );
}