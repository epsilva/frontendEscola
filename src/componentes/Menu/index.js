import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';

function Menu({ isOpen }) {

  return (
    <Container isOpen={isOpen}>
        
    </Container>
  );
}

export default connect(state => ({
  isOpen: state.menu
}))(Menu);