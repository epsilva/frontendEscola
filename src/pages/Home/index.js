import React, { Component } from "react";
import { connect } from "react-redux";

import { Container } from "./styles";

class Home extends Component {
  render() {
    const { isOpen } = this.props;

    return <Container isOpen={isOpen} />;
  }
}

export default connect(state => ({
  isOpen: state.menu
}))(Home);
