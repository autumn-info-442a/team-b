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
                <div className="us-individual"><p>TOTAL CASES: </p></div>
                <div className="us-individual"><p>NEW CASES (1 Week):</p></div>
                <div className="us-individual"><p>TOTAL DEATH: </p></div>
            </div>
        </div>
      );
}