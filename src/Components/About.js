import React from "react";
import Background from "../assets/Images/Backgrounds/183321-Banner.jpg";
import Nathan from "../assets/Images/Profiles/NDG-Profile-20190714.png";
import Steve from "../assets/Images/Profiles/DocHall1.png";

const styles = {
  backgroundStyle: {
    width: "100%",
    height: 100,
    backgroundImage: `url(${Background})`
  },

  titleText: {
    fontSize: 30,
    padding: 10,
    fontFamily: "sans-serif"
  }
};

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="parent">
        <center>
          {/* <div id="div1">
            <div id="div2" style={styles.titleText}>
              {" "}
              <p className="content">Collaborators</p>
            </div>
          </div> */}
          <div style={{ padding: "0px" }}>
            <center>
              <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>Collaborators</h2>
            </center>
          </div>
          <hr style={{ width: "75%" }} />
          <div>
            <table style={{ width: "80%" }}>
              <tr>
                <th>
                  <img className="profile" src={Nathan} alt={"ND Guthrie"} />
                  <p>Nathan D. Guthrie</p>
                </th>
                <th>
                  <p>
                    I am a full time Software Engineer open to new opportunities. 
                    I am currently re-exploring Python after dabbling in it several 
                    years ago in classes. I'm also dabbling with some Raspberry Pi 
                    and other embedded projects using the Qt5 framework. 
                    My background consists primarily of C++ as well as Ruby, Rails, 
                    Visual Basic, Python, .NET, and others.
                  </p>
                  <p>
                    I also work on side projects such as the Distralite, a
                    collaborative effort with Dr. Hall and local law enforcement
                    to build a "less lethal" distraction device.
                  </p>
                  <p>
                    In July 2018, I began Flight Training to work towards my
                    Private Pilot's license, and the experience has been quite
                    enjoyable.
                  </p>
                  <p>M.S. Mechanical Engineering, Purdue University, 2013</p>
                </th>
              </tr>
            </table>
          </div>
          <hr style={{ width: "75%" }} />
          <div>
            <table style={{ width: "80%" }}>
              <tr>
                <th>
                  <img className="profile" src={Steve} alt={"Steve Hall"} />
                  <p>Dr. Stephen Hall</p>
                </th>
                <th>
                  <p>
                    Performs research in genetic, molecular, cellular and tissue
                    engineering and molecular and structural biology.
                  </p>
                  <p>
                    Studied the molecular mechanisms and pathogenesis of viruses
                    as well as vaccine development, adjuvants, and antibody
                    engineering and production.
                  </p>
                  <p>
                    Conducts nanoscale topography engineering of natural and
                    synthetic biomaterials for preclinical and clinical cellular
                    therapy.
                  </p>
                  <p>PhD Biomedical Engineering, Purdue University, 1995</p>
                </th>
              </tr>
            </table>
          </div>
        </center>
      </div>
    );
  }
}

export default About;
