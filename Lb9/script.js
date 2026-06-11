function taskA() {
    let name = prompt("Введіть ім'я:");
    let year = prompt("Введіть рік народження:");

    document.getElementById("outA").innerHTML =
        `Здрастуйте, ${name}! Ваш рік народження — ${year}`;
}

function taskB() {
    let n = Number(prompt("Введіть довжину паркану (n):"));

    let r = n / (2 * Math.PI);
    let s = Math.PI * r * r;

    alert("Площа клумби: " + s.toFixed(2));

    document.getElementById("outB").innerHTML =
        `Площа клумби: ${s.toFixed(2)} м²`;
}

function taskC() {
    let num = prompt("Введіть 4-значне число:");

    if (num.length !== 4 || isNaN(num)) {
        alert("Потрібно ввести 4-значне число!");
        return;
    }

    let result = num[3] + num.slice(0, 3);

    alert("Результат: " + result);

    document.getElementById("outC").innerHTML =
        `Результат: ${result}`;
}

function taskD() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b)) {
        alert("Некоректні дані!");
        return;
    }

    let denom = 2 * (b - 2 * a) * (a * a + b * b);

    if (denom === 0) {
        alert("Не задовольняють ОДЗ!");
        return;
    }

    let z =
        Math.cos(a * a + b * b) *
        Math.pow(Math.abs(a + b), 2) /
        denom;

    let row = document.createElement("div");
    row.className = "output";

    row.innerHTML =
        `a=${a}, b=${b}, z=${z.toFixed(2)}`;

    document.getElementById("historyD").appendChild(row);
}