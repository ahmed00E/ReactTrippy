es (87 sloc)  2.28 KB
   
import { useRef, useEffect } from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HotelImage from "../HotelImage.json"
import Stars from "../components/Stars"

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
  bottom : 0
`
const ImageTitle = styled.div`
  display : flex;
  align-items : baseline;
  justify-content : space-between
`
const PriceStars = styled.div`
  display: flex;
  justify-content: space-between;
  font-size : 20px;
`
const Logo = styled.i`
cursor : pointer;
fontSize : 25px; 
  &:hover {
    color : red;
  }
`

const HotelRef = ({element, index, onclickLogo, selectedHotel, favorisId}) => {
  const titleRef = useRef()

  useEffect(() => {
    if (element._id === selectedHotel) {
      titleRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [selectedHotel, element])

  // console.log("hotelrefselected", selectedHotel)
  return (

    <div ref={titleRef}>
      <HotelMiniature key={element._id} >  
        <Link to= {`/hotel/${element._id}`}>
          <ImageHotelMiniature
            src={HotelImage.entrance[index]}
          />
        </Link>
        <ImageDesrcription>
          <ImageTitle>
            <h4>{element.name}</h4>
            <Logo className="fas fa-heart"
              style={{ color : favorisId.includes(element._id) ? "red" : " "}}
              onClick = {() => onclickLogo (element._id)}
            >
            </Logo>
          </ImageTitle>
          <PriceStars>
            <p>{element.price + "€"}</p>
            <p>{<Stars numStars={element.stars} />}</p>
          </PriceStars>
        </ImageDesrcription>
      </HotelMiniature>
    </div>
    )
}

export default HotelRef