import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    border-radius: 1rem;
    width: 45%;
    margin-bottom: 25px;
    box-shadow: 3px 3px 3px black;

`;

export function Card(props) {
console.log(props)
    return (
        <CardDiv>
            <h3>{props.name}</h3>
            <div>{`Date of Birth: ${props.birth}`}</div>
            <div>{`Gender: ${props.gender}`}</div>
            <div>{`Height: ${props.height}`} </div>
            <div>{`Mass: ${props.mass}`} </div>
        </CardDiv>
    )
}