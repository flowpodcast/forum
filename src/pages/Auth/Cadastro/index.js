import React, {useState} from 'react';
 
import Banner from 'assets/imgs/BannerFlow.png';
import {useLocation} from "react-router-dom";
import { ReactComponent as Logo } from 'assets/logo/FlowLogo.svg';
import {Header} from 'components/Navbar/styles';
import {DivBanner} from 'pages/Landing/styles';
import {config} from 'firebaseConfig';

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
		alert(xhr.responseText);//criar mensagens de erro
		}
		
	}
  return (
    <>
      <Header>
        <div>
          <Logo className="logo" />
        </div>
        <hr />
      </Header>
	  <DivBanner>
        <img src={Banner} alt="Flow Podcast" />
      </DivBanner>
	  <center>
	  <input type="text" style={{fontSize:"20px"}} placeholder="Monark" value={nomeInput} onChange={nomeInputChange}></input>
	  <br/>
	  <input type="text" style={{fontSize:"20px"}} placeholder="monark@gmail.com" value={emailInput} onChange={emailInputChange}></input>
	  <br/>
	  <input type="password" style={{fontSize:"20px"}} placeholder="******" value={passInput} onChange={passInputChange}></input>
	  <br/>
	  <button onClick={cadastrarUsuario}>Cadastrar</button>
	  </center>
	  
    </>
  );
}