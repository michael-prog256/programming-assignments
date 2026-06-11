function createVectorInputs() {
    let size = parseInt(document.getElementById("vectorSize").value);
    let container = document.getElementById("vectorContainer");

    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.className = "vector-input";
        input.placeholder = "A" + (i + 1);
        container.appendChild(input);
    }

    document.body.style.background = getRandomColor();
}

function createVectorB() {
    let size = parseInt(document.getElementById("vectorSizeB").value);
    let container = document.getElementById("vectorContainerB");

    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.className = "vectorB-input";
        input.placeholder = "B" + (i + 1);
        container.appendChild(input);
    }

    document.body.style.background = getRandomColor();
}

function getVector() {
    return Array.from(document.querySelectorAll(".vector-input"))
        .map(x => parseFloat(x.value) || 0);
}

function getVectorB() {
    return Array.from(document.querySelectorAll(".vectorB-input"))
        .map(x => parseFloat(x.value) || 0);
}

function fillRandom() {
    let inputs = document.querySelectorAll(".vector-input");
    let min = parseFloat(document.getElementById("minRand").value);
    let max = parseFloat(document.getElementById("maxRand").value);
    let intOnly = document.getElementById("intOnly").checked;

    inputs.forEach(inp => {
        let val = Math.random() * (max - min) + min;
        inp.value = intOnly ? Math.floor(val) : val;
    });

    document.body.style.background = getRandomColor();
}

function calcNorm() {
    let v = getVector();
    let sum = v.reduce((a, b) => a + b * b, 0);
    let norm = Math.sqrt(sum);

    document.getElementById("result").innerHTML =
        "Норма A: " + norm.toFixed(4);

    document.body.style.background = getRandomColor();
}

function normalizeVector() {
    let v = getVector();
    let norm = Math.sqrt(v.reduce((a, b) => a + b * b, 0));

    let container = document.getElementById("vectorContainer");
    container.innerHTML = "";

    v.forEach(x => {
        let input = document.createElement("input");
        input.className = "vector-input";
        input.value = (x / norm).toFixed(4);
        container.appendChild(input);
    });

    document.getElementById("result").innerHTML = "A нормовано";

    document.body.style.background = getRandomColor();
}

function calcProduct() {
    let v = getVector();
    let product = v.reduce((a, b) => a * b, 1);

    document.getElementById("result").innerHTML =
        "Добуток A: " + product;

    document.body.style.background = getRandomColor();
}

function linearCombination() {
    let a = parseFloat(document.getElementById("coefA").value);
    let b = parseFloat(document.getElementById("coefB").value);

    let v1 = getVector();
    let v2 = getVectorB();

    if (v1.length !== v2.length) {
        alert("Вектори мають бути однакової довжини");
        return;
    }

    let result = v1.map((x, i) => a * x + b * v2[i]);

    document.getElementById("result").innerHTML =
        "Лінійна комбінація: " +
        result.map(x => x.toFixed(4)).join(", ");

    document.body.style.background = getRandomColor();
}

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 70%, 90%)`;
}