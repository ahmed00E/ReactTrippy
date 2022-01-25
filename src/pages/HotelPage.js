import { useEffect, useState } from "react"
import { useParams } from "react-router"

import styled from "styled-components"

import HotelPagesMap from "../components/HotelPagesMap"
import HotelCard from "../components/HotelCard"
import HotelRooms from "../components/HotelRooms"

const Container = styled.div`
  
`
const HotelPage = () => {
  const { id } = useParams()
  const [hotelRooms, sethotelRooms] = useState()
  const [hotelElement, setHotelElement] = useState()

  useEffect(() => {
      fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
      .then(response => response.json())
      .then(data => setHotelElement(data.result))
  },[id])
  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}/rooms`)
    .then(response => response.json())
    .then(data => sethotelRooms(data))
  },[id])

  if(!(hotelElement && hotelRooms)){
    return <h1>Chargement</h1>
  }

  // console.log("hotel/page/rooms", hotelRooms)
  return (
    <>
      <Container>
        <HotelCard hotelImages = {hotelElement}/>
        <HotelPagesMap hotelElement = {hotelElement.location}/>
        <HotelRooms hotelRooms = {hotelRooms}/>
      </Container> 
    </>
  )
}
export default HotelPage