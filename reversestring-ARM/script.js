/**
 * Reverse String — script.js
 * Actualiza el resultado en tiempo real a medida que el usuario escribe.
 */

/**
 * Invierte el orden de los caracteres de una cadena.
 * @param {string} str - Cadena de entrada.
 * @returns {string} - Cadena con los caracteres en orden inverso.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

// ── Referencias al DOM ────────────────────────────────────────────────────────
const inputText = document.getElementById("inputText");
const resultBox  = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");
const btnCopy    = document.getElementById("btnCopy");

// ── Actualización en tiempo real ──────────────────────────────────────────────
inputText.addEventListener("input", () => {
    const value = inputText.value;

    if (value.length === 0) {
        resultBox.classList.remove("visible");
        return;
    }

    // Pequeño pulso visual al actualizar
    resultText.classList.add("updating");
    setTimeout(() => {
        resultText.textContent = reverseString(value);
        resultText.classList.remove("updating");
    }, 80);

    resultBox.classList.add("visible");
});

// ── Copiar resultado ──────────────────────────────────────────────────────────
btnCopy.addEventListener("click", () => {
    const text = resultText.textContent;
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
        btnCopy.textContent = "✓ Copied!";
        btnCopy.classList.add("copied");

        setTimeout(() => {
            btnCopy.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px">
                    <rect x="9" y="9" width="13" height="13" rx="2"/>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                </svg>
                Copy`;
            btnCopy.classList.remove("copied");
        }, 2000);
    });
});
