import React from 'react';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import Body from '../Body/Body'

class Home extends React.Component {
 render(){
     return(
         <div>
             <Header/>
             <Body/>
             <Footer/>
         </div>
     )
 }   
}

export default Home;
