import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import LineGraph from './LineGraph';
import SearchBar from './SearchBar';
import { Ring } from 'react-awesome-spinners';
import AlertDialog from './ConfirmationDialog';

/*
  Component that represents a County Page.
*/
export default function CountyDetail(props) {

    let { county, state } = useParams();
    county = county.charAt(0).toUpperCase() + county.slice(1);
    state = state.charAt(0).toUpperCase() + state.slice(1);
    const [location, setLocation] = useState();
    const [risk, setRisk] = useState("NA");
    const [loaded, setLoaded] = useState(false);
    const requestUri = "https://cors-anywhere.herokuapp.com/https://covercovid-19.com/county/" + county + "/" + state;
  
    useEffect(() => {
      fetch(requestUri).then((response) => response.json())
      .then((responseData) => {
        let data = responseData[0];
        setLocation(data);
        if (data["1dd"] >= 500) {
          setRisk("High");
        } else if (data["1dd"] > 250 && data["1dd"] < 500) {
          setRisk("Medium");
        } else if (data["1dd"] < 250 && data["1dd"] > 0) {
          setRisk("Low");
        }
      })
      .then(() => {
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    if (!loaded) {
      return (
        <div className="loading">
          <Ring/>
        </div>
      );
    }
  
    if (!location) {
      return (
        <main className="home-page">
          <SearchBar/>
          <div className="county-error">
            <b>Sorry, it seems that we could not find data for the County that you are looking for. Please try again.</b>
          </div>
        </main>
      );
    }

    return (
      <main className="more-info">
        <div className="county-page">
          <div className={"county-header county-" + risk}>
              <div>
                <a className="back" href={'/search/' + county}>Back</a>
              </div>
              <div>
                <h2>{county} County, {state}</h2>
                <h3><b>Risk Level: {risk}</b></h3>
              </div>
              <div className="favorite">
                <AlertDialog 
                  info={county + "/" + state + "/" + risk + "/" + location["cnt"] + "/" + location.date.split(" ")[0]} 
                  label="Add to Dashboard"
                  remove="true"
                  add="true"
                  description="Confirm whether you would like to add or remove this location from your dashboard."
                  classes="save-button"
                />
              </div>
          </div>
          <div className="county-body">
            <div className="county-main">
              <div className="county-stats">
                <p>Total Cases: <b>{location ? location["cnt"] : "N/A"}</b></p>
                <p>New Cases (2 Weeks): <b>{location ? location["2wd"] : "N/A"}</b></p>
                <p>New Cases (1 Week): <b>{location ? location["1wd"] : "N/A"}</b></p>
                <p>New Cases (1 Day): <b>{location ? location["1dd"] : "N/A"}</b></p>
                <p>Last Updated: <b>{location ? location.date.split(" ")[0] : "N/A"}</b></p>
              </div>
              <div className="county-visual">
                {location ? <LineGraph location={location}/> : <div></div>}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}