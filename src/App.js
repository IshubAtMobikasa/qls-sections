import './App.css';
import GetStarted from './Sections/GetStarted/GetStarted';
import Products from './Sections/Products/Products';
import Search from './Sections/Search/Search';
import Testimonial from './Sections/Testimonial/Testimonial';
import MainSlider from './Sections/Main-Slider/MainSlider';
import Service from './Sections/Quick-Service/Service';

function App() {
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
