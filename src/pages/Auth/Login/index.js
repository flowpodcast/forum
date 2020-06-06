import React, {useState} from 'react';

import Banner from 'assets/imgs/BannerFlow.png';
import {useLocation} from "react-router-dom";
import { ReactComponent as Logo } from 'assets/logo/FlowLogo.svg';
import {Header} from 'components/Navbar/styles';
import {DivBanner} from 'pages/Landing/styles';
import {config} from 'firebaseConfig';



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
		localStorage.setItem('userObject',JSON.stringify(userObject));
		alert(xhr.responseText);//criar mensagens de erro
		window.location.reload(false);
		}
		
	}
	
	function User(){
	var userObject = JSON.parse(localStorage.getItem( 'userObject' )) || "";
	if(userObject.displayName!=null)
	{
		window.location.href = "/";
	}
	return (
	<h2 style={{color:"white"}} id="User">{userObject.displayName}</h2>
	);
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
	  <center>
	  <input type="text" style={{fontSize:"20px"}} placeholder="monark@gmail.com" value={emailInput} onChange={emailInputChange}></input>
	  <br/>
	  <input type="password" style={{fontSize:"20px"}} placeholder="******" value={passInput} onChange={passInputChange}></input>
	  <br/>
	  <button onClick={logarUsuario}>Login</button>
	  <User/>
	  </center>
    </>
  );
}

//export {userObject};
