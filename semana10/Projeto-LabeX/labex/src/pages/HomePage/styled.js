import styled from "styled-components"

export const Container = styled.div`
    background-color: black;
    height: 623px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerDiv = styled.div`
    display: grid;
    margin-left: 200px;
    align-content: center;
    position: absolute;
    grid-template-areas: "text text"
                         "but1  but2"
`
export const ContainerImg = styled.img`
    height: 620px;
    position: absolute;
`
export const ContainerH1 = styled.h1`
    color: white;
    font-size: 40px;
    grid-area: text;
    margin-top: 300px;
`
export const ContainerButton = styled.button`
    
    margin: 20px;
	box-shadow: 0px 10px 14px -7px #66d7e8;
	background-color:#1499c9;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #24a0c9;

    .myButton:hover {
        background-color:#c2e7ed;
    }
   

`