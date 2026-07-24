import { lazy, Suspense } from "react";

import DeferredRender from "../components/performance/DeferredRender";
import InfoTabs from "../components/infoTabs/InfoTabs";
import Search from "../components/search/Search";
import Status from "../components/status/Status";
import Statistics from "../components/statistics/Statistics";
import Types from "../components/types/Types";

const Services = lazy(() => import("../components/services/Services"));
const Gallery = lazy(() => import("../components/gallery/Gallery"));
const AppSection = lazy(() => import("../components/appSection/AppSection"));

const HomePage = () => {
  return (
    <main className="main-content home-page">
      <Status />
      <Statistics />
      <Types />
      <Search />
      <InfoTabs />
      <DeferredRender className="deferred-full-width">
        <Suspense fallback={null}><Services /></Suspense>
      </DeferredRender>
      <DeferredRender className="deferred-full-width">
        <Suspense fallback={null}><Gallery /></Suspense>
      </DeferredRender>
      <DeferredRender className="deferred-full-width">
        <Suspense fallback={null}><AppSection /></Suspense>
      </DeferredRender>
    </main>
    
  );
};

export default HomePage;
