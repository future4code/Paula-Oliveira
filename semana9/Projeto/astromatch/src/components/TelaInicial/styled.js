import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
`;

export const ContainerImg = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 8px;
   
`;

export const ContainerBio = styled.div`
    word-wrap: break-word;
    border:1px solid white;
    width:280px;
    padding: 8px;
    background-color:white;
    opacity : 0.8;
    border-radius: 10px;
`
export const ContainerP = styled.div`
  color: black;
  font-family: normal;
  font-size: 16px;
`

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
`

export const ContainerButtonNovos = styled.div`
box-shadow: 0px 10px 14px -7px #FF2400;
background:linear-gradient(to bottom, #D11E00 5%, #FF2400 100%);
background-color:#D11E00;
border-radius:4px;
border:1px solid #88070B;
display:inline-block;
cursor:pointer;
color:#FF9A8A;
font-family:Arial;
font-size:13px;
font-weight:bold;
padding:6px 12px;
text-decoration:none;
text-shadow:0px 1px 0px #A31700;

myButton:hover{
  background:linear-gradient(to bottom, #FF2400 5%, #D11E00 100%);
	background-color:#FF2400;
}

myButton:active{
  position:relative;
	top:1px;
}
`
export const ContainerH2 = styled.h2`
  color: white;
  font-size: 25px;
  margin: 6px;
  font-family: serif;
`

