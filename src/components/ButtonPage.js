import styled from "styled-components"
const Button = styled.button`
  border : 2px solid black;
  border-radius :20px;
  margin : 10px 4px 0 0;
  font-size : 20px;
  background :#fff; 
  padding : 4px;
  cursor : pointer;
  &:hover {
    background : black;
    color : #ffff;
  }
`
const ButtonPage = props => {
  return(
    <>
      <Button onClick={props.onClick}>{props.numPage}</Button>
    </>
  )
}

export default ButtonPage