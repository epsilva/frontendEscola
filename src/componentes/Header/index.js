import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdFace, MdReorder } from 'react-icons/md'

import { connect } from 'react-redux';


import { Container, ToogleButton } from './styles';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: true
        }
    }

    handleOpenCloseMenu = isOpen =>  {
      const { dispatch } = this.props;

      dispatch({
          type: '@menu/OPEN_CLOSE_MENU',
          isOpen
      })

      this.setState({
          isOpen
      })
    }

    render() {
        return (
            <Container>
                <div>
                    <ToogleButton onClick={() => this.handleOpenCloseMenu(!this.state.isOpen)}>
                        <MdReorder size={36} color="#FFF" />
                    </ToogleButton>
                    <Link to="/">
    
                    </Link>
                </div>
    
                <ToogleButton>
                    <MdFace size={36} color="#FFF" />
                </ToogleButton>
            </Container>
        );
    }
}

export default connect()(Header);
