import Nav from './../components/navigation'
import Header from './../components/header'
import  Card from './../components/Card'
import SecondCard from './../components/secondheader'
import  WhyUs from './../components/whyUs'
import  Testmonial from './../components/testmonial'
import Contact from './../components/contact'
import Footer from './../components/Footer'


function Home() {
 
 
  return (
  
    <div className='container all-container'>
     
            <Nav/>
    
   
     <Header/>
     <Card/>
     <SecondCard/>
     <WhyUs/>
     <Testmonial/>
     <Contact/>
     <Footer/>
    </div>
    
    
  )
}

export default Home
