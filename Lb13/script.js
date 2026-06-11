let matrix = [];

function createMatrix() {
    let r = parseInt(document.getElementById("rows").value);
    let c = parseInt(document.getElementById("cols").value);

    matrix = [];

    let container = document.getElementById("matrixContainer");
    container.innerHTML = "";

    let table = "<table>";

    for (let i = 0; i < r; i++) {
        matrix[i] = [];
        table += "<tr>";

        for (let j = 0; j < c; j++) {
            matrix[i][j] = 0;
            table += `<td><input type="number" id="cell-${i}-${j}" value="0"></td>`;
        }

        table += "</tr>";
    }

    table += "</table>";

    container.innerHTML = table;
}

function fillRandom() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let intOnly = document.getElementById("intOnly").checked;

    let r = matrix.length;
    let c = matrix[0].length;

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {

            let val = Math.random() * (max - min) + min;
            if (intOnly) val = Math.floor(val);

            document.getElementById(`cell-${i}-${j}`).value = val;
        }
    }
}

// =========================
// A: середнє < k → підсвітка
// =========================
function taskA() {
    let k = parseFloat(document.getElementById("k").value);

    let r = matrix.length;
    let c = matrix[0].length;

    for (let i = 0; i < r; i++) {
        let sum = 0;

        for (let j = 0; j < c; j++) {
            sum += parseFloat(document.getElementById(`cell-${i}-${j}`).value);
        }

        let avg = sum / c;

        for (let j = 0; j < c; j++) {
            let cell = document.getElementById(`cell-${i}-${j}`);

            if (avg < k) {
                cell.classList.add("highlight");
            } else {
                cell.classList.remove("highlight");
            }
        }
    }

    document.getElementById("result").innerHTML =
        "A виконано: підсвічено рядки з середнім < k";
}

// =========================
// B: формула матриці
// =========================
function taskB() {

    let n = matrix.length;

    let res = [];

    for (let i = 0; i < n; i++) {
        res[i] = [];
        for (let j = 0; j < n; j++) {
            res[i][j] = Math.pow(i + j, 2);
        }
    }

    showMatrix(res);
}

// =========================
// C: поворот 90°
// =========================
function taskC() {

    let n = matrix.length;
    let res = [];

    for (let i = 0; i < n; i++) {
        res[i] = [];
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res[j][n - 1 - i] = parseFloat(document.getElementById(`cell-${i}-${j}`).value);
        }
    }

    showMatrix(res);
}

// =========================
// helper: show matrix
// =========================
function showMatrix(m) {

    let html = "<table>";

    for (let i = 0; i < m.length; i++) {
        html += "<tr>";
        for (let j = 0; j < m[i].length; j++) {
            html += `<td>${m[i][j]}</td>`;
        }
        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("result").innerHTML = html;
}