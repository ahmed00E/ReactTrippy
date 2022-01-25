import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import Home from "./pages/Home"
import Hotels from "./pages/Hotels"
import HotelPage from "./pages/HotelPage"
 
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import GlobalStyle from "./globalStyles"
import Login from "./components/Login"

const Body = styled.div`
  background-color: #D4F5F5;
  color: #554348
  color: #554348;
`
const Container = styled.div`
  width: 100%;
  margin: auto;
`
const Header = styled.div`
  background-color: #ABE7E7;
  display: flex;
  padding: 0px 20px; 
  justify-content: space-between;
  align-items: center;
`
const H1 = styled.h1`
  margin: 0;
  padding: 10px;
`

const App = () => {
  return (
    <Body>
      <GlobalStyle/>
      <div>
        <Container>
          <BrowserRouter>
            <Header>
              <H1>
                Trippy-Advisor
              </H1>
              <Nav />
            </Header>
            
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/hotels/paris/" element={<Hotels />} />
              <Route path="/hotels/:city" element={<Hotels />} />
              <Route exact path="/hotelpage/" element={<HotelPage />} />
              <Route exact path="/login/" element={<Login/>} />
             <Route path="/hotel/:id" element={<HotelPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Container>
        <Footer/>
      </div>
    </Body>
  )
}

export default App