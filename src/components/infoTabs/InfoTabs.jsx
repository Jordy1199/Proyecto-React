import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { motion } from 'framer-motion';
import './InfoTabs.css';

function InfoTabs() {
  return (
    <motion.section 
      className="section tabs-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      data-aos="fade-up"
    >
      <h2 className="section-title">Conoce más del sistema</h2>
      
      <Tabs className="custom-tabs">
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="custom-tab--selected">Sobre el Proyecto</Tab>
          <Tab className="custom-tab" selectedClassName="custom-tab--selected">Estadísticas</Tab>
          <Tab className="custom-tab" selectedClassName="custom-tab--selected">Nuestro Objetivo</Tab>
        </TabList>

        <TabPanel className="custom-tab-panel" selectedClassName="custom-tab-panel--selected">
          <div className="tab-content animate-fade-in">
            <h3>Gestión Digital de la ESFOT</h3>
            <p>
              EPN Accesible es una iniciativa académica e inclusiva desarrollada en la Escuela de Formación 
              de Tecnólogos de la Escuela Politécnica Nacional. Este sistema nace de la necesidad de proveer 
              una herramienta tecnológica eficiente para la gestión, reserva y monitoreo en tiempo real de 
              espacios preferenciales dentro del campus. Facilitamos que estudiantes, docentes y personal 
              administrativo con movilidad reducida o necesidades específicas puedan planificar su llegada 
              a la institución de forma autónoma y segura, eliminando la incertidumbre sobre la disponibilidad 
              de parqueaderos y accesos prioritarios.
            </p>
          </div>
        </TabPanel>

        <TabPanel className="custom-tab-panel" selectedClassName="custom-tab-panel--selected">
          <div className="tab-content animate-fade-in about-stats">
            <div className="stat-item">
              <span className="stat-value">+50</span>
              <span className="stat-desc">Espacios Mapeados</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-desc">Gestión Digital</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-desc">Disponibilidad</span>
            </div>
          </div>
          <div className="tab-content animate-fade-in">
            <p style={{ marginTop: '10px' }}>
              Nuestro equipo ha realizado un levantamiento minucioso de la infraestructura actual del campus 
              central. El registro digitalizado no solo optimiza el uso diario de los recursos existentes, 
              sino que genera datos históricos clave para proyectar futuras expansiones físicas y mejoras 
              arquitectónicas basadas en la demanda real de nuestra comunidad politécnica.
            </p>
          </div>
        </TabPanel>

        <TabPanel className="custom-tab-panel" selectedClassName="custom-tab-panel--selected">
          <div className="tab-content animate-fade-in">
            <h3>Por un campus más inclusivo</h3>
            <p>
              Buscamos que la tecnología sea el puente directo para eliminar barreras arquitectónicas y sociales. 
              El objetivo principal es centralizar, organizar y transparentar el estado de la infraestructura 
              inclusiva (como parqueaderos adaptados, asientos preferenciales y rampas de acceso). Con esto, 
              no solo optimizamos los tiempos de traslado dentro de la universidad, sino que promovemos activamente 
              una cultura institucional de respeto y concientización sobre el uso correcto de estos espacios estratégicos.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </motion.section>
  );
}

export default InfoTabs;