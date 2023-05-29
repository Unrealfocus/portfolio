
import Banner from '../components/Banner.jsx';
import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import Work from '../components/Work.jsx';
import Contact from '../components/Contact.jsx';

const App = () => {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <div className='relative'>
      <div className="gradient-03 z-0" />
      <Header />
      </div>
      <Banner />
      <Nav />
      <div className='relative'>
      <About/>
      <div className="gradient-04 z-0" />
      <Services />
      </div>
      <div className='relative'>
      <Work />
      <div className="gradient-04 z-0" />
      </div>
      <Contact />
    </div>
  );
};

export default App;
