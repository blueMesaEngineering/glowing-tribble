import React from "react";
import Background from "../assets/Images/Backgrounds/183321-Banner.jpg";

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="parent">
        <div style={{ paddingTop: "70px" }}>
          <center>
            Email{" "}
            <a href="mailto:nathan@bluemesaengineering.com">
              nathan
            </a>
          </center>
        </div>
      </div>
    );
  }
}

export default Contact;
