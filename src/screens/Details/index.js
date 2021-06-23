
import React from 'react';
import styled from 'styled-components';
// import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import BannerMain from '../../components/BannerMain';
import { useLocation } from "react-router-dom";
const Main = styled.main`
   background-color: var(--black);
   color: var(--white);
   flex:1;
   padding-top:50px;
   padding-left:5%;
   padding-right:5%;
`;

function BookDetails() {
  let location = useLocation();
  return (
    <>
      {/* <Menu /> */}
      <main style={{
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          flex:1,
          paddingTop:50,
          paddingLeft:'5%',
   paddingRight:'5%',
      }}>
      {/* <BannerMain
        livro={location.state}
      /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default BookDetails;