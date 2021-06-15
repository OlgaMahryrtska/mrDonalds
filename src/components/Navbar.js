import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import SignImg from '../image/sign.svg';

const NavBarStyled = styled.header`
position: fixed;
top:0;
left: 0;
z-index: 999;
height: 90px;
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
background-color: #299B01;
color:white;

`;
const Logo = styled.div`
display:flex;
align-items: center;
`;

const SignInImg = styled.img`
position:absolute;
padding-right: 16px;
padding-top:5px;
right:0;
top:0;`
;

const H1 = styled.h1`
font-size: 24px;
margin-left: 15px;
`;

const ImgLogo = styled.img``;

const Button = styled.button`
top: 25px;`;

export const NavBar =()=>(
  <NavBarStyled>
  <Logo>
<ImgLogo src = {logoImg} alt="logo"></ImgLogo>
<H1>MrDonald's</H1>
</Logo>
<SignInImg src = {SignImg} alt = "sign"></SignInImg>
<a>Login</a>
    </NavBarStyled>
)