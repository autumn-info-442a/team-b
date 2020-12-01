//import React, { useState } from 'react';
import React from 'react';

/*
  Component that represents a US Dashboard on Home Page.
*/
export default function UsDashboard() {
    return (
        <div className="us-page">
            <div>
                <p>United States COVID-19 Cases and Deaths</p>
            </div>
            <div className="us-stats">
                <div className="us-individual">
                    <p>TOTAL CASES: </p>
                    <div className="us-cases"><p>7,835,007</p></div>
                </div>
                <div className="us-individual">
                    <p>NEW CASES (1 Week):</p>
                    <div className="us-cases"><p>359,835</p></div>
                </div>
                <div className="us-individual">
                    <p>TOTAL DEATH: </p>
                    <div className="us-cases"><p>215,194</p></div>
                </div>
            </div>
            <div className="us-update">
                <p>CDC | Updated: Oct 14 2020 12:21PM</p>
            </div>
        </div>
      );
}