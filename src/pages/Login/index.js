import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../services/api";
import logo from '../../assets/images/logo.svg'
import logoEscola from '../../assets/images/logo_escola.svg'
import Lottie from 'react-lottie-web';
import animationData from '../../assets/lotties/programming.json';

import {
  Container,
  ContainerForm,
  Input,
  SubmitButton,
  ContainerLeft,
  ContainerRight,
  LogoImg,
  LogoName,
  SloganName,
  LogoEscolaImg
} from "./styles";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/sessions', { email: this.state.username, password: this.state.password });

    const user = response.data;

    if (user) {
      this.props.history.push({
        pathname: '/home',
        search: '?query=abc',
        state: { user }
      })
    }
  }

  render() {
    const { username, password } = this.state;

    return (
      <Container>
        <ContainerLeft>
          <div>
            <LogoImg src={logo} alt="Rocketshoes" />
            <LogoName>Esdras Pinheiro</LogoName>
            <SloganName>System analyst</SloganName>

            <Lottie
              options={{
                animationData: animationData
              }}
            />
          </div>
        </ContainerLeft>
        <ContainerRight>
          <ContainerForm onSubmit={e => this.handleSubmit(e)}>
            <LogoEscolaImg src={logoEscola} alt="Rocketshoes" />
            <Input
              type="text"
              placeholder="Digite seu e-mail"
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Digite seu senha"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <SubmitButton type="submit">Entrar</SubmitButton>
          </ContainerForm>
        </ContainerRight>
      </Container>
    );
  }
}

export default connect()(Login);
