import './covid.css';
import React, { useEffect, useState } from 'react';



function Covid() {
  const [country, setCountry] = useState(null);
  const [search, setSearch] = useState("Pakistan");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://corona.lmao.ninja/v2/countries/${search}`
      const response = await fetch(url);
      const resJson = await response.json();
      setCountry(resJson)
    }
    fetchApi()
  }, [search])
  return (
    <>

      <div className="box">


        <div className="inputdata">
          <input
            className="input"
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value)
            }}
          />
        </div>
        {!country ? (
          <p className="" error>No Data Found</p>
        ) : (
            <div className="info">
              <br />
              <h1 className="hy">
                {search}
              </h1>
              <br />
              <h3>
                Total Cases : {country.cases}
              </h3>
              <br />
              <h3>Deaths :  {country.deaths}</h3>
              <br />
              <h3>Recovered : {country.recovered}</h3>
              <br />
              <h3>Critical Condition : {country.critical}</h3>
              <br />
              <h3>Cases Reported Today : {country.todayCases}</h3>
              <br />

            </div>
          )}

      </div>

    </>


  );
}

export default Covid;
