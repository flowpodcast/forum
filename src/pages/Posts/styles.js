import styled from 'styled-components';

export const DivBanner = styled.div`
display: relative;
width: 100%;
height: 215px;
text-align: left;
display: flex;
justify-content: center;
align-items: center;

img{ 
display: absolute;
top: 60px;
width: 1920px;
object-fit: cover;
height: 215px;
}

figure{
width: 50px;
height: 50px;
background-color: #5b5b5b;
border-radius: 5px;
}

.div-group{
position: absolute;
display: flex;
justify-content: space-around;
align-items: center;
width: 375px;
height: 75px;
border-radius: 5px;
background-color: #2B2B2B;
margin: 0;
top: 107px;
left: 37px;
opacity: .7;
transition: 0.5s;
}

.div-group:hover{
opacity: 1;
}

h5{
position: relative;
color: #000;
font-family: 'Blinker', sans-serif;

font-weight: 600;
font-size: 36px;
left: -5px;
}

button{
display: flex;
position: relative;
cursor: pointer;
border-radius: 5px;
align-items: center;
justify-content: center;
border: transparent;
width: 125px;
height: 45px;
outline: none;
font-family: 'Blinker', sans-serif;
font-weight: normal;
font-size: 22px;
color: #1C1C1C;     
transition: 0.5s;   
background-color: #696969;
}
button:hover{
color: #C09235;
background-color: #4B4B4B;
}

@media(min-width: 1920px){
img{
width: 100%;
}
}
`;

export const Chat = styled.main`
display: flex;
flex-direction: row;

width: 100%;
min-height: 100%;

.group-container{

width: 80%;
min-height: 100vh;
padding: 13px 13px;
}

.search-groups{
background-color: #696969;
width: calc(100% -13px);
height: 70px;
border-radius: 10px;
}

.groups{
background-color: rgb(245, 246, 247);
width: 100%;
min-height: 100%;
margin-top: 13px;
border-radius: 10px;
}

.group-infos{
width: 24.9%;
min-height: 100%;

padding-top: 13px;
padding-right: 13px;


}

.infos{
position:relative;
width: 100%;
height: 50%;
border-radius: 10px;
background-color: #696969

}

.advertisement{
margin-top: 13px;
position:relative;
width: 100%;
height: 50%;
border-radius: 10px;
background-color: #696969
}
.post{
border-radius:10px;
background-color:rgb(245, 246, 247);
margin: auto;
height:328px;
}
`;
