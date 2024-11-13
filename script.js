// Buscar el botón y el div donde mostrar el contador
const startMiningButton = document.getElementById('start-mining-button');
const counterDisplay = document.getElementById('counter-display');
const monedasContainer = document.getElementById('monedas-container');

// Variable para el contador
let counter = 0.0000; // Iniciar con 4 decimales
let booster = 200; // Ejecutar cada 200 milisegundos (0.2 segundo)

// Función para crear una moneda con movimiento aleatorio
// Función para crear una moneda con movimiento aleatorio
function createCoin() {
    const coin = document.createElement('div');
    coin.classList.add('moneda');

    // Posición inicial en el centro
    const startX = 45; // Ajusta según tu contenedor
    const startY = 45; // Ajusta según tu contenedor

    // Ángulo aleatorio entre 0 y 360 grados
    const angle = Math.random() * Math.PI * 2;
    
    // Distancia aleatoria entre 20 y 60 píxeles
    const distance = 40 + Math.random() * 60;

    // Calcular posición final
    const endX = startX + Math.cos(angle) * distance;
    const endY = startY + Math.sin(angle) * distance;
    

    // Establecer posición inicial
    coin.style.left = `${startX}px`;
    coin.style.top = `${startY}px`;
    coin.style.bottom = `${startX}px`;
    coin.style.right = `${startY}px`;

    // Añadir la moneda al contenedor
    monedasContainer.appendChild(coin);

    // Aplicar animación con keyframes personalizados
    coin.animate([
        {
            // Posición inicial
            bottom:`${startY}px`,
            right:`${startX}px`,
            top: `${startY}px`,
            left: `${startX}px`,
            opacity: 4,
            transform: 'scale(0.5)'
        },
        {
            // Posición final
            bottom:`${endY}px`,
            right:`${endX}px`,
            top: `${endY}px`,
            left: `${endX}px`,
            opacity: 0,
            transform: 'scale(1.5)'
        }
    ], {
        duration: 700,
        easing: 'ease-out'
    });

    // Eliminar la moneda después de la animación
    setTimeout(() => {
        coin.remove();
    }, 700);
}

// Función para iniciar el contador cuando se presiona el botón
startMiningButton.addEventListener('click', () => {
    // Deshabilitar el botón para evitar clics múltiples
    startMiningButton.disabled = true;

    // Iniciar el contador
    const intervalId = setInterval(() => {
        counterDisplay.textContent = counter.toFixed(4); // Mostrar el contador con 4 decimales
        counter += 0.0001; // Incrementar el contador en 0.0001

        // Crear una moneda cada vez que el contador se actualiza
        createCoin();

    }, booster); 
});
// Para crear varias monedas a la vez
function createMultipleCoins(amount) {
    for (let i = 0; i < amount; i++) {
        setTimeout(() => {
            createCoin();
        }, i * 50); // Pequeño retraso entre cada moneda
    }
}

// Función para iniciar el contador cuando se presiona el botón
startMiningButton.addEventListener('click', () => {
    createMultipleCoins(5); // Crear 5 monedas
    // Deshabilitar el botón para evitar clics múltiples
    startMiningButton.disabled = true;

    // Iniciar el contador
    const intervalId = setInterval(() => {
        counterDisplay.textContent = counter.toFixed(4); // Mostrar el contador con 4 decimales
        counter += 0.0001; // Incrementar el contador en 0.0001

        // Crear una moneda cada vez que el contador se actualiza
        createCoin();

    }, booster); 
});


// Asegúrate de que el SDK de Web App está cargado
const tg = window.Telegram.WebApp;

// Obtener información del usuario
const user = tg.initDataUnsafe;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('user-name').innerText = `Hola, ${user.first_name}`;
});