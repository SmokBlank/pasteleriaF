import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>Sobre Nosotros</h1>
          <p>Conoce la historia detrás de Dolce Tentazione y nuestra pasión por la pastelería</p>
        </div>
        <div className="hero-image">
          <img 
            src="/images/home.jpeg"
            alt="Nuestra Pastelería - Dolce Tentazione"
            onError={(e) => {
              e.target.src = '/images/hero-pasteles.jpg';
            }}
          />
        </div>
      </div>

      {/* Historia Section */}
      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>Nuestra Historia</h2>
            <p>
              Dolce Tentazione nació en 2010 con una simple misión: crear los pasteles 
              más deliciosos que jamás hayas probado. Lo que comenzó como un pequeño 
              negocio familiar ha crecido hasta convertirse en una pastelería de 
              referencia en la ciudad.
            </p>
            <p>
              Cada día, nuestros chefs combinan técnicas tradicionales con innovación 
              para ofrecerte experiencias únicas en cada bocado. Creemos que un buen 
              pastel puede hacer cualquier día especial.
            </p>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-number">14+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Clientes Satisfechos</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Tipos de Pasteles</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="/images/historia-pasteleria.jpg" 
              alt="Historia de nuestra pastelería"
              onError={(e) => {
                e.target.src = '/images/pastel-chocolate.jpg';
              }}
            />
          </div>
        </div>

        {/* Valores Section */}
        <div className="values-section">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <img 
                  src="/images/logo.jpg"
                  alt="Icono Calidad"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span style={{display: 'none'}}>⭐</span>
              </div>
              <h3>Calidad Premium</h3>
              <p>Usamos solo ingredientes frescos y de la más alta calidad en cada uno de nuestros productos.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <img 
                  src="/images/crea.jpeg"
                  alt="Icono Pasión"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span style={{display: 'none'}}>❤️</span>
              </div>
              <h3>Pasión Creativa</h3>
              <p>Amamos lo que hacemos y eso se refleja en cada detalle de nuestros pasteles.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <img 
                  src="/images/ino.jpg"
                  alt="Icono Innovación"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span style={{display: 'none'}}>💡</span>
              </div>
              <h3>Innovación Constante</h3>
              <p>Constantemente creamos nuevas recetas y sabores para sorprenderte.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <img 
                  src="/images/images.jpeg"
                  alt="Icono Tradición"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span style={{display: 'none'}}>🏛️</span>
              </div>
              <h3>Tradición y Herencia</h3>
              <p>Respetamos las recetas tradicionales mientras incorporamos técnicas modernas.</p>
            </div>
          </div>
        </div>

        {/* Instalaciones Section */}
        <div className="facilities-section">
          <h2>Nuestras Instalaciones</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <img 
                src="/images/gaa.jpeg"
                alt="Nuestra Cocina"
                className="facility-image"
              />
              <div className="facility-info">
                <h3>Cocina Profesional</h3>
                <p>Equipada con tecnología de última generación para garantizar la máxima calidad.</p>
              </div>
            </div>
            
            <div className="facility-card">
              <img 
                src="/images/dos.jpg"
                alt="Nuestra Tienda"
                className="facility-image"
              />
              <div className="facility-info">
                <h3>Tienda Acogedora</h3>
                <p>Un espacio diseñado para que vivas una experiencia única al visitarnos.</p>
              </div>
            </div>
            
            <div className="facility-card">
              <img 
                src="/images/uno.jpg"
                alt="Área de Descanso"
                className="facility-image"
              />
              <div className="facility-info">
                <h3>Área de Degustación</h3>
                <p>Disfruta de nuestros pasteles en un ambiente cómodo y relajante.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;