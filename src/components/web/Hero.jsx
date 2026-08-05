import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const marketingPhrases = [
  <>Estrategia Jurídica <br /> de Excelencia</>,
  <>Protegemos el Futuro <br /> de su Empresa</>,
  <>Soluciones Legales <br /> a la Medida</>,
  <>Asesoría Corporativa <br /> Especializada</>,
  <>Su Aliado Legal <br /> Estratégico</>,
  <>Innovación y <br /> Precisión Jurídica</>
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % marketingPhrases.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero-classic">
      <div className="hero-classic-bg">
        <img src="/hero-bg.png" alt="Arquitectura Legal" />
        <div className="hero-classic-overlay"></div>
      </div>

      <div className="container hero-container-classic">
        <div className="hero-content-classic animate-fade-in-up">
          <p className="kicker-classic">— BUFETE CORPORATIVO —</p>
          
          <h1 className={`title-classic title-animated ${fade ? 'fade-in' : 'fade-out'}`}>
            {marketingPhrases[index]}
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
