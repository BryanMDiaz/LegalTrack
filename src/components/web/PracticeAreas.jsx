import { Link } from 'react-router-dom';
import './PracticeAreas.css';

const practiceAreas = [
  {
    id: '01',
    title: "Derecho Civil",
    description: "Resolución de controversias entre particulares, estructuración de contratos y obligaciones.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: '02',
    title: "Derecho Mercantil",
    description: "Litigio estratégico comercial, recuperación de cartera, títulos de crédito y cobranza.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  },
  {
    id: '03',
    title: "Derecho Laboral",
    description: "Gestión de relaciones obrero-patronales, prevención de riesgos y representación ante autoridades.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    id: '04',
    title: "Derecho Familiar",
    description: "Asesoría integral y empática en materia de divorcios, sucesiones y protección del patrimonio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    id: '05',
    title: "Derecho Penal",
    description: "Defensa técnica especializada y asesoría estratégica en delitos patrimoniales y corporativos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    )
  },
  {
    id: '06',
    title: "Asesoría Empresarial",
    description: "Implementación de gobierno corporativo, due diligence, compliance legal y estructuración.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  }
];

const PracticeAreas = () => {
  return (
    <section className="practice-areas-stark">
      <div className="container pa-container">
        
        <div className="pa-header">
          <div className="pa-title-group">
            <span className="pa-kicker">03 &mdash; Áreas de Especialización</span>
            <h2 className="pa-title">Soluciones integrales.</h2>
          </div>
          <Link to="/servicios" className="pa-header-link">
            Ver más servicios &rarr;
          </Link>
        </div>

        <div className="pa-stark-grid">
          {practiceAreas.map((area) => (
            <Link to={`/servicios#${area.id}`} key={area.id} className="pa-stark-card">
              <div className="pa-stark-icon">
                {area.icon}
              </div>
              <h3 className="pa-stark-title">{area.title}</h3>
              <p className="pa-stark-desc">{area.description}</p>
              
              <div className="pa-stark-link">
                Ver más <span className="pa-stark-arrow">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default PracticeAreas;
