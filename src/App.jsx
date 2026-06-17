import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/header/Header';
import Status from './components/status/Status';
import Types from './components/types/Types';
import Search from './components/search/Search';
import Reservation from './components/reservation/Reservation';
import InfoTabs from './components/infoTabs/InfoTabs';
import Services from './components/services/Services';
import AppSection from "./components/appSection/AppSection.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Footer from './components/footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Header />
      <main className="main-content">
        <Status />
        <Types />
        <Search />
        <Reservation />
        <InfoTabs />
        <Services/>
        <AppSection/>
        <Gallery/>
      </main>
        <Footer />
    </>
  );
}

export default App;