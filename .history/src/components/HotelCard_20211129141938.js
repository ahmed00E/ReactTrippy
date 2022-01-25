import React from 'react'
import styled from "styled-components"
import {useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const CardContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`
const Slider = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    position : relative;
`
const ArrowLeft = styled.div`
    position : absolute;
    left : 0;
    background : #fff;
    border-top-right-radius : 20px;
    border-bottom-right-radius : 20px;
`
const Image = styled.img`
    // border-bottom-left-radius: 20px;
    // border-bottom-right-radius: 20px;
    height : 500px;
    width : 100%;
    box-shadow: 6px 6px 5px grey;
`
const ArrowRight = styled.div`
    position : absolute;
    right : 0;
    background : #fff;
    border-top-left-radius : 20px;
    border-bottom-left-radius : 20px;
`
const Location = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
`
const HotelInfos = styled.div`
    display : flex;
    // gap : 20%;
    width : 100%;
    justify-content: space-around;
    margin : 40px 0;
    align-items : baseline;
`
const About = styled.div`
    padding-right:20px;
    padding-bottom:20px;
`
const PriceButton = styled.button`
    padding: 7px 20px;
    border-radius: 20px;
    background : blue;
`
const Commodities = styled.div`
    display : flex;
    flex-direction : column;
    height :200px;
    width: 400px;
    overflow-y: scroll;
`
export default function HotelCard(props) {

    const [imageindex, setImageindex] = useState(11)
    const arrowDirectionClick =(arrowDirection) => {
        const index = arrowDirection === "arrowRight"? 1 : -1;
        if(imageindex >0){
            setImageindex(imageindex + index)
        }else {
            setImageindex(1000)
        }
    }
    // console.log("hotelImages",props.hotelImages.pictures);
    if(!props.hotelImages){
        return <h1>error, there is no pictures</h1>
    }
    return (
        
        <CardContainer>
            <Location>
                <h1><strong>Country : {props.hotelImages.country}</strong></h1>
                <h1>City : {props.hotelImages.city}</h1>
            </Location>
            <Slider>
                <ArrowLeft
                <div>
                    <AiOutlineArrowLeft 
                        style={{fontSize : "40px"}}
                        onClick={() => arrowDirectionClick("arrowLeft")}
                    />
                </ArrowLeft>
                <Image src={`https://picsum.photos/id/${imageindex}/0/0`}/>
                <ArrowRight>
                    <AiOutlineArrowRight 
                        style={{fontSize : "40px"}}
                        onClick={() => arrowDirectionClick("arrowRight")}
                    />
                </div>
            </Slider>
            
            <HotelInfos>
                <About>
                    <h1>{props.hotelImages.name}</h1>
                    <Location><strong>Address:</strong> {props.hotelImages.address}</Location>
                    <div><strong>Phone:</strong> {props.hotelImages.phone}</div>
                    <div><strong>Email:</strong> {props.hotelImages.email}</div>
                    <div><strong>created in</strong> {props.hotelImages.created}</div>
                    <h2><strong>Price :</strong> {props.hotelImages.price}€</h2>
                    <PriceButton>
                        <a 
                            href={props.hotelImages.website}
                            className="linkBtn"
                            target= "_blank"
                        >
                            visit us
                        </a>
                    </PriceButton>
                </About>
                <div>
                    <h1>Commodities</h1>
                    <Commodities>
                    {props.hotelImages.commodities.map((commoditie,index) => {
                        return <p key={index}>{commoditie}</p>
                    })}
                    </Commodities>
                </div>
            </HotelInfos>
        </CardContainer>
    )
}
