import React from "react";

function HomePage() {
  function checkWeather() {
    console.log(
      "http://api.weatherstack.com/current?access_key=ce445a63f038aabe5b4f0476994b5ab9"
    );
  }

  return (
    <section>
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="field ">
            <div className="control is-centered" height="10px">
              <input
              className="input"
                id="city"
                name="city"
                type="text"
                placeholder="Check weather you dweeb"
                maxLength="50"
              />
            </div>

            <div className="input is-grouped"> 
                <div className="control">
                    <button class="button is-primary">submit</button>
                    </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
