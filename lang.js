/* ═══════════════════════════════════════════════════════
   L.A.M. SERVICES — LANGUAGE TOGGLE  ES ⟷ EN
   Include on every page: <script src="lang.js"></script>
═══════════════════════════════════════════════════════ */
(function () {
  const KEY = 'lam_lang';
  let lang = localStorage.getItem(KEY) || 'es';

  const T = {
    /* ── SHARED NAV ── */
    'nav.nosotros':       { es: 'Nosotros',       en: 'About Us' },
    'nav.servicios':      { es: 'Servicios',      en: 'Services' },
    'nav.proyectos':      { es: 'Proyectos',      en: 'Projects' },
    'nav.productos':      { es: 'Productos',      en: 'Products' },
    'nav.contacto':       { es: 'Contacto',       en: 'Contact' },
    'nav.academia':       { es: '🎓 Academia',    en: '🎓 Academy' },
    'nav.asistente':      { es: 'Asistente',      en: 'Assistant' },
    'nav.inversionistas': { es: 'Inversionistas', en: 'Investors' },
    'nav.cta':            { es: 'Consulta Gratis', en: 'Free Consultation' },

    /* ── INDEX · HERO ── */
    'hero.badge':  { es: 'Líderes en Puerto Rico desde 1993', en: 'Leading Puerto Rico Since 1993' },
    'hero.title':  { es: 'Ingeniería<br>de <em>Bombeo</em><br>de Precisión', en: 'Precision<br><em>Pump</em><br>Engineering' },
    'hero.sub':    { es: 'Soluciones hídricas de alta ingeniería para infraestructura residencial, comercial e industrial en toda la isla.', en: 'Advanced water solutions engineered for residential, commercial, and industrial infrastructure across the island.' },
    'hero.btn1':   { es: 'Solicitar Consultoría', en: 'Request a Consultation' },
    'hero.btn2':   { es: 'Ver Catálogo →', en: 'View Catalog →' },

    /* ── INDEX · STATS ── */
    'stat.years':    { es: 'Años de Experiencia', en: 'Years of Experience' },
    'stat.projects': { es: 'Proyectos Completados', en: 'Projects Completed' },
    'stat.support':  { es: 'Soporte Disponible', en: 'Support Available' },

    /* ── INDEX · TICKER ── */
    'ticker.1': { es: 'Instalación de Sistemas', en: 'System Installation' },
    'ticker.2': { es: 'Mantenimiento Preventivo', en: 'Preventive Maintenance' },
    'ticker.3': { es: 'Reparación de Emergencia', en: 'Emergency Repair' },
    'ticker.4': { es: 'Diseño de Infraestructura', en: 'Infrastructure Design' },
    'ticker.5': { es: 'Licenciados & Certificados', en: 'Licensed & Certified' },
    'ticker.6': { es: "Puerto Rico's Pump Experts", en: "Puerto Rico's Pump Experts" },

    /* ── INDEX · ABOUT ── */
    'about.label': { es: 'Quiénes Somos', en: 'Who We Are' },
    'about.title': { es: 'Líderes en <strong>Infraestructura Hídrica</strong>', en: 'Leaders in <strong>Water Infrastructure</strong>' },
    'about.p1':    { es: 'L.A.M. Services LLC es una empresa puertorriqueña especializada en el diseño, instalación y mantenimiento de sistemas de bombeo. Con más de tres décadas de experiencia, somos el socio confiable para proyectos de toda escala en la isla.', en: 'L.A.M. Services LLC is a Puerto Rico\u2013based company specializing in the design, installation, and maintenance of pumping systems. With over three decades of experience, we are the trusted partner for projects of every scale on the island.' },
    'about.p2':    { es: 'Nuestro equipo de ingenieros certificados garantiza los más altos estándares de calidad, combinando tecnología de punta con el conocimiento profundo de la infraestructura local.', en: 'Our team of certified engineers upholds the highest quality standards, combining cutting-edge technology with deep knowledge of the local infrastructure.' },
    'about.cert':  { es: 'Años<br>Experiencia', en: 'Years<br>Experience' },

    /* ── INDEX · PILLARS ── */
    'pillar.mission.title':  { es: 'Misión', en: 'Mission' },
    'pillar.mission.text':   { es: 'Proveer soluciones de bombeo confiables que mejoren la calidad de vida de nuestros clientes.', en: 'To provide reliable pumping solutions that improve our clients\u2019 quality of life.' },
    'pillar.tech.title':     { es: 'Tecnología', en: 'Technology' },
    'pillar.tech.text':      { es: 'Equipos de las mejores marcas mundiales para resultados superiores y duraderos.', en: 'Equipment from the world\u2019s top brands for superior, long-lasting results.' },
    'pillar.commit.title':   { es: 'Compromiso', en: 'Commitment' },
    'pillar.commit.text':    { es: 'Respuesta en 24-48 horas para cualquier emergencia, todos los días del año.', en: '24\u201348 hour response time for any emergency, every day of the year.' },
    'pillar.excel.title':    { es: 'Excelencia', en: 'Excellence' },
    'pillar.excel.text':     { es: 'Cada proyecto ejecutado superando las expectativas del cliente, sin excepción.', en: 'Every project delivered exceeding client expectations, without exception.' },

    /* ── INDEX · SERVICES ── */
    'services.label':    { es: 'Lo Que Hacemos', en: 'What We Do' },
    'services.title':    { es: 'Nuestros <strong>Servicios</strong>', en: 'Our <strong>Services</strong>' },
    'svc.install.title': { es: 'Instalación de Bombas', en: 'Pump Installation' },
    'svc.install.desc':  { es: 'Instalación profesional de sistemas de bombeo residenciales, comerciales e industriales con garantía de calidad y certificación.', en: 'Professional installation of residential, commercial, and industrial pumping systems with quality assurance and certification.' },
    'svc.maint.title':   { es: 'Mantenimiento Preventivo', en: 'Preventive Maintenance' },
    'svc.maint.desc':    { es: 'Programas diseñados para maximizar la vida útil de su equipo y evitar costosas fallas en el momento menos conveniente.', en: 'Programs designed to maximize your equipment\u2019s lifespan and prevent costly breakdowns at the worst possible time.' },
    'svc.repair.title':  { es: 'Reparación de Emergencia', en: 'Emergency Repair' },
    'svc.repair.desc':   { es: 'Disponibles 24/7. Respondemos en 24-48 horas para minimizar su tiempo de inactividad y pérdidas operacionales.', en: 'Available 24/7. We respond within 24\u201348 hours to minimize your downtime and operational losses.' },
    'svc.design.title':  { es: 'Diseño de Sistemas', en: 'System Design' },
    'svc.design.desc':   { es: 'Diseño personalizado para proyectos nuevos. Ingeniería de precisión desde la planificación hasta la entrega y puesta en marcha.', en: 'Custom design for new projects. Precision engineering from planning through delivery and commissioning.' },
    'svc.link':          { es: 'Solicitar →', en: 'Request →' },

    /* ── INDEX · GALLERY ── */
    'gallery.label': { es: 'Portafolio', en: 'Portfolio' },
    'gallery.title': { es: 'Proyectos de <strong>Alta Calidad</strong>', en: 'High-Quality <strong>Projects</strong>' },
    'gal.cap1':      { es: 'Sistema Multietapa · Tratamiento de Agua', en: 'Multi-Stage System · Water Treatment' },
    'gal.cap2':      { es: 'Sistema Comercial · Booster Station', en: 'Commercial System · Booster Station' },
    'gal.cap3':      { es: 'Bombas Verticales · Sistema Presión', en: 'Vertical Pumps · Pressure System' },
    'gal.cap4':      { es: 'Instalación Industrial · Puerto Rico', en: 'Industrial Installation · Puerto Rico' },
    'gal.cap5':      { es: 'Sistema Booster · Alta Eficiencia', en: 'Booster System · High Efficiency' },

    /* ── INDEX · BRANDS ── */
    'brands.label': { es: 'Marcas con las que Trabajamos', en: 'Brands We Work With' },

    /* ── INDEX · PROCESS ── */
    'process.label': { es: 'Metodología', en: 'Methodology' },
    'process.title': { es: 'Nuestro <strong>Proceso</strong>', en: 'Our <strong>Process</strong>' },
    'step.1.title':  { es: 'Consulta Inicial', en: 'Initial Consultation' },
    'step.1.desc':   { es: 'Evaluamos sus necesidades específicas y las condiciones del sitio para entender el alcance del proyecto.', en: 'We assess your specific needs and site conditions to understand the full scope of the project.' },
    'step.2.title':  { es: 'Diseño & Propuesta', en: 'Design & Proposal' },
    'step.2.desc':   { es: 'Nuestros ingenieros desarrollan el diseño técnico óptimo y presentan una propuesta detallada con costos.', en: 'Our engineers develop the optimal technical design and present a detailed proposal with costs.' },
    'step.3.title':  { es: 'Instalación', en: 'Installation' },
    'step.3.desc':   { es: 'Ejecución profesional del proyecto con los más altos estándares de calidad y seguridad certificados.', en: 'Professional project execution meeting the highest certified quality and safety standards.' },
    'step.4.title':  { es: 'Soporte Continuo', en: 'Ongoing Support' },
    'step.4.desc':   { es: 'Mantenimiento preventivo y soporte técnico 24/7 para garantizar el rendimiento óptimo del sistema.', en: 'Preventive maintenance and 24/7 technical support to ensure optimal system performance.' },

    /* ── INDEX · CONTACT ── */
    'contact.label':    { es: 'Hablemos', en: "Let\u2019s Talk" },
    'contact.title':    { es: '¿Listo para <strong>Empezar</strong>?', en: 'Ready to <strong>Get Started</strong>?' },
    'contact.desc':     { es: 'Contáctenos para una consulta gratuita. Nuestros expertos evaluarán sus necesidades y ofrecerán la solución ideal.', en: 'Contact us for a free consultation. Our experts will assess your needs and recommend the ideal solution.' },
    'contact.loc':      { es: 'Ubicación', en: 'Location' },
    'contact.phone':    { es: 'Teléfono', en: 'Phone' },
    'contact.email':    { es: 'Email', en: 'Email' },
    'contact.whatsapp': { es: 'WhatsApp', en: 'WhatsApp' },
    'contact.wa.text':  { es: 'Envíanos un mensaje →', en: 'Send us a message →' },

    /* ── INDEX · FORM ── */
    'form.name':    { es: 'Nombre', en: 'Name' },
    'form.email':   { es: 'Email', en: 'Email' },
    'form.phone':   { es: 'Teléfono', en: 'Phone' },
    'form.service': { es: 'Tipo de Servicio', en: 'Service Type' },
    'form.message': { es: 'Mensaje', en: 'Message' },
    'form.submit':  { es: 'Enviar Mensaje →', en: 'Send Message →' },

    /* ── INDEX · AI ASSISTANT ── */
    'ask.label':       { es: 'Asistente Inteligente', en: 'Smart Assistant' },
    'ask.title':       { es: 'Pregúntale al<br><strong>Experto LAM</strong>', en: 'Ask the<br><strong>LAM Expert</strong>' },
    'ask.intro':       { es: 'Respuestas inmediatas sobre bombas de agua, noticias de la AAA, cotizaciones y más. Disponible 24/7.', en: 'Instant answers about water pumps, AAA news, quotes, and more. Available 24/7.' },
    'ask.feat1.title': { es: 'Consultas Técnicas', en: 'Technical Inquiries' },
    'ask.feat2.title': { es: 'Noticias AAA en Tiempo Real', en: 'Real-Time AAA News' },
    'ask.feat3.title': { es: 'Cotizaciones y Servicios', en: 'Quotes & Services' },
    'ask.status':      { es: 'En línea', en: 'Online' },

    /* ── INDEX · FOOTER ── */
    'footer.copy':       { es: '© 2026 L.A.M. Services LLC · Todos los derechos reservados · Puerto Rico', en: '© 2026 L.A.M. Services LLC · All rights reserved · Puerto Rico' },
    'footer.desc':       { es: 'Expertos en sistemas de bombeo con más de 30 años sirviendo a Puerto Rico con ingeniería de precisión y compromiso total.', en: 'Pump system experts with over 30 years serving Puerto Rico with precision engineering and total commitment.' },
    'footer.nav':        { es: 'Navegación', en: 'Navigation' },
    'footer.services':   { es: 'Servicios', en: 'Services' },
    'footer.newsletter': { es: 'Manténgase Informado', en: 'Stay Informed' },
    'footer.subscribe':  { es: 'Suscribirse →', en: 'Subscribe →' },

    /* ── PRODUCTOS ── */
    'prod.label':    { es: 'Catálogo de Productos', en: 'Product Catalog' },
    'prod.title':    { es: 'Equipos de <strong>Bombeo Profesional</strong>', en: 'Professional <strong>Pumping Equipment</strong>' },
    'prod.subtitle': { es: 'Sistemas de bombeo de las mejores marcas mundiales para cada aplicación.', en: 'Pumping systems from the world\u2019s leading brands for every application.' },
    'brands.label':  { es: 'Marcas con las que Trabajamos', en: 'Brands We Work With' },
    'prod.calc.sub': { es: 'Responda 4 preguntas — Le recomendamos el equipo ideal', en: 'Answer 4 questions \u2014 We\u2019ll recommend the ideal equipment' },
    'prod.cta.text': { es: 'Solicitar Cotización →', en: 'Request a Quote →' },

    /* ── INVERSIONISTAS ── */
    'inv.btn1':       { es: 'Solicitar Información →', en: 'Request Information →' },
    'inv.btn2':       { es: 'Ver Oportunidad', en: 'View Opportunity' },
    'inv.form.title': { es: 'Formulario de Calificación', en: 'Qualification Form' },
    'inv.form.btn':   { es: 'Enviar Solicitud de Información →', en: 'Submit Information Request →' },

    /* ── ACADEMIA / PROFESOR LAM ── */
    'ac.btn1':           { es: 'Explorar Lecciones',       en: 'Explore Lessons' },
    'ac.btn2':           { es: 'Preguntarle al Profesor →', en: 'Ask the Professor →' },
    'ac.lib.label':      { es: 'Biblioteca Completa',       en: 'Full Library' },
    'ac.tab.basico':     { es: '🟢 Básico',                 en: '🟢 Beginner' },
    'ac.tab.intermedio': { es: '🟡 Intermedio',             en: '🟡 Intermediate' },
    'ac.tab.avanzado':   { es: '🔴 Avanzado',               en: '🔴 Advanced' },
    'ac.tab.tips':       { es: '⚡ Tips Rápidos',           en: '⚡ Quick Tips' },
    'ac.fmt.all':        { es: 'Todo',                      en: 'All' },
    'ac.fmt.video':      { es: '📹 Video',                  en: '📹 Video' },
    'ac.fmt.podcast':    { es: '🎙️ Podcast',               en: '🎙️ Podcast' },
    'ac.fmt.articulo':   { es: '📄 Artículo',               en: '📄 Article' },
    'ac.nl.btn':         { es: 'Suscribirse →',             en: 'Subscribe →' },
    'ac.ask.btn':        { es: 'Enviar al Profesor LAM →',  en: 'Send to Professor LAM →' },
  };

  /* ── APPLY ─────────────────────────────────────── */
  function apply(l) {
    lang = l;
    localStorage.setItem(KEY, l);
    document.documentElement.lang = l;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const t = T[el.getAttribute('data-i18n')];
      if (!t) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[l];
      } else {
        el.innerHTML = t[l];
      }
    });

    /* Update toggle visual */
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      const es = btn.querySelector('.lang-es');
      const en = btn.querySelector('.lang-en');
      const sl = btn.querySelector('.lang-slider');
      if (es) es.style.opacity = l === 'es' ? '1' : '0.35';
      if (en) en.style.opacity = l === 'en' ? '1' : '0.35';
      if (sl) sl.style.transform = l === 'en' ? 'translateX(20px)' : 'translateX(0)';
    });
  }

  /* ── PUBLIC ─────────────────────────────────────── */
  window.toggleLang = function () { apply(lang === 'es' ? 'en' : 'es'); };

  /* ── INIT ───────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { apply(lang); });
  } else {
    apply(lang);
  }
})();
