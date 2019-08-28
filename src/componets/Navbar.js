import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import logo from '../logo.svg'
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            
        <nav className = "navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
            <Link to='/' >
               
            <i className="fas fa-home"></i>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2"><i className="fas fa-cart-plus"/></span>
                    my cart
                </ButtonContainer>
            </Link>
        </nav>    
        )
    }
}

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border:0.05rem solid var(--lightBlue);
    cursor:pointer;
    padding:0.2rem 0.5rem;
    margin:0.2rem 0.5rem 0.2rem 0;

`;