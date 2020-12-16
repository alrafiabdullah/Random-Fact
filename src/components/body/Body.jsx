import React, { Component } from "react";
import { motion } from "framer-motion";
import Facts from "../../assets/facts.json";
import Footer from "../footer/Footer";

import "./body.scss";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: "",
    };
  }

  randomFacts = () => {
    this.setState({ clicked: Facts[Math.round(Math.random() * 50)] });
  };

  render() {
    return (
      <div className="body">
        <h1 style={{ letterSpacing: "3px" }}>
          Random Facts of{" "}
          <span style={{ padding: "2px", backgroundColor: "#ffffff" }}>
            <span style={{ color: "#006747" }}>Ban</span>
            <span style={{ color: "#DA291C" }}>glad</span>
            <span style={{ color: "#006747" }}>esh</span>
          </span>
        </h1>
        <button className="random-button" onClick={this.randomFacts}>
          Random Fact
        </button>
        {this.state.clicked && (
          <motion.div
            className="fact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.173 }}
          >
            {this.state.clicked}
          </motion.div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Body;
