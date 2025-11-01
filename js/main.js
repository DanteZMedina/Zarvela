
const navbar = document.getElementById("navbar");
const fisio = document.getElementById("fisioterapeuta");
const mainContent = document.getElementById("main-content");
const contactLocation = document.getElementById("contactLocation")
const footer = document.getElementById("footer");





navbar.innerHTML = `
  <div class="container d-flex align-items-center justify-content-between">
    <a class="navbar-brand fw-bold text-primary" href="#"> 
    <img src="./img/logo.jpeg" alt="logo" class="logo-nav">
    </a>

    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav ms-auto fw-semibold">
        <li class="nav-item"><a class="nav-link" href="#main-content">Servicios</a></li>
        <li class="nav-item"><a class="nav-link" href="#fisioterapeuta">Conoceme</a></li>
        <li class="nav-item"><a class="nav-link" href="#footer">Ubicación</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Preguntas Frecuentes</a></li>
      </ul>
    </div>
  </div>
`

mainContent.innerHTML = `
    <div class="container py-5">
    
    <h1 class="fw-bold display-5 text-white mb-2">
      Fisioterapia  Presencial, Online y Domicilio
    </h1>
    <p class="text-white fs-5 mb-5">
      Atención especializada y personalizada para tu recuperación y bienestar
    </p>

    <!-- ✅ GRID de tarjetas dentro del hero -->
    <div class="row g-4 justify-content-center">
      
      <!-- col-sm-6 = 2 por fila en móvil -->
      <!-- col-lg-3 = 4 por fila en desktop -->
      <div class="col-sm-6 col-lg-3">
        <div class="card shadow service-card h-100">
          <img src="./img/deportiva.png" class="card-img-top" />
          <div class="card-body">
            <h5 class="fw-bold">Fisioterapia Geriátrica</h5>
            <p>Tratamientos especializados para adultos mayores.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-3">
        <div class="card shadow service-card h-100">
          <img src="./img/deportiva.png" class="card-img-top" />
          <div class="card-body">
            <h5 class="fw-bold">Fisioterapia Oncológica</h5>
            <p>Apoyo terapéutico durante y después del tratamiento oncológico.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-3">
        <div class="card shadow service-card h-100">
          <img src="./img/deportiva.png" class="card-img-top" />
          <div class="card-body">
            <h5 class="fw-bold">Fisioterapia Deportiva</h5>
            <p>Rehabilitación para atletas de todos los niveles.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-3">
        <div class="card shadow service-card h-100">
          <img src="./img/deportiva.png" class="card-img-top" />
          <div class="card-body">
            <h5 class="fw-bold">Fisioterapia Traumatológica</h5>
            <p>Recuperación post-operatoria y lesiones óseas.</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Botón -->
    <div class="mt-4">
      <button class="btn btn-light px-4 py-2 fw-semibold">
        Agenda tu Cita
      </button>
    </div>

  </div>
`

fisio.innerHTML = `
<div class="container">

    <!-- Título -->
    <h2 class="text-center mb-5 fs-4 text-purple fw-semibold opacity-75">
      Conoce a tu Fisioterapeuta
    </h2>

    <div class="row align-items-center g-5">

      <!-- Foto -->
      <div class="col-md-5 text-center">
        <img src="img/fisioterapeuta.jpg" class="img-fluid rounded-4 shadow-lg therapist-photo" alt="Fisioterapeuta">
      </div>

      <!-- Texto + Cards -->
      <div class="col-md-7">
        <h3 class="fw-bold mb-2">Lic. Marisol Cruz</h3>
        <p class="text-muted mb-4">
          Fisioterapeuta certificada con más de 10 años de experiencia en rehabilitación y tratamientos especializados. 
          Comprometida con brindar atención personalizada y de calidad para cada paciente.
        </p>

        <!-- Listado de tarjetas -->
        <div class="d-flex flex-column gap-3">

          <!-- Card Formación-->
          <div class="therapist-card p-3 rounded-4 shadow-sm">
            <div class="d-flex align-items-start gap-3">
              <div class="icon-box">
                
                <i class="fa-solid fa-user-graduate">  </i>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Formación Profesional</h6>
                <p class="mb-0 small">
                  Licenciada en Fisioterapia por la UNAM. Especialidad en Fisioterapia Deportiva y Geriátrica.
                </p>
              </div>
            </div>
          </div>

         <!-- Card certificación -->
          <div class="therapist-card p-3 rounded-4 shadow-sm">
            <div class="d-flex align-items-start gap-3">
              <div class="icon-box">
              
                <i class="fa-solid fa-award"></i>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Certificaciones</h6>
                <p class="mb-0 small">
                  Certificación Internacional en Terapia Manual. Curso avanzado en Oncología y Rehabilitación.
                </p>
              </div>
            </div>
          </div>

        <!-- Card experiencia -->
          <div class="therapist-card p-3 rounded-4 shadow-sm">
            <div class="d-flex align-items-start gap-3">
              <div class="icon-box">
              
                <i class="fa-solid fa-people-group"></i>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Experiencia</h6>
                <p class="mb-0 small">
                  Más de 500 pacientes atendidos exitosamente. Especialista en tratamientos personalizados.
                </p>
              </div>
            </div>
          </div>

        </div><!-- end cards -->
      </div>
    </div>
  </div>


`

contactLocation.innerHTML = `
  <div class="container">
    <div class="row g-5">

      <div class="col-md-6">
        <h5 class="footer-title mb-4">Ubicación</h5>

        <div class="d-flex align-items-start mb-2">
          
          <i class="fa-solid fa-location-dot text-primary me-2 mt-1"></i>
          <div>
            Av. Insurgentes Sur 540-A-interior 501, código 2, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX
          </div>
        </div>


        <div class="d-flex align-items-start mb-4">
        
          <i class="fa-solid fa-clock text-primary me-2 mt-1"> </i>
          <div>
            Pregunta por disponibilidad<br>
            Lunes a Viernes: 17:00 - 20:00<br>
            Sábados: 14:00 - 17:00
          </div>
        </div>
        
        <div class="map-wrapper rounded-4 overflow-hidden shadow">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.2547175879395!2d-99.16976969999999!3d19.4013974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6c9aa3ffff%3A0x5eccf19640399db!2sAv.%20Insurgentes%20Sur%20540-A-interior%20501%2C%20c%C3%B3digo%202%2C%20Roma%20Sur%2C%20Cuauht%C3%A9moc%2C%2006760%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1761955282988!5m2!1ses-419!2smx"
            width="100%"
            height="200"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <div class="col-md-6">
        <h5 class="footer-title mb-4">Contáctanos</h5>

        <form id="whatsappForm">
          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input class="form-control form-control-dark" id="name" placeholder="Tu nombre completo">
          </div>

          <div class="mb-3">
            <label class="form-label">Teléfono</label>
            <input class="form-control form-control-dark" id="phone" placeholder="Tu número de teléfono">
          </div>

          <div class="mb-3">
            <label class="form-label">Mensaje</label>
            <textarea class="form-control form-control-dark" id="message" placeholder="¿En qué podemos ayudarte?" rows="3"></textarea>
          </div>

          <button type="submit" class="btn w-100 whatsapp-btn mb-3">
            <i class="fa-brands fa-whatsapp me-2"></i> Enviar por WhatsApp
          </button>
        </form>

        <p class="mt-4 mb-2 fw-semibold social-title">Síguenos en redes sociales:</p>
        <div class="d-flex social-container">
        <a href="#" class="social-btn me-2"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="social-btn"><i class="fa-brands fa-facebook-f"></i></a>
        </div>
      </div>

    </div>
  </div>
`;

footer.innerHTML = `
  <div class="container text-center">

    <!-- Logo / Marca -->
    <h6 class="text-footer-brand fw-bold mb-3">Zarvela Fisioterapia</h6>

    <!-- Copyright -->
    <p class="small text-footer-copy mb-0">
      © 2025 Zarvela Fisioterapia. Todos los derechos reservados.
    </p>

  </div>
`

/* ======= boton de whatsapp ======== */ 
document.getElementById("whatsappForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let text = `Hola, soy ${name}. Mi teléfono es ${phone}. ${message}`;
  
  window.open(`https://wa.me/5524049904?text=${encodeURIComponent(text)}`, "_blank");
});


