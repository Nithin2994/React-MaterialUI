import AboutMedeazComponent from './AboutMedeazComponent';
import BannerComponent from './BannerComponent';
import DiscountServicesComponent from './DiscountServicesComponent';
import DownloadAppComponent from './DownloadAppComponent';
import ServiceProviderComponent from './ServiceProviderComponent';
import TopArticlesComponent from './TopArticlesComponent';

function Home() {
  return (
    <div>
      <BannerComponent />
      <ServiceProviderComponent />
      <AboutMedeazComponent />
      <DiscountServicesComponent />
      <TopArticlesComponent />
      <DownloadAppComponent />
    </div>
  );
}

export default Home;
