import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-classic">
      <div className="hero-classic-bg">
        <img src="/hero-bg.png" alt="Arquitectura Legal" />
        <div className="hero-classic-overlay"></div>
      </div>

      <div className="container hero-container-classic">
        <div className="hero-content-classic animate-fade-in-up">
          <p className="kicker-classic">— BUFETE CORPORATIVO —</p>
          
          <h1 className="title-classic">
            Estrategia Jurídica <br />
            de Excelencia
          </h1>
          
          <p className="desc-classic delay-100">
            Representación impecable y resultados excepcionales para los 
            asuntos legales más complejos de su empresa.
          </p>
          
          <div className="actions-classic delay-200">
            <Link to="/client-portal" className="btn-classic-primary">
              Consultar mi Caso
            </Link>
            <a href="#contacto" className="btn-classic-secondary">
              Agendar Asesoría
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-classic delay-300">
        <span>DESCUBRIR</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
