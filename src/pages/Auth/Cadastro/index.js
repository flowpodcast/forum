import React, {useState} from 'react';

import Banner from 'assets/imgs/BannerFlow.png';
import {useLocation} from "react-router-dom";
import { ReactComponent as Logo } from 'assets/logo/FlowLogo.svg';
import {Header} from 'components/Navbar/styles';
import {DivBanner} from 'pages/Landing/styles';
import {Overlay} from 'pages/Auth/styles';
import {config} from 'serverConfig';
import { Card, Button, CardTitle, CardText, Input, Label } from 'reactstrap';

export default function Cadastro() {
	const [nomeInput, setNomeInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
	const [passInput, setPassInput] = useState('');
	
	function passInputChange (event) {
	//insira aqui BCrypt
	setPassInput(event.target.value);
	}
	
	function emailInputChange (event) {
	setEmailInput(event.target.value);
	}
	
	function nomeInputChange (event) {
	setNomeInput(event.target.value);
	}
	
	function cadastrarUsuario() {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='+config.apiKey);
		//'https://auth.firebase.com/v2/flowrumpodcast/users?&email='+<email>&password=<password>&_method=POST
		var postJSON = { email : '', password: '', displayName: '', returnSecureToken: ''};
		postJSON.email = emailInput;
		postJSON.password = passInput;
		postJSON.displayName = nomeInput;
		postJSON.returnSecureToken = true;
		xhr.send(JSON.stringify(postJSON));
		xhr.onload = function(e) {
			
			if(JSON.parse(xhr.responseText).error !== undefined)
			{
				var error = JSON.parse(xhr.responseText).error;
				if(error.message === "INVALID_EMAIL") {
				alert("Email Invalido");
				}
				else if(error.message === "EMAIL_EXISTS"){
				alert("Email Já Cadastrado!");
				}
				else if(error.message === "INVALID_PASSWORD"){
				alert("Senha Incorreta!");
				}
				else {
				alert("erro desconhecido");
				}
			}
			else
			{
				alert("Usuário Cadastrado Com Sucesso");
				window.location.href = "/Login";
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
	  Cadastro
	  <hr style={{height:"2px",borderWidth:"0",color:"gray",backgroundColor:"gray"}}/>
	  </CardTitle>
      <CardText>
	  <Label>Nome do Usuário</Label>
	  <Input type="text" style={{fontSize:"20px"}} placeholder="Monark" value={nomeInput} onChange={nomeInputChange}></Input>
	  <br/>
	  <Label>Email</Label>
	  <Input type="text" style={{fontSize:"20px"}} placeholder="monark@gmail.com" value={emailInput} onChange={emailInputChange}></Input>
	  <br/>
	  <Label>Senha</Label>
	  <Input type="password" style={{fontSize:"20px"}} placeholder="******" value={passInput} onChange={passInputChange}></Input>
	  <br/>
	  </CardText> 
	  <Button onClick={cadastrarUsuario}>Cadastrar</Button>
      </Card>
	  </center>
	  </Overlay>
	  
    </>
  );
}