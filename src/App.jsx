import { useState } from 'react'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ExampleCarouselImage from './components/ExampleCarouselImage';
import './App.css'
import { Button } from 'react-bootstrap';


function App() {
 
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  return (
    <>
   <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5519ab2ee4b02a4410b6a7c6/1573572780880-TNGN7R4EX4N141SBXP50/beautiful-hands-heart-5390.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5519ab2ee4b02a4410b6a7c6/1573572780880-TNGN7R4EX4N141SBXP50/beautiful-hands-heart-5390.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5519ab2ee4b02a4410b6a7c6/1573572780880-TNGN7R4EX4N141SBXP50/beautiful-hands-heart-5390.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <div>
      {/* <button className='btn'>hello </button> */}
      <Button variant="primary">Primary</Button>
    </div>


    </>
  )
}


export default App
