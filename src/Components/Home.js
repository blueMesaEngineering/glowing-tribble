import React from "react";
// import Background from "../assets/Images/Backgrounds/183321-Banner.jpg";
// import Background from "../assets/Images/Backgrounds/blue-gradient-background-1920x960-image.png";
import gearHousing from "../assets/Images/Backgrounds/gearHousingBackground.png";

const styles = {
  // backgroundStyle: {
  //   width: "100%",
  //   height: "50%",
  //   backgroundImage: `url(${Background})`
  // },
  gearHousingStyle: {
    width: "50%",
    backgroundImage: `url(${gearHousing})`
  },
  // titleText: {
  //   fontSize: 40,
  //   fontFamily: "Verdana,sans-serif"
  // }
};

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="parent">
        <div id="div1">
        <div> 
          <center>
            <div>
              <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>Design. Build. Create. Learn.</h2>
            </div>
            <table className="standardTable">
              <tr>
                <th>
                  <img
                    className="projects"
                    src={gearHousing}
                    alt={"Gear Housing"}
                    />
                </th>
                <th>
                  <p>Have an idea?</p>
                  <p>Want to discuss?</p>
                  <p>
                    We are currently active in the Software Engineering,
                    Mechanical Design Engineering, and Biomedical
                    Engineering spaces.
                  </p>
                  <p>Have a look at our projects for more information.</p>
                </th>
              </tr>
            </table>
          </center>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
