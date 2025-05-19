// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Variables para el menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Mostrar menú móvil al hacer clic en el botón de hamburguesa
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.add('active');
        });
    }
    
    // Ocultar menú móvil al hacer clic en el botón de cerrar
    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    }
    
    // Cerrar menú móvil al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Funcionalidad para las pestañas del menú
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuItems = document.querySelectorAll('.menu-items');
    
    // Asegurarse de que hay botones de pestaña y secciones de menú
    if (tabBtns.length > 0 && menuItems.length > 0) {
        // Ocultar todas las secciones de menú excepto la primera
        menuItems.forEach((item, index) => {
            if (index !== 0) {
                item.classList.add('hidden');
            }
        });
        
        // Añadir evento click a cada botón de pestaña
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Quitar clase active de todos los botones
                tabBtns.forEach(tb => tb.classList.remove('active'));
                
                // Añadir clase active al botón clicado
                this.classList.add('active');
                
                // Mostrar sección correspondiente del menú
                const target = this.getAttribute('data-target');
                
                // Ocultar todas las secciones
                menuItems.forEach(item => {
                    item.classList.add('hidden');
                });
                
                // Mostrar la sección seleccionada
                const targetElement = document.querySelector(`.${target}`);
                if (targetElement) {
                    targetElement.classList.remove('hidden');
                }
            });
        });
    }
    
    // Animación de revelado al hacer scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    // Comprobar elementos al cargar la página
    setTimeout(revealOnScroll, 100);
    
    // Comprobar elementos al hacer scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Cambiar estilo del header al hacer scroll
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(18, 18, 18, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.background = 'rgba(18, 18, 18, 0.9)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // Prevenir comportamiento predeterminado en formularios
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría el código para procesar el formulario
            console.log('Formulario enviado');
        });
    });
});