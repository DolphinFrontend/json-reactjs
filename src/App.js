import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";

import countryjson from "./Country.json";

function App() {
  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");

  const handleCountry = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = countryjson.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  };

  const handleState = (e) => {
    e.preventDefault();
    const stateid = e.target.value;
    console.log(stateid);
    setStateid(stateid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Get Country id " + countryid + " And " + stateid);
  };

  return (
  
    <React.Fragment>
      <Container class="container mx-auto px-4 w-full ">
        <div class="columns p-9 ">
          <div className="">
            <h3 className="text-2xl p-5 italic ">
              Select Country State From JSON file in Reactjs
            </h3>
            <form
              class="  relative h-32 overflow-auto bg-gradient-to-r from-purple-500 to-pink-500 flex-wrap p-6 box-border rounded flex items-center gap-10 object-center "
              onSubmit={handleSubmit}
            >
              <div className="col-md-3">
                <label className="form-label">Country</label>
                <div className="text-dark">
                  <select
                    name="country"
                    className="border-2 border-rose-500"
                    onChange={(e) => handleCountry(e)}
                  >
                    <option value="">--Select Country--</option>
                    {countryjson.map((getcountry, index) => (
                      <option key={index} value={getcountry.country_id}>
                        {getcountry.country_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-3">
                <label className="form-label"> State</label>
                <div className="text-dark">
                  <select
                    name="states"
                    className="border-2 border-rose-500"
                    onChange={(e) => handleState(e)}
                  >
                    <option value="">--Select State--</option>
                    {state.map((getstate, index) => (
                      <option value={getstate.state_id} key={index}>
                        {getstate.state_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="com-md-2" style={{ padding: "9px" }}>
                <label className="form-label"></label>
                <div className="text-dark">
                  <button
                    name="submit"
                    className=" bg-indigo-500 border-4 border-sky-500 rounded-full font-bold  "
                  >
                    Submit{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
          </div>  

      </Container>
    </React.Fragment>
  
  );
}

export default App;
