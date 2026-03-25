/**
 * Reverse String — script.js
 * Invierte el orden de una cadena alfanumérica.
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
const btnReverse = document.getElementById("btnReverse");
const btnCopy    = document.getElementById("btnCopy");
const resultBox  = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");
const emptyMsg   = document.getElementById("emptyMsg");

// ── Evento: invertir cadena ───────────────────────────────────────────────────
btnReverse.addEventListener("click", () => {
    const value = inputText.value.trim();

    if (!value) {
        emptyMsg.classList.add("visible");
        resultBox.classList.remove("visible");
        return;
    }

    emptyMsg.classList.remove("visible");
    resultText.textContent = reverseString(value);
    resultBox.classList.add("visible");
});

// Invertir también al presionar Enter en el input
inputText.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnReverse.click();
});

// ── Evento: copiar resultado ──────────────────────────────────────────────────
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
