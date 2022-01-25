import { useState } from "react"
import styled from "styled-components"
// import ButtonPage from "../components/ButtonPage"


const TitleRow = styled.div`
  width: 600px;
  padding: 5px 5px 0 5px;
  border-bottom: 1px solid gray;
  display: flex;
  margin: 10px auto 0 auto;
`
const Row = styled.div`
  width: 600px;
  padding: 0 5px ;
  display: flex;
  margin: 0 auto;
  border-bottom: 1px solid gray;
`
const Case = styled.div`
  width: 300px;
  padding: 5px;
`
const Filtre = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
`
const Button = styled.button`
  border : 2px solid blue;
  background : blue;
  color : #ffff;
  border-radius : 20px;
  font-weight : bold;
  padding : 4px 10px;
    &:hover {
      color : blue;
      background : #ffff;
    }
`
const HotelRooms = props => {
  const { hotelRooms } = props
  const [sortByPeople, setSortByPeople] = useState(false)
  const [sortByPrice, setSortByPrice] = useState(false)
  const [sortByBathroom, setSortByBathroom] = useState(false)
  let sorted = hotelRooms.results
  
  const handleClickSortByPeople = () => {
    if (!sortByPeople) {
      setSortByPeople(true)
      setSortByPrice(false)
      setSortByBathroom(false)
      sorted = sorted.sort((a, b) => a.people - b.people) 
    }
  }
  const handleClickSortByPrice = () => {
    if (!sortByPrice) {
      setSortByPrice(true)
      setSortByPeople(false)
      setSortByBathroom(false)
      sorted = sorted.sort((a, b) => a.price - b.price) 
    } 
  }
  const handleClickSortByBathroom = () => {
    if (!sortByBathroom) {
      setSortByBathroom(true)
      setSortByPrice(false)
      setSortByPeople(false)   
      sorted = sorted.sort((a, b) => a.isBathroom - b.isBathroom) 
    } 
  }
  // let numPage = []

  // for ( let i = 1; i <= listHotel.totalPages; i++) {
  //   numPage = [...numPage, i]
  // }

  // console.log("sorted", sorted)
  // console.log("results", hotelRooms.results)
  return (
    <>
      <Filtre>
        <Button onClick={handleClickSortByPeople}>Sort by people</Button>
        <Button onClick={handleClickSortByPrice}>Sort by price</Button>
        <Button onClick={handleClickSortByBathroom}>Sort by Bathroom</Button>
      </Filtre>
      <TitleRow>
        <Case>
          Pour
        </Case>
        <Case>
          Price
        </Case>
        <Case>
          Bathroom
        </Case>
      </TitleRow>
      {sorted.map(element => (
        <Row key={element._id}>
          <Case>
            {element.people} {element.people === 1 ? "personne" : "personnes"} 
          </Case>
          <Case>
            {element.price + "€"}
          </Case>
          <Case>
            {element.isBathroom === true ? "Yes" : "Pas de toilettes"}
          </Case>
        </Row>
      ))}
      {/* {numPage.map(element => (
        <ButtonPage numPage={element} onClick={() => handleOnClick(element)}/>
      ))} */}
    </>
  )
}

export default HotelRooms