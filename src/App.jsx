// import './App.css'

import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Services/Service';
import Slider from './components/Slider/Slider';
import SliderLogo from './components/SliderLogo/SliderLogo';
import Supplier from './components/Supplier/Supplier';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Supplier />
      <Slider />
      <Service />
      <About />
      <SliderLogo />
      <Blog />
      <Map />
      <Footer />
    </>
  );
}

export default App;
