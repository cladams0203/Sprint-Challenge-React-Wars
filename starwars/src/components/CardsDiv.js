import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const CardContainer = styled.div `
margin: 0 auto;
width: 80%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`


const CardsDiv = (props) => {
    
console.log(props.data)
    

    return (
        <CardContainer>
            {props.data.map((item, index) => {
                            return(
                            <Card 
                                name={item.name} 
                                key={index} 
                                birth={item.birth_year} 
                                gender={item.gender}
                                height={item.height}
                                mass={item.mass}
                                />
                            )
                        })}
        </CardContainer>
            
        
    )
}
export default CardsDiv;