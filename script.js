document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let tm = parseFloat(document.getElementById('tm').value);
    let to = parseFloat(document.getElementById('to').value);
    let tp = parseFloat(document.getElementById('tp').value);

    // Calcular Tiempo Esperado (Te) y Desviación (σ)
    let te = (to + 4 * tm + tp) / 6;
    let sigma = (tp - to) / 6;

    // Calcular rangos para 68.5% y 95.5% de certeza
    let range68Lower = te - sigma;
    let range68Upper = te + sigma;
    let range95Lower = te - 2 * sigma;
    let range95Upper = te + 2 * sigma;

    // Mostrar resultados
    document.getElementById('expectedTime').textContent = `Expected Time (Te): ${te.toFixed(2)} `;
    document.getElementById('deviation').textContent = `Deviation (σ): ${sigma.toFixed(2)}`;
    document.getElementById('accuracy68').textContent = `68.5% accuracy: ${range68Lower.toFixed(2)}  - ${range68Upper.toFixed(2)} `;
    document.getElementById('accuracy95').textContent = `95.5% accuracy: ${range95Lower.toFixed(2)}  - ${range95Upper.toFixed(2)} `;
});
