import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Container, Title, Wrapper } from "./styled-components";


const HomePage = () => {
  const [link, setLink] = React.useState(false)
  const {key, search} = useLocation()
  
  React.useEffect(() => {
    const changeUrl = () => {
    if(key === "default" && search !== ''){
      setLink(true)
      }else{
        setLink(false)
      }
      
    }

    changeUrl()
  }, [key, search])
  console.log(key, search)
  console.log("search includes collection",search.includes("collection"))
  return (
    <Container>
      <Wrapper>
        <p>Compra tu pc en</p>
      <Title>Game Store</Title>
      {link && <Navigate to='/'/>}
      </Wrapper>
    </Container>
  );
};


export default HomePage;