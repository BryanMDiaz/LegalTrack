import Navbar from '../../components/web/Navbar';
import Hero from '../../components/web/Hero';
import FirmOverview from '../../components/web/FirmOverview';
import PracticeAreas from '../../components/web/PracticeAreas';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <FirmOverview />
        <PracticeAreas />
      </main>
    </div>
  );
};

export default Home;
