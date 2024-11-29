import Nav from './../components/navigation'
import Header from './../components/header'
import  Card from './../components/Card'
import SecondCard from './../components/secondheader'
import  WhyUs from './../components/whyUs'
import  Testmonial from './../components/testmonial'
function Home() {
  

  return (
    <div className='container all-container'>
     <Nav/>
     <Header/>
     <Card/>
     <SecondCard/>
     <WhyUs/>
     <Testmonial/>
    </div>
    
    
  )
}

export default Home
