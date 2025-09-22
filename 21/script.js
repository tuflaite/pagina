// Función para hacer felices a los personajes
function makeHappy(element, newEmoji) {
    element.innerHTML = newEmoji;
    element.style.transform = 'scale(1.3) rotate(360deg)';
    createSparkles(element);
    
    setTimeout(() => {
        element.style.transform = 'scale(1) rotate(0deg)';
    }, 1000);
}

// Crear brillitos alrededor de un elemento
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkles sparkle-animation';
            sparkle.innerHTML = '✨';
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                document.body.removeChild(sparkle);
            }, 1500);
        }, i * 100);
    }
}

// Mostrar la sección sorpresa con unicornio
function showSurprise() {
    const surpriseSection = document.getElementById('surprise-section');
    surpriseSection.classList.remove('hidden');
    surpriseSection.classList.add('visible');
    
    // Crear más corazones
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 200);
    }
}

// Crear un corazón flotante
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = '2em';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'float 3s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (document.body.contains(heart)) {
            document.body.removeChild(heart);
        }
    }, 3000);
}

// Crear explosión de corazones
function createHeartExplosion() {
    const hearts = ['💖', '💕', '💗', '💓', '💝'];
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = '2em';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            
            const angle = (i / 12) * 2 * Math.PI;
            const distance = 100 + Math.random() * 100;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            heart.style.transform = `translate(-50%, -50%)`;
            heart.style.transition = 'all 2s ease-out';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.transform = `translate(${endX}px, ${endY}px) scale(0)`;
                heart.style.opacity = '0';
            }, 50);
            
            setTimeout(() => {
                if (document.body.contains(heart)) {
                    document.body.removeChild(heart);
                }
            }, 2000);
        }, i * 100);
    }
}

// Crear besitos de conejito
function bunnyKisses() {
    const kisses = ['💋', '😘', '💕'];
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.innerHTML = kisses[Math.floor(Math.random() * kisses.length)];
            kiss.style.position = 'fixed';
            kiss.style.left = Math.random() * window.innerWidth + 'px';
            kiss.style.top = Math.random() * window.innerHeight + 'px';
            kiss.style.fontSize = '1.5em';
            kiss.style.pointerEvents = 'none';
            kiss.style.zIndex = '1000';
            kiss.style.animation = 'sparkle 2s ease-out forwards';
            
            document.body.appendChild(kiss);
            
            setTimeout(() => {
                if (document.body.contains(kiss)) {
                    document.body.removeChild(kiss);
                }
            }, 2000);
        }, i * 150);
    }
}

// Hacer bailar al unicornio
function dance(element) {
    let danceCount = 0;
    const danceInterval = setInterval(() => {
        element.style.transform = danceCount % 2 === 0 ? 
            'rotate(10deg) scale(1.2)' : 'rotate(-10deg) scale(1.2)';
        danceCount++;
        
        if (danceCount >= 8) {
            clearInterval(danceInterval);
            element.style.transform = 'rotate(0deg) scale(1)';
        }
    }, 200);
}

// Crear corazones aleatorios cada cierto tiempo
setInterval(() => {
    if (Math.random() < 0.3) {
        createFloatingHeart();
    }
}, 3000);

// Efecto de click en cualquier parte de la página
document.addEventListener('click', function(e) {
    if (Math.random() < 0.5) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.fontSize = '1.5em';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (document.body.contains(sparkle)) {
                document.body.removeChild(sparkle);
            }
        }, 1000);
    }
});