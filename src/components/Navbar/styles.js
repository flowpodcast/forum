import styled, { css } from 'styled-components';

export const Header = styled.header`

width: 100%;
  height: 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 0 1rem;

  div{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  margin-right: 2px;
  }

  .logo {
  margin-right: 20px;
  }

  input{
  width: 100%;
  height: 2.2rem;
  border-radius: 1px;
  border-color: transparent;
  outline: none;
  padding-left: 15px;
  background: #2B2B2B;
  color: #fff;
  text-align: left;
  font-family: 'Blinker', sans-serif;
  font-size: 1.2rem;
  font-weight: normal;

  }   

  input::placeholder{
  color: #141414;
  font-family: 'Blinker', sans-serif;
  font-size: 1.2rem;
  font-weight: normal;

  }   

  .search-ico{
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  color: #fff;
  margin-left: 1%;
  transition: 0.5s;
  }

  .search-ico:hover{
  color: #C09235;

  }

  .container-menu{
  width: auto;
  height: 100%;
  z-index: 100;
  }

  figure{
  width: 45px;
  height: 45px;
  background-color: #141414;
  overflow: hidden;
  border-radius: 5px;

  }

  details{
    color: #fff;
    cursor: pointer;
    outline: transparent;
    position: relative;
    right: 15px; 
    z-index: 100;
  }
  
  details summary{
    outline: transparent;
  }

  .pencil-ico{
  cursor: pointer;
  color: #fff;
  width: 20px;
  height: 20px;
  margin-right: 3%;
  transition: .5s;
  margin-right: 18px;
  margin-left: 18px;
  }
  .pencil-ico:hover{
  color: #C09235;

  }

  hr{
  width: 1px;
  height: 40%;
  margin-left: 30px;
  border: 1px solid #2b2b2b ;
  }
  .level-ico{
  color: #C09235;
  position: relative;
  right: 3px;
  bottom: 1px;
  transition: .5s;
  }

  .level-ico:hover {
    color: #C09235;
  }
  .menu-ico {
    cursor: pointer;
    color: #fff;
    width: 25px;
    height: 25px;
    margin-left: 10px;
    transition: .5s;
  }

  .menu-ico:hover {
    color: #C09235;
  }

  .personal-infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: auto;
    height: 40px;
    z-index: 100;
    padding: 0 2rem 0 1rem;
  }

  .personal-infos span {
    font-family: 'Blinker', sans-serif;
    font-size: 16px;
    font-weight: normal;
  }

  .info-level {
    margin-top: 5px;
    width: 100%;
  }
`;

export const MenuPersonal = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 60px;
  right: 68px;
  background-color: #141414;
  opacity: 0;
  transition: 0.5s;
  color:white;
  z-index: 100;

  ${({ open }) => open && css`
    opacity: 1;
    width: 350px;
    height: 491px;
	
  `}
`;

export const HamburguerMenu = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 60px;
  right: 0;
  background-color: #141414;
  transition: all 0.5s ease-in;
  opacity: 0;
  z-index: 100;
  box-shadow: 0 10px 5px #141414;

  ${({ open }) => open && css`
    opacity: 1;
    width: 300px;
    height: 100%;
  `}
`;

export const PostModal = styled.div`
  position: fixed;
  overflow: auto; /* Enable scroll if needed */
  padding-top: 100px; /* Location of the box */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  opacity: 0;
  transition: 0.5s;
  z-index: 1;

  ${({ open }) => open && css`
    opacity: 1;
	z-index: 100;
    //width: 350px;
    //height: 491px;
	
  `}
`;

export const PostModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: 80%;
  opacity: 0;
  transition: 0.5s;
  z-index: 1;

  ${({ open }) => open && css`
    opacity: 1;
	z-index: 100;
    //width: 350px;
    //height: 491px;
	
  `}
`;

