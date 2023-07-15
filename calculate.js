function calculate() {
    var note1 = parseFloat(document.getElementById("note1").value);
    var note2 = parseFloat(document.getElementById("note2").value);
    var note3 = parseFloat(document.getElementById("note3").value);
    var note4 = parseFloat(document.getElementById("note4").value);
    var practice = parseFloat(document.getElementById("practice").value);
    var exame = parseFloat(document.getElementById("exame").value);
    var show_results = document.getElementById("result");

    var final_result = ((note1 + note2 + note3 + note4 + practice + exame) / 6).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    // create a div to show the results
    show_results.setAttribute("class", "row");
    var col = document.createElement("div");
    col.setAttribute("class", "col text-center");
    var h2 = document.createElement("h2");
    h2.textContent = "Resultados:";
    var p = document.createElement("p");
    p.textContent = "Resultado: " + final_result;

    col.appendChild(h2);
    col.appendChild(p);
    show_results.appendChild(col);
}
