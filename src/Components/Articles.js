import React from "react";
import articlesIndexMD from "../articles/articles/20190812-Linode-Rails-Setup.md";

const ReactMarkdown = require('react-markdown/with-html')

const styles = {
  backgroundStyle: {
    width: "100%",
    height: 100,
    // backgroundImage: `url(${Background})`
  },

  titleText: {
    fontSize: 40,
    fontFamily: "Verdana,sans-serif"
  }
};

class Articles extends React.Component {
  constructor(props) {
    super(props)

    this.state = { markdown: `` }
  }

  componentWillMount() {
    fetch(articlesIndexMD).then((response) => response.text()).then((text) => {this.setState({ markdown: text })})
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <div id="parent" style={{ padding: "100px" }} >
            <ReactMarkdown 
                source={this.state.markdown}
                escapeHtml={false}
                />
        </div>
    );
  }
}

export default Articles;
