import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
           <Nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
               {/* https://www.iconfinder.com/iconsets/user-interface-181
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Assyifa_Art */}
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            PokeProducts
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                   
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus " />
                    </span>
                    my cart
                </ButtonContainer>
                </Link>
           </Nav>
        )
    }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  /* @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important; */
`;




