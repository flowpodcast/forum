import React, {useState} from 'react';

import Banner from 'assets/imgs/BannerFlow.png';
import {useLocation} from "react-router-dom";
import { ReactComponent as Logo } from 'assets/logo/FlowLogo.svg';
import {Header} from 'components/Navbar/styles';
import {DivBanner} from 'pages/Landing/styles';
import {Overlay} from 'pages/Auth/styles';
import {config} from 'firebaseConfig';
import { Card, Button, CardTitle, CardText, Input, Label } from 'reactstrap';


export default function Login() {
	var userObject = {};
    userObject.loggedIn=false;
	//global.Auth = {};
	//global.Auth.User="nao fez login";
	const [emailInput, setEmailInput] = useState('');
	const [passInput, setPassInput] = useState('');
	function passInputChange (event) {
	//insira aqui BCrypt
	setPassInput(event.target.value);
	}
	
	function emailInputChange (event) {
	setEmailInput(event.target.value);
	}
	
	function logarUsuario() {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='+config.apiKey);
		//'https://auth.firebase.com/v2/flowrumpodcast/users?&email='+<email>&password=<password>&_method=POST
		var postJSON = { email : '', password: '', returnSecureToken: ''};
		postJSON.email = emailInput;
		postJSON.password = passInput;
		postJSON.returnSecureToken = true;
		xhr.send(JSON.stringify(postJSON));
		xhr.onload = function(e) {
		userObject = JSON.parse(xhr.responseText);
		if(userObject.error === undefined) {
			//alert(xhr.responseText);
			localStorage.setItem('userObject',JSON.stringify(userObject)); //isso aqui não é seguro, precisa trocar depois
			window.location.href = "/";
		}
	    else {
			
			if(userObject.error.message === "EMAIL_NOT_FOUND" || userObject.error.message === "INVALID_EMAIL"){
			alert("Email Não Cadastrado!");
			}
			else if(userObject.error.message === "INVALID_PASSWORD"){
			alert("Senha Incorreta!");
			}
		}
	}
	}
	
  return (
    <>
      <Header>
        <div>
          <a href="/"><Logo className="logo" /></a>
        </div>
        <hr />
      </Header>
	  <DivBanner>
        <img src={Banner} alt="Flow Podcast" />
      </DivBanner>
	  <Overlay>
	  <center>
	  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', maxWidth:"40%", marginTop:"7%" }}>
        <CardTitle>
		Login
		<hr style={{height:"2px",borderWidth:"0",color:"gray",backgroundColor:"gray"}}/>
		</CardTitle>
        <CardText>
		<Label>Email</Label>
		 <Input type="text" style={{fontSize:"20px"}} placeholder="monark@gmail.com" value={emailInput} onChange={emailInputChange}></Input>
		 <br/>
		 <Label>Senha</Label>
	     <Input type="password" style={{fontSize:"20px"}} placeholder="******" value={passInput} onChange={passInputChange}></Input>
		 <br/>
		</CardText> 
	  <Button onClick={logarUsuario}>Login</Button>
	  <a style={{color:"white",marginTop:"15px"}} href="/Cadastro">Não tem uma conta?</a>
      </Card>
	  </center>
	  </Overlay>
    </>
  );
}

//export {userObject};
