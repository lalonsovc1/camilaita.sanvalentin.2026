const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
// ✨ Destellos mágicos
function crearDestellos() {
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        sparkle.style.left = "50%";
        sparkle.style.top = "50%";
        sparkle.style.setProperty("--x", (Math.random() - 0.5) * 300 + "px");
        sparkle.style.setProperty("--y", (Math.random() - 0.5) * 300 + "px");

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }
}


document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

           setTimeout(() => {
            carta.classList.remove("mostrar-carta");
            carta.classList.add("abierta");
            crearDestellos(); // ✨ AQUÍ se activan
            efectoMaquina();

            }, 500);

            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})


// Generar corazones flotando
const heartsContainer = document.querySelector(".hearts-bg");

for (let i = 0; i < 20; i++) {
    const heart = document.createElement("span");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heartsContainer.appendChild(heart);
}



const texto = `
<strong>Querida Camilita</strong><br><br>

Mañana es <strong>San Valentín</strong>… y no puedo evitar sonreír al pensar en todo lo que hemos vivido.  
No ha sido un año perfecto para empezar porque casi no nos hemos visto, pero ha sido <strong>nuestro</strong>. <br><br>

Con momentos hermosos, risas que todavía resuenan en mi cabeza, abrazos que me hicieron sentir en casa, y también pruebas que nos hicieron más fuertes. <br><br>

Hemos pasado por días buenos y días difíciles, pero lo más importante es que siempre elegimos quedarnos, hablar, entendernos y seguir adelante. Y eso vale más que cualquier cosa. <br><br>

Quiero que sepas que te amo no solo por los momentos bonitos, sino también por tu fuerza, tu paciencia, tu forma de mirar la vida y por cómo, incluso sin darte cuenta, haces que la mía sea mejor. <br><br>

Eres mi tranquilidad cuando el mundo pesa, mi alegría cuando sonríes, y mi persona favorita incluso en los días grises. <br><br>

Este primer año a tu lado me enseñó que el amor no es solo emoción… es decisión, es compromiso, es crecer juntos. Y yo te elijo hoy, mañana y cada día que venga. <br><br>

<strong>¿Quieres ser mi San Valentín no solo este año, sino en todos los que vienen? ❤️</strong>
`;

function efectoMaquina() {
    const mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "";
    let i = 0;

    function escribir() {
        if (i < texto.length) {

            // Si detecta una etiqueta HTML la escribe completa de golpe
            if (texto[i] === "<") {
                let cierre = texto.indexOf(">", i);
                mensaje.innerHTML += texto.substring(i, cierre + 1);
                i = cierre + 1;
            } else {
                mensaje.innerHTML += texto[i];
                i++;
            }

            setTimeout(escribir, 20);
        }
    }

    escribir();
}
