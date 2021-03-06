import React from "react";

const Home = ({history}) => {
  return <div>
      <div>
            <div className="ui inverted vertical masthead center aligned segment">
              <div className="ui text container">
                <h1 className="ui inverted stackable header">
                  <img
                    className="ui image massive"
                    src="/assets/logo.png"
                    alt="logo"
                  />
                  <div className="content">Re-vents</div>
                </h1>
                <h2>Do whatever you want to do</h2>
                <div className="ui huge white inverted button" onClick={()=>history.push("/events")}>
                  Get Started
                  <i className="right arrow icon" />
                </div>
              </div>
            </div>
         
          </div>
  </div>;
};
export default Home;
