import { RiStarSFill, RiStarSLine } from 'react-icons/ri'

const Stars = (props) => {
  const { numStars } = props
  const arrayStars = []

  if (numStars == null) {
    for ( let i = 1; i <= 5; i++) {
      arrayStars.push(0)
    }
  } else {
    for ( let i = 1; i <= numStars; i++) {
      arrayStars.push(i)
    }
    if (numStars !== 5) {
      for ( let i = numStars; i < 5; i++){
        arrayStars.push(0)
      }
    }
  }

  // console.log(arrayStars)
  return(
    <>
    {arrayStars.map(element => element !== 0 ? <RiStarSFill /> : <RiStarSLine /> )}
    </>
  )
}

export default Stars