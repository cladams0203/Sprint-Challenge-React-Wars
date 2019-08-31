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
const Text = styled.div `
margin-bottom: 10px;
color: darkblue;
`
const CardHeading = styled.h2 `
text-shadow: 1px 3px 3px black;
`

export function Card(props) {
console.log(props)
    return (
        <CardDiv>
            <CardHeading>{props.name}</CardHeading>
            <Text>{`Date of Birth: ${props.birth}`}</Text>
            <Text>{`Gender: ${props.gender}`}</Text>
            <Text>{`Height: ${props.height}`} </Text>
            <Text>{`Mass: ${props.mass}`} </Text>
        </CardDiv>
    )
}