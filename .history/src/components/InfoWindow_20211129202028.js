import styled from "styled-components"

const HotelInfo = styled.div`
  background-color: white;
  position: absolute;
  padding: 5px;
`

const InfoWindow = props => {
  const { hotelName } = props

  // console.log(props)
  return(
    <>
      <HotelInfo>
        {hotelName}
      </HotelInfo>
    </>
  )
}

export default InfoWindow