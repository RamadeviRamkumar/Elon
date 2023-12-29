import React from 'react'
import Button from "react-bootstrap/Button";
import './Home.css'
const Home = () => {
  return (
    <>
    <div className="video ">
        <section>
        <h1 className='text-center'>Welcome to Our Elon Native System Home Page</h1>
        <Button variant="outline-warning" className="fw-bold text-center" >
                get started
              </Button>
        </section>
    </div>
  <div className='footer'> 
  <footer>
        <p>Contact us at info@example.com</p>
        <p className="p">A technology services consultancy with it’s roots in problem solving and new product development.</p>
   
      </footer>
  </div>
    </>
      
    
  )
}

export default Home
