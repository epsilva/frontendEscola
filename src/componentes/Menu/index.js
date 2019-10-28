import React from "react";
import { connect } from "react-redux";
import { Container, ProductList } from "./styles";
import { MdHome } from "react-icons/md";

function Menu({ isOpen }) {
  const listMenu = [
    {
      id: 1,
      icon: <MdHome size={30} color="#eee" />,
      title: "Home"
    }
  ];

  return (
    <Container isOpen={isOpen}>
      <ProductList>
        {listMenu.map(menu => (
          <li key={menu.id}>
            {menu.icon}
            <strong>{menu.title}</strong>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}

export default connect(state => ({
  isOpen: state.menu
}))(Menu);
