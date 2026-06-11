// =========================
// 1. МАСИВИ
// =========================

function runArrays() {

    // 1) через перелік
    let a1 = [1, 2, 3, 4, 5];

    // 2) порожній + різні типи
    let a2 = [];
    a2[0] = 10;
    a2[1] = "text";
    a2[2] = true;
    a2[3] = 3.14;
    a2[4] = null;

    // 3) new Array
    let a3 = new Array(5);
    for (let i = 0; i < a3.length; i++) {
        a3[i] = i * 2;
    }

    document.getElementById("arrInfo").innerHTML =
        `<b>a1:</b> ${a1[0]} ... ${a1[a1.length-1]} <br>
         <b>a2:</b> ${a2[0]} ... ${a2[a2.length-1]} <br>
         <b>a3:</b> ${a3[0]} ... ${a3[a3.length-1]}`;

    let text = "";

    for (let i = 0; i < a1.length; i++) {
        text += a1[i] + " ";
    }

    document.getElementById("arrLoop").innerHTML =
        "Вивід через for: " + text;
}


// =========================
// FOREACH → TABLE (myFunction1)
// =========================

function myFunction1() {

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = ["A", "B", "C", "D", "E"];
    let arr3 = [10, 20, 30, 40, 50];

    let table = "<table>";

    [arr1, arr2, arr3].forEach(arr => {
        table += "<tr>";
        arr.forEach(el => {
            table += `<td>${el}</td>`;
        });
        table += "</tr>";
    });

    table += "</table>";

    document.getElementById("tableOut").innerHTML = table;
}


// =========================
// 2D MASIV 4x4
// =========================

function create2D() {

    let m = [];

    for (let i = 0; i < 4; i++) {
        m[i] = [];
        for (let j = 0; j < 4; j++) {
            m[i][j] = i + j;
        }
    }

    let out = "";

    for (let i = 0; i < 4; i++) {
        out += m[i].join(" ") + "<br>";
    }

    document.getElementById("matrixOut").innerHTML = out;

    console.log(Array.isArray(m));
}


// =========================
// VECTOR + SORT
// =========================

let a = [];

function createVector() {

    let n = parseInt(document.getElementById("n").value);

    let container = document.getElementById("vectorFields");
    container.innerHTML = "";

    for (let i = 0; i < n; i++) {
        container.innerHTML += `<input type="number" class="vec">`;
    }
}


// copy_to_array
function copy_to_array() {

    let inputs = document.querySelectorAll(".vec");
    a = [];

    inputs.forEach(inp => {
        a.push(parseInt(inp.value) || 0);
    });

    a.sort(); // базове сортування

    inputs.forEach((inp, i) => {
        inp.value = a[i];
    });
}


// ↑
function sortAsc() {

    let inputs = document.querySelectorAll(".vec");
    a = [];

    inputs.forEach(inp => a.push(parseInt(inp.value) || 0));

    a.sort((x, y) => x - y);

    inputs.forEach((inp, i) => inp.value = a[i]);
}


// ↓
function sortDesc() {

    let inputs = document.querySelectorAll(".vec");
    a = [];

    inputs.forEach(inp => a.push(parseInt(inp.value) || 0));

    a.sort((x, y) => y - x);

    inputs.forEach((inp, i) => inp.value = a[i]);
}


// last digit sort
function sortLastDigit() {

    let inputs = document.querySelectorAll(".vec");
    a = [];

    inputs.forEach(inp => a.push(parseInt(inp.value) || 0));

    a.sort((x, y) => (x % 10) - (y % 10));

    inputs.forEach((inp, i) => inp.value = a[i]);
}