/* Define CSS Variables (Custom Properties) */
:root {
    --primary-color: #00a3a3;
    --secondary-color: #e0f2f1;
    --background-color: #f9f9f9;
    --text-color: #333;
    --light-gray: #ddd;
    --dialogue-assistant: #e0f7fa;
    --dialogue-user: #f0f0f0;

    /* Dark Mode Colors */
    --dark-primary-color: #007979; /* Verde azulado oscuro */
    --dark-secondary-color: #005050;
    --dark-background-color: #121212;
    --dark-text-color: #eee; /* Este es el color blanco/gris claro que quieres */
    --dark-light-gray: #444; /* Este es el gris más claro que mencionas */
    --dark-dialogue-assistant: #263238;
    --dark-dialogue-user: #37474f;
}

body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
    font-size: 1.1rem; /* Increased base font size */
}

header {
    background-color: var(--primary-color);
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap; /* NEW: Permite que los elementos se envuelvan a la siguiente línea si no hay espacio */
    align-items: center;
    justify-content: space-between;
    gap: 1rem; /* NEW: Espacio entre los elementos de la cabecera */
}

header h1 {
    font-size: 1.75em; /* Use em for relative sizing */
    margin: 0;
    font-weight: 700;
    display: flex;
    align-items: center;
    /* NEW: Asegura que el título ocupe todo el ancho en pantallas pequeñas si es necesario */
    flex-grow: 1;
    justify-content: center; /* Centra el título en pantallas pequeñas */
}

/* El book-icon debería ser un <i> si es de Font Awesome */
header h1 .book-icon {
    margin-right: 0.5rem;
    font-size: 1.5em; /* Use em for relative sizing */
}

.theme-toggle {
    display: flex;
    align-items: center;
    /* NEW: Asegura que el toggle ocupe el espacio necesario */
    flex-shrink: 0;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
}

input:checked + .slider {
    background-color: var(--dark-primary-color);
}

input:focus + .slider {
    box-shadow: 0 0 1px var(--dark-primary-color);
}

input:checked + .slider:before {
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

/* NEW: Estilos para el main-container en móvil (default) */
.main-container {
    display: flex;
    flex-direction: column; /* Apila la barra lateral y el contenido */
    min-height: calc(100vh - 6rem); /* Subtract header height */
}

aside.activity-list {
    width: 100%; /* Ocupa todo el ancho en móvil */
    background-color: var(--secondary-color);
    padding: 1rem;
    border-right: none; /* Sin borde a la derecha en móvil */
    border-bottom: 1px solid var(--light-gray); /* Añade un borde inferior para separarse del contenido */
    transition: background-color 0.3s ease, border-color 0.3s ease;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

aside.activity-list h2 {
    font-size: 1.25em; /* Use em for relative sizing */
    margin-bottom: 1rem;
    color: var(--text-color);
    text-align: center; /* Centra el título de actividades en móvil */
}

aside.activity-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex; /* NEW: Hace que los elementos de la lista se pongan en fila */
    flex-wrap: wrap; /* NEW: Permite que los números se envuelvan a la siguiente línea */
    justify-content: center; /* NEW: Centra los números horizontalmente */
    gap: 0.75rem; /* NEW: Espacio entre los números */
}

aside.activity-list li {
    margin-bottom: 0; /* Remove margin-bottom to avoid extra space between wrapped items */
}

aside.activity-list a {
    color: var(--text-color);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em; /* Larger font size */
    width: auto; /* Adjust width to content */
    padding: 0.5rem 1.2rem; /* Vertical and horizontal padding */
    background-color: rgba(0, 0, 0, 0.1); /* Change background color */
    border-radius: 30px; /* Rounded corners */
    font-weight: bold;
    font-family: 'Arial', sans-serif;
    transition: background-color 0.2s ease;
}

aside.activity-list a:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

aside.activity-list a i {
    margin-right: 0.5rem; /* Add spacing between the icon and number */
}

.sidebar-info {
    margin-top: 1rem; /* Push to the bottom or add space after numbers */
    font-size: 0.8em; /* Use em for relative sizing */
    color: #666;
    padding: 0 0.5rem; /* Añade un poco de padding horizontal para el texto informativo */
}

.sidebar-info p {
    margin-bottom: 0.5rem;
    text-align: center; /* Centra el texto informativo en móvil */
}

main.content {
    flex: 1;
    padding: 1rem;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-y: auto;
}

.progress-bar {
    background-color: var(--light-gray);
    height: 0.7rem; /* Thicker progress bar */
    margin-bottom: 1.5rem;
    border-radius: 5px; /* Rounded edges */
    overflow: hidden; /* Hide overflow to apply border-radius */
}

.progress {
    background-color: var(--primary-color);
    height: 100%;
    width: 0%; /* Initial width */
    transition: width 0.3s ease;
    border-radius: 5px; /* Rounded edges */
}

.activity-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
    padding: 1rem;
    transition: opacity 0.333s ease; /* Faster transition */
    opacity: 0; /* Initially set opacity to 0 */
    position: absolute; /* Use absolute positioning */
    width: calc(100% - 2rem); /* Set width to container width minus padding */
}

.activity-card.active {
    display: block;
    opacity: 1; /* Fade in active card */
    position: relative; /* Reset positioning for active card */
}

.steps {
    display: block;
}

.step-card {
     background-color: var(--secondary-color);
    border-radius: 6px;
    padding: 0.75rem;
    margin-bottom: 0.75rem;
    transition: background-color 0.3s ease;
}

.step-card h3 {
    font-size: 1.1rem; /* Increased Step Title Font Size */
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.step-card p {
    color: #666;
    font-size: 1em; /* Adjusted size for step descriptions */
}

.activity-card > p {
    color: #666; /* Activity Description Style */
    font-size: 1em; /* Adjusted size for activity descriptions */
}

/* Multi-Column Step Cards (Default para móvil, una columna) */
.steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.step-card {
    background-color: var(--secondary-color);
    border-radius: 6px;
    padding: 0.75rem;
    margin-bottom: 0.75rem;
    transition: background-color 0.3s ease;
    display: grid;
    grid-template-columns: 1fr; /* Una columna por defecto (contenido y diálogo apilados) */
}

.step-content {
    margin-bottom: 0.75rem; /* Added some spacing */
}

.dialogue.assistant {
    background-color: var(--dialogue-assistant);
    text-align: left;
    color: var(--text-color);
    padding: 0.75rem;
    border-radius: 6px;
}

/* Collapsible */

.collapsible {
    margin-top: 0.75rem;
}

.collapsible-button {
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.2s ease;
    margin: 0 auto; /* Centrar el botón */
    display: block; /* Asegura que el margin auto funcione */
}

.collapsible-button:hover {
    background-color: var(--dark-primary-color);
}

.collapsible-content {
    padding: 0.75rem;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    margin-top: 0.5rem;
    display: none; /* Hidden by default */
}

.dialogue {
    font-style: italic;
    padding: 0.5rem;
    border-radius: 44px; /* Un poco más redondeado, si quieres */
}

.dialogue.assistant {
    background-color: var(--dialogue-assistant);
    text-align: left;
    color: var(--text-color);
}

.dialogue.user {
    background-color: var(--dialogue-user);
    text-align: right;
    color: var(--text-color);
}

/* Dark Mode Styles */
body.dark-mode {
    background-color: var(--dark-background-color);
    color: var(--dark-text-color);
}

body.dark-mode header {
    background-color: var(--dark-primary-color);
}

body.dark-mode .activity-card {
    background-color: var(--dark-light-gray);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

body.dark-mode .activity-card h2,
body.dark-mode .step-card h3 {
    color: var(--dark-text-color);
}

body.dark-mode .step-card {
    background-color: var(--dark-secondary-color);
}

body.dark-mode .collapsible-content {
    border-color: var(--dark-text-color);
}

body.dark-mode .dialogue.assistant {
    background-color: var(--dark-dialogue-assistant);
    color: var(--dark-text-color);
}

body.dark-mode .dialogue.user {
    background-color: var(--dark-dialogue-user);
    color: var(--dark-text-color);
}

body.dark-mode .progress-bar {
    background-color: var(--dark-light-gray);
}

body.dark-mode aside.activity-list {
    background-color: var(--dark-secondary-color);
    border-color: var(--dark-light-gray);
}

body.dark-mode aside.activity-list h2 {
    color: var(--dark-text-color);
}

body.dark-mode aside.activity-list a {
    color: var(--dark-text-color);
    background-color: var(--dark-primary-color);
}

body.dark-mode aside.activity-list a:hover {
    background-color: var(--primary-color);
}

body.dark-mode .sidebar-info {
   color: #ccc;
}

body.dark-mode .activity-card > p {
    color: var(--dark-text-color);
}

body.dark-mode .step-card p {
    color: #ccc;
}

body.dark-mode #toggle-dialogues {
    background-color: var(--dark-primary-color);
}

#toggle-dialogues {
    background-color: var(--primary-color);
    color: white;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s ease;
    margin-bottom: 1.5rem;
    display: block; /* NEW: Asegura que el botón ocupe su propia línea */
    width: fit-content; /* NEW: Se ajusta al contenido */
    margin-left: auto; /* NEW: Centra el botón */
    margin-right: auto; /* NEW: Centra el botón */
}

#toggle-dialogues:hover {
    background-color: var(--dark-primary-color);
}

.timer-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    color: white; /* Timer Number in White */
    font-size: 1.2rem;
    padding: 0.75rem 1rem;
    border-radius: 15px;
    background-color: rgba(0,0,0, 0.2);
    /* NEW: Permite que el timer se ajuste en pantallas pequeñas */
    flex-grow: 1;
    justify-content: center;
}

body.dark-mode .timer-container {
    color: var(--dark-text-color);
}

body.dark-mode .timer-container button {
    background-color: var(--secondary-color);
    color: var(--text-color);
}

body.dark-mode .timer-container button:hover {
    background-color: #b2dfdb;
}

.timer-container button {
    background-color: var(--secondary-color);
    color: var(--text-color);
    border: none;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.timer-container button:hover {
    background-color: #b2dfdb;
}

.header-widgets {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap; /* NEW: Permite que los widgets se envuelvan */
    justify-content: center; /* NEW: Centra los widgets en pantallas pequeñas */
    flex-grow: 1; /* NEW: Permite que el contenedor de widgets crezca */
}


/* Hide all activity cards by default */
.activity-card {
    display: none;
}

/* Style for the active activity card */
.activity-card.active {
    display: block;
}

/* Media Query para pantallas medianas y grandes (Desktop) */
@media (min-width: 768px) {
    /* Main Layout */
    .main-container {
        flex-direction: row; /* Vuelve a poner la barra lateral y el contenido uno al lado del otro */
    }

    aside.activity-list {
        width: 200px; /* Ancho fijo de la barra lateral en desktop */
        border-right: 1px solid var(--light-gray); /* Borde a la derecha */
        border-bottom: none; /* Sin borde inferior */
        padding: 1rem; /* Padding original */
    }

    aside.activity-list h2,
    .sidebar-info p {
        text-align: left; /* Alinea el texto a la izquierda en desktop */
    }

    aside.activity-list ul {
        flex-direction: column; /* Vuelve a apilar los números verticalmente */
        align-items: flex-start; /* Alinea a la izquierda */
        gap: 0; /* Sin gap entre los li */
    }

    aside.activity-list li {
        margin-bottom: 0.75rem; /* Vuelve al margen original */
    }

    /* Step Cards - Dos columnas en pantallas más grandes */
    .steps {
        grid-template-columns: 1fr; /* Una columna a 768px, luego ajustaremos a 2 */
    }

    .step-card {
        grid-template-columns: 1fr 1fr; /* Divide el contenido y el diálogo en 2 columnas */
    }

    .step-content {
        margin-bottom: 0rem; /* No vertical space */
    }

    /* Header - Vuelve a la alineación de desktop */
    header h1 {
        flex-grow: 0; /* No crece para ocupar todo el ancho */
        justify-content: flex-start; /* Alinea a la izquierda */
    }

    .header-widgets {
        flex-grow: 0; /* No crece para ocupar todo el ancho */
        justify-content: flex-end; /* Alinea a la derecha */
    }

    .timer-container {
        flex-grow: 0; /* No crece para ocupar todo el ancho */
        justify-content: flex-end; /* Alinea a la derecha */
    }

    #toggle-dialogues {
        margin-left: 0; /* Elimina el centrado en desktop */
        margin-right: auto; /* Lo alinea a la izquierda */
        width: auto; /* Vuelve a su ancho normal si se había ajustado */
    }
}

/* Puedes añadir más media queries si necesitas más puntos de ruptura, por ejemplo: */
/* @media (min-width: 1024px) {
    aside.activity-list {
        width: 250px; // Un poco más ancha la sidebar
    }
} */
