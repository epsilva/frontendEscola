import React, { Component } from 'react';
import { connect } from "react-redux";
import api from '../../services/api';

import { Container } from './styles';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const response = await api.post('/sessions', { email: this.state.username, password: this.state.password });

        const user = response.data;

        if(user) {
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
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type="text" placeholder="Digite seu usuário do github"
                        value={username}
                        onChange={
                            e => this.setState({ username: e.target.value })
                        }
                    />
                    <input
                        type="text" placeholder="Digite seu usuário do github"
                        value={password}
                        onChange={
                            e => this.setState({ password: e.target.value })
                        }
                    />
                    <button type="submit">Enviar</button>
                </form>
            </Container>
        );
    }

}

export default connect()(Login);
