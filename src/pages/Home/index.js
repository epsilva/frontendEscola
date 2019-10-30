import React, { Component } from "react";
import { connect } from "react-redux";
import api from '../../services/api';

import { Container, ListSubject, ItemSubject, TitleSubject } from "./styles";

class Home extends Component {

  constructor() {
    super();
    this.state = {
      subjects: [],
      user: {}
    }
  }

  componentWillMount() {
    // const user = this.props.location.state.user;
    // this.setState({
    //   user
    // });
  }


  async componentDidMount() {
    const response = await api.get('subjects', {
      headers: {'Authorization': "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTcyMjA1NTI1LCJleHAiOjE1NzI4MTAzMjV9.NfImZGadgItZOqu-p-DXaboP-EfwN7e-XkLmBMR1W4U"}
    });

    this.setState({ subjects: response.data });
  }

  render() {
    const { isOpen } = this.props;
    const { subjects } = this.state;

    return (
      <Container isOpen={isOpen} >
        <ListSubject>
          {subjects.map(subject => (
            <ItemSubject key={subject.id}>
              <TitleSubject>{subject.name}</TitleSubject>
            </ItemSubject>
          ))
          }
        </ListSubject>
      </Container>
    );
  }
}

export default connect(state => ({
  isOpen: state.menu
}))(Home);
