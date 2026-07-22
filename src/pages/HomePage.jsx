import AppSection from "../components/appSection/AppSection";
import Gallery from "../components/gallery/Gallery";
import InfoTabs from "../components/infoTabs/InfoTabs";
import Search from "../components/search/Search";
import Services from "../components/services/Services";
import Status from "../components/status/Status";
import Types from "../components/types/Types";

const HomePage = () => {
  return (
    <main className="main-content home-page">
      <Status />
      <Types />
      <Search />
      <InfoTabs />
      <Services />
      <Gallery />
      <AppSection />
    </main>
  );
};

export default HomePage;
