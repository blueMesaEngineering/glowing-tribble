import React from "react";
import Background from "../assets/Images/Backgrounds/183321-Banner.jpg";
import Distralite from "../assets/Images/Other/Distralite.jpg";
import minotaursHoof from "../assets/Images/Other/minotaursHoof.png";

const styles = {
  backgroundStyle: {
    width: "100%",
    height: 100,
    backgroundImage: `url(${Background})`
  },

  titleText: {
    fontSize: 30,
    padding: 10,
  }
};

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="parent">
        {/* <div id="div1">
          <center>
            <div id="div2" style={styles.titleText}>
              {" "}
              <p className="content" >Distralite</p>
            </div>
          </center>
        </div> */}
        {/* <div style={{ padding: "0px" }}> 
          <center>
            <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>Distralite</h2>
          </center>
        </div> */}
        <div style={{ padding: "70px" }}>
          <center>
            <table>
              <tr>
                <th>
                  <img
                    className="left "
                    src={Distralite}
                    alt={"Distralite"}
                    style={{ width: "70%" }}
                  />
                </th>
                <th style={{ width: "50%" }}>
                  <h2>
                    <ul className="content">
                      <li>
                        The Distralite is a less-lethal, electronic, distraction
                        device.
                      </li>
                      <li>
                        A three to five second time delayed strobing light and
                        sound effect is emitted from the device upon activation.
                      </li>
                      <li>
                        Designed to run for hours on end utilizing a 12 volt
                        system powered by Streamlight CR123A batteries.
                      </li>
                      <li>
                        It is also designed to be utilized in steady light mode
                        as an illuminative flashlight emitting light in radial
                        and spherical directions.
                      </li>
                      <li>
                        Possible uses: Law Enforcement, Search and Rescue,
                        Tactical Training, Civilian Personal Safety, Utility,
                        Construction, etc.
                      </li>
                    </ul>
                  </h2>
                </th>
              </tr>
            </table>
          </center>
        </div>
        <div style={{ padding: "10px" }}>
          <center>
            <h2 className="content">Minotaur's Hoof</h2>
          </center>
        </div>
        <div>
          <center>
            <table>
              <tr>
                <th>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://ec2-18-225-7-171.us-east-2.compute.amazonaws.com"
                  >
                    <img
                      className="left "
                      src={minotaursHoof}
                      alt={"Minotaur's Hoof"}
                      style={{ width: "85%" }}
                    />
                  </a>
                </th>
                <th>
                  <h2>
                    <ul className="content">
                      <li>
                        The Minotaur's Hoof is a sample application that runs on
                        Ruby on Rails and utilizes DocRaptor gem to retrieve a
                        URL and convert it to a PDF. Then the pdf-reader gem
                        extracts the metadata from the PDF. After that, the
                        metadata is converted to JSON.
                      </li>
                      <li>
                        Uses Bootstrap, HTML, CSS, and Javascript for front end
                        interface.
                      </li>
                    </ul>
                  </h2>
                </th>
              </tr>
            </table>
          </center>
        </div>
      </div>
    );
  }
}

export default Contact;
