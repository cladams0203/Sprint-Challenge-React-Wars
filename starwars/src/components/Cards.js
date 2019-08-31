import React from 'react';
import styled from 'styled-components';

const cardDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 40%
`


export function Cards(props) {
    
    const test = props.data;
    
    console.log(test)
    return (
        <cardDiv>
            <h4> </h4>
        </cardDiv>
    )
}