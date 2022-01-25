import React from 'react'
import { useEffect, useState } from 'react'
import styled from "styled-components"
import Images from "../Images/Paris_img.jpg"
import { Link } from "react-router-dom"
const CityContainer = styled.div`
    display : flex;
    justify-content : center;
    flex-wrap : wrap;
    width: 100%;
`
const ImageContainer = styled.div`
    width : 300px;
    border-radius : 20px;
    // background-color : red;
    margin : 20px 40px 20px 20px ;
    // height : 500px;
        &:first-child {
            width : 100%;
            height : 450px;
            margin : 0;
            margin-bottom : 20px;
            display : flex;
            flex-direction: column;
            align-items : center;
            position : relative;
        }
        
`
const Image = styled.img`
    width : 100%;
    height: 300px;
    // border-radius : 20px ;
    object-fit: fill;
    box-shadow: 6px 6px 5px grey;
    cursor : pointer;
        &:first-child {
            left:0;
            width : 100%;
            height : 450px;
            // border-radius : none;
            object-fit: cover;
            margin-bottom : 20px;
            // position:absolute;
        }
`
const CityName = styled.h2`
    font-size : 35px;
    margin : 5px 0 10px 0;
    color : dark;
    text-shadow: 2px 2px  black;
        &.paris_element{
            position : absolute;
            top : 150px;
            left: 20%;
            font-size : 70px;
            text-shadow: 3px 3px black;
            color : #ffff;
        }
`
const AllParagraph = styled.div`
        &._paris{
            position : absolute;
            gap : 10px;
            color: #fff;
            bottom : 0px;
            background : rgba(0,0,0,0.6);
            width : 100%;
            // height : 80px;
            display : flex;
            flex-direction: column;
            align-items: center;
            justify-content : center;
            padding : 20px;
            font-size : 18px;
        }
`
const Paragraph = styled.p`
    margin :0;
    font-weight : bold;
`

export default function CityCard() {
    const [city, setCity] = useState()

    useEffect(() => {
        fetch("https://trippy-konexio.herokuapp.com/api/home")
        .then(response => response.json())
        .then(data => setCity(data.cities))
    },[])
    // console.log("city: ",city);
    if(!city) {
        return null
    }
    return (
            <CityContainer>
                {city.map((cities) => {
                    return <ImageContainer 
                                key={cities.name}
                            >
                                <Link to={`/hotels/${cities.slug}`}
                                    className="link"
                                    style = {{width : "100%"}}>
                                    <Image src={`${cities.name === "Paris" ? Images : `https://trippy-konexio.herokuapp.com/${cities.source}`}`}
                                        alt={cities.name} 
                                        className={`city`}
                                    />
                                </Link>
                                
                                <CityName className={`cities_element ${cities.name === "Paris"? "paris_element" : ""}`}>
                                    {cities.name}
                                </CityName>
                                <AllParagraph className={`cities_element ${cities.name === "Paris"? "_paris" : ""}`}>
                                    <Paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Vivamus rutrum in purus eget consequat. 
                                        Nullam aliquet suscipit congue. Cras lacinia lacus eu 
                                        arcu suscipit aliquet.
                                    </Paragraph>
                                    {cities.name === "Paris" &&
                                    <Paragraph>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vivamus rutrum in purus eget consequat. 
                                            Nullam aliquet suscipit congue. Cras lacinia lacus eu 
                                            arcu suscipit aliquet.
                                    </Paragraph>
                                    }
                                </AllParagraph>
                            </ImageContainer>
                })}
            </CityContainer>

    )
}import React from 'react'
import { useEffect, useState } from 'react'
import styled from "styled-components"
import Images from "../Images/Paris_img.jpg"
import { Link } from "react-router-dom"
const CityContainer = styled.div`
    display : flex;
    justify-content : center;
    flex-wrap : wrap;
    width: 100%;
`
const ImageContainer = styled.div`
    width : 300px;
    border-radius : 20px;
    // background-color : red;
    margin : 20px 40px 20px 20px ;
    // height : 500px;
        &:first-child {
            width : 100%;
            height : 450px;
            margin : 0;
            margin-bottom : 20px;
            display : flex;
            flex-direction: column;
            align-items : center;
            position : relative;
        }
        
`
const Image = styled.img`
    width : 100%;
    height: 300px;
    // border-radius : 20px ;
    object-fit: fill;
    box-shadow: 6px 6px 5px grey;
    cursor : pointer;
        &:first-child {
            left:0;
            width : 100%;
            height : 450px;
            // border-radius : none;
            object-fit: cover;
            margin-bottom : 20px;
            // position:absolute;
        }
`
const CityName = styled.h2`
    font-size : 35px;
    margin : 5px 0 10px 0;
    color : dark;
    text-shadow: 2px 2px  black;
        &.paris_element{
            position : absolute;
            top : 150px;
            left: 20%;
            font-size : 70px;
            text-shadow: 3px 3px black;
            color : #ffff;
        }
`
const AllParagraph = styled.div`
        &._paris{
            position : absolute;
            gap : 10px;
            color: #fff;
            bottom : 0px;
            background : rgba(0,0,0,0.6);
            width : 100%;
            // height : 80px;
            display : flex;
            flex-direction: column;
            align-items: center;
            justify-content : center;
            padding : 20px;
            font-size : 18px;
        }
`
const Paragraph = styled.p`
    margin :0;
    font-weight : bold;
`

export default function CityCard() {
    const [city, setCity] = useState()

    useEffect(() => {
        fetch("https://trippy-konexio.herokuapp.com/api/home")
        .then(response => response.json())
        .then(data => setCity(data.cities))
    },[])
    // console.log("city: ",city);
    if(!city) {
        return null
    }
    return (
            <CityContainer>
                {city.map((cities) => {
                    return <ImageContainer 
                                key={cities.name}
                            >
                                <Link to={`/hotels/${cities.slug}`}
                                    className="link"
                                    style = {{width : "100%"}}>
                                    <Image src={`${cities.name === "Paris" ? Images : `https://trippy-konexio.herokuapp.com/${cities.source}`}`}
                                        alt={cities.name} 
                                        className={`city`}
                                    />
                                </Link>
                                
                                <CityName className={`cities_element ${cities.name === "Paris"? "paris_element" : ""}`}>
                                    {cities.name}
                                </CityName>
                                <AllParagraph className={`cities_element ${cities.name === "Paris"? "_paris" : ""}`}>
                                    <Paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Vivamus rutrum in purus eget consequat. 
                                        Nullam aliquet suscipit congue. Cras lacinia lacus eu 
                                        arcu suscipit aliquet.
                                    </Paragraph>
                                    {cities.name === "Paris" &&
                                    <Paragraph>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vivamus rutrum in purus eget consequat. 
                                            Nullam aliquet suscipit congue. Cras lacinia lacus eu 
                                            arcu suscipit aliquet.
                                    </Paragraph>
                                    }
                                </AllParagraph>
                            </ImageContainer>
                })}
            </CityContainer>

    )
}