import { useEffect, useState, useRef } from "react"

import styled from "styled-components"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import ButtonPage from "../components/ButtonPage"
import HotelMap from "../components/HotelMap"
import Stars from "../components/Stars"
import HotelImage from "../HotelImage.json"

// import { GetHotel } from "../utils/fetchAPI"

const SectionListHotel = styled.div`
  display:flex;
`
const DivLeft = styled.div`
  width: 46%;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items : center;
`
const ListHotel = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  justify-content : center;
  scrollbar-width: thin;
`
const DivRight = styled.div`
  width: 50%;
  margin: 10px auto;
  padding: 10px;
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
  bottom : 0
`
const ImageTitle = styled.div`
  display : flex;
  align-items : baseline;
  justify-content : space-between
`
const Buttons = styled.div`
  display: block;
`
const PriceStars = styled.div`
  display: flex;
  justify-content: space-between;
  font-size : 20px;
`

const Hotels = (props) => {
  const { city } = useParams();
  // console.log("city",city)
  const [listHotel, setlistHotel] = useState(null)
  const [page, setPage] = useState(1)
  const [selectedHotel, setselectedHotel] = useState(null)
  const titleRef = useRef()
  let numPage = [];
  let indexArray = [] 

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city ? city : "paris"}?page=${page}`)
    .then(response => response.json())
    .then(data => setlistHotel(data))
  }, [page])

  if (!listHotel) {
    return <p>Pas de Hotel</p>
  }

  for ( let i = 1; i <= listHotel.totalPages; i++) {
    numPage.push(i)
  }

  const handleOnClick = (element) => {
    setPage(element)
  }
  const handleHotelClick = ClickHotel_id => {
    setselectedHotel(ClickHotel_id)
  }
  // useEffect(() => {
  //   if (selectedHotel) {
  //     titleRef.current.scrollIntoView({ behavior: "smooth" })
  //   }
  // }, [selectedHotel])

  // console.log(listHotel)
  const onclickPicture = (index) => {
    // console.log("index",index);
    if(localStorage.getItem("indexs")){
      indexArray = JSON.parse(localStorage.getItem("indexs"))
      indexArray.push(index)
    } else {
      indexArray.push(index)
    }
    localStorage.setItem("indexs",JSON.stringify(indexArray)) 
  }
  // console.log("hotel",city);
  return (
    <>
      <SectionListHotel>
        <DivLeft>
          <ListHotel>
            {listHotel.results.map((element, index) => (
              <div ref={titleRef}>
                <HotelMiniature key={element._id}>  
                  <Link to= {`/hotel/${element._id}`}>
                    <ImageHotelMiniature
                      src={HotelImage.entrance[index]}
                    />
                  </Link>
                  <ImageDesrcription>
                    <ImageTitle>
                      <h4>{element.name}</h4>
                      <i class="far fa-heart"
                      style={{fontSize : "25px"}}
                      onClick = {() => onclickPicture (element._id)}
                      >
                      </i>
                    </ImageTitle>
                    <PriceStars>
                      <p>{element.price + "€"}</p>
                      <p>{<Stars numStars={element.stars} />}</p>
                    </PriceStars>
                  </ImageDesrcription>
                </HotelMiniature>
              </div>
            ))}
          </ListHotel>
          <Buttons>
            {numPage.map(element => (
              <ButtonPage key={element} numPage={element} onClick={() => handleOnClick(element)}/>
            ))}
          </Buttons>
        </DivLeft>
        <DivRight>
          <HotelMap listHotel={listHotel} handleHotelClick={handleHotelClick}/>
        </DivRight>

      </SectionListHotel>
    </>
  )
}

export default Hotels