function criarCamposDeFieldset() {
    var fieldset, legend, textLegend, label, labelText, input, idText, textPlaceholder;
    var container = document.getElementById("fieldset-container");

    for (var i = 1; i <= 3; i++) {
        fieldset = document.createElement("fieldset");

        if (i === 1) {
            legend = document.createElement("legend");
            legend.innerHTML = `<h3>Atividades de Estudo ${i} e ${i + 1}</h3>`;
            fieldset.appendChild(legend);

            for (var k = 1; k <= 2; k++) {
                label = document.createElement("label");

                if (k === 1) {
                    labelText = "Nota Atividade de Estudo " + k + " - Questionário:";
                    idText = "note" + k;
                    textPlaceholder = "Insira a nota da atividade de Estudo " + k;
                } else if (k === 2) {
                    labelText = "Nota Atividade de Estudo " + k + " - Questionário:";
                    idText = "note" + k;
                    textPlaceholder = "Insira a nota da atividade de Estudo " + k;
                }

                label.innerHTML = "<h4>" + labelText + "</h4>";
                fieldset.appendChild(label);

                input = document.createElement("input");
                input.type = "number";
                input.role = "textbox";
                input.id = idText;
                input.placeholder = textPlaceholder;
                input.min = "0";
                input.max = "10";
                input.required = true;
                input.setAttribute("aria-required", "true");
                input.setAttribute("aria-valuemin", "0");
                input.setAttribute("aria-valuemax", "10");
                fieldset.appendChild(input);
            }
        } else if (i === 2) {
            legend = document.createElement("legend");
            legend.innerHTML = `<h3>Atividades de Estudo ${i + 1} e ${i + 2}</h3>`;
            fieldset.appendChild(legend);

            for (var k = 1; k <= 2; k++) {
                label = document.createElement("label");

                if (k === 1) {
                    labelText = "Nota Atividade de Estudo " + (k + 2) + " - Questionário:";
                    idText = "note" + (k + 2);
                    textPlaceholder = "Insira a nota da atividade de Estudo " + (k + 2);
                } else if (k === 2) {
                    labelText = "Nota Atividade de Estudo " + (k + 2) + " - Questionário:";
                    idText = "note" + (k + 2);
                    textPlaceholder = "Insira a nota da atividade de Estudo " + (k + 2);
                }

                label.innerHTML = "<h4>" + labelText + "</h4>";
                fieldset.appendChild(label);

                input = document.createElement("input");
                input.type = "number";
                input.role = "textbox";
                input.id = idText;
                input.placeholder = textPlaceholder;
                input.min = "0";
                input.max = "10";
                input.required = true;
                input.setAttribute("aria-required", "true");
                input.setAttribute("aria-valuemin", "0");
                input.setAttribute("aria-valuemax", "10");
                fieldset.appendChild(input);
            }
        } else if (i === 3) {
            var legend = document.createElement("legend");
            legend.innerHTML = "<h3>Prática e exame</h3>";
            fieldset.appendChild(legend);

            for (var k = 1; k <= 2; k++) {
                label = document.createElement("label");

                if (k === 1) {
                    labelText = "Nota Atividade Prática:";
                    idText = "practice";
                    textPlaceholder = "Insira a nota da atividade Prática";
                } else if (k === 2) {
                    labelText = "Nota Prova &ndash;&nbsp;Questionário:";
                    idText = "exame";
                    textPlaceholder = "Insira a nota da Prova Questionário";
                }

                label.innerHTML = "<h4>" + labelText + "</h4>";
                fieldset.appendChild(label);

                input = document.createElement("input");
                input.type = "number";
                input.role = "textbox";
                input.id = idText;
                input.placeholder = textPlaceholder;
                input.min = "0";
                input.max = "10";
                input.required = true;
                input.setAttribute("aria-required", "true");
                input.setAttribute("aria-valuemin", "0");
                input.setAttribute("aria-valuemax", "10");
                fieldset.appendChild(input);
            }
        }

        container.appendChild(fieldset);
    }
}
