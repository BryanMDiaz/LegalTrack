import Navbar from '../../components/web/Navbar';
import Hero from '../../components/web/Hero';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
