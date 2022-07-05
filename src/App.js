import './App.css';
import GetStarted from './Sections/GetStarted/GetStarted';
import Products from './Sections/Products/Products';
import Search from './Sections/Search/Search';
import Testimonial from './Sections/Testimonial/Testimonial';
import MainSlider from './Sections/Main-Slider/MainSlider';
import Service from './Sections/Quick-Service/Service';
import { useEffect, useState } from 'react';


function App() {

//   const [scrollPosition, setScrollPosition] = useState(0);
// const handleScroll = () => {
//     const position = window.pageYOffset;
//     setScrollPosition(position);
// };

// console.log(scrollPosition)

// useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//     };
// }, []);
  return (
    <div className="App">
      <MainSlider/>
      <Search/>
      {/* <Service/> */}
      <GetStarted/>
      <Products/>
     <Testimonial/>
    </div>
  );
}

export default App;
