import './FirmOverview.css';

const FirmOverview = () => {
  return (
    <section className="firm-overview-natural">
      <div className="container natural-container">
        
        {/* Top Grid: Title & Lead */}
        <div className="natural-header">
          <div className="natural-kicker-wrap">
            <span className="natural-kicker">02 &mdash; QUIÉNES SOMOS</span>
          </div>
          <div className="natural-lead-wrap">
            <h2 className="natural-title">
              Experiencia jurídica implacable. <br />
              Transparencia corporativa absoluta.
            </h2>
            <p className="natural-lead">
              Desafiamos el status quo de la abogacía corporativa. No nos escondemos detrás de tecnicismos; utilizamos herramientas digitales de vanguardia para darle a su empresa visibilidad total, comunicación directa y resultados medibles.
            </p>
          </div>
        </div>

        {/* Middle: Stark Typographic Stats */}
        <div className="natural-stats">
          <div className="n-stat">
            <div className="n-stat-num">500+</div>
            <div className="n-stat-label">Casos Corporativos</div>
          </div>
          <div className="n-stat">
            <div className="n-stat-num">95%</div>
            <div className="n-stat-label">Tasa de Satisfacción</div>
          </div>
          <div className="n-stat">
            <div className="n-stat-num">10+</div>
            <div className="n-stat-label">Años de Liderazgo</div>
          </div>
        </div>

        {/* Bottom: Ruled List for Pillars */}
        <div className="natural-pillars">
          
          <div className="n-pillar-row">
            <div className="n-pillar-title">Misión</div>
            <div className="n-pillar-desc">
              Brindar certidumbre absoluta. Protegemos el patrimonio y los intereses de su empresa a través de una representación ética, tenaz y siempre de excelencia.
            </div>
          </div>

          <div className="n-pillar-row">
            <div className="n-pillar-title">Visión</div>
            <div className="n-pillar-desc">
              Redefinir la práctica corporativa. Aspiramos a ser el referente nacional que demuestre que la abogacía de élite y la eficiencia tecnológica pueden coexistir.
            </div>
          </div>

          <div className="n-pillar-row">
            <div className="n-pillar-title">Valores</div>
            <div className="n-pillar-desc">
              Integridad intransigente, transparencia proactiva e innovación constante. Su éxito y tranquilidad son nuestra única métrica de valor.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FirmOverview;
