import React from 'react'
import { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router"
import Stars from "../components/Stars"
import HotelImage from "../HotelImage.json"
import styled from "styled-components"

const SectionListHotel = styled.div`
  display:flex;
`
const ListHotel = styled.div`
//   overflow-y: scroll;
  display: flex;
  flex-wrap: wrap; 
//   height: 90vh;
  justify-content : center;
  scrollbar-width: thin;
`
const HotelMiniature = styled.div`
  width: 300px;
  margin: 0 10px;
  display : flex;
  flex-direction : column;
  margin-bottom : 20px;
  border-radius : 20px;
  position : relative;
`
const ImageHotelMiniature = styled.img`
  height: 350px;
  width : 100%;
  // background-color: white;
  // background-position: center;
  // background-size: 100%;
  // background-size: cover;
  // background-repeat: no-repeat;
  border-radius : 20px;
`
const ImageDesrcription = styled.div`
  background : rgba(0,0,0,0.6);
  color : #fff;
  width : 100%;
  height : 40%;
  border-bottom-left-radius : 20px;
  border-bottom-right-radius : 20px;
  position : absolute;
  padding : 0px 4% 5px 4%;
  bottom : 0;
`
const ImageTitle = styled.div`
  display : flex;
  align-items : baseline;
  justify-content : space-between;
`
const PriceStars = styled.div`
  display: flex;
  justify-content: space-between;
  font-size : 20px;
`

export default function Favoris() {
    const [favorisList, setFavorisList] = useState(null)
    const favorisId = JSON.parse(localStorage.getItem("indexs"))
    console.log("favoris id :",favorisId);
    
    useEffect(() => {
    //     fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${favorisId.forEach(id => id)}`)
    //     .then(response => response.json())
    //     .then(data => setFavorisList(data.results))
    // }
        const promiseArray = favorisId.map(id => {
            return (
                fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
            )
        }) 
        Promise.all(promiseArray)
            .then(results => Promise.all(results.map(result => result.json())))
            .then(data => {
                const result = data.map(element => element.result)
                setFavorisList(result)
            })
    },[])
    const element = () => {

    }

    console.log("favorislist",favorisList);
    
      if(!favorisList){
          return <h1>There is no favoris</h1>
      }
    return (
        <div>
           <ListHotel>
            {favorisList.map((element, index) => (
                <HotelMiniature key={element._id}>  
                    <Link to= {`/hotel/${element._id}`}>
                        <ImageHotelMiniature
                        src={HotelImage.entrance[index]}
                        />
                    </Link>
                    <ImageDesrcription>
                        <ImageTitle>
                        <h4>{element.name}</h4>
                        <i 
