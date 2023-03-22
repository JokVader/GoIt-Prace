function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "New Heading";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}

function mojaFunkcja() {
    const target = 4;
    let sum = 0;

    for (let i = 0; i < target; i += 1) {
        console.log("twoje i wynosi " + i);
        console.log("twoje sum wynosi " + sum);
        console.log("obliczenie " + sum + " + " + i + " = ");
        sum += i;
        console.log("wynik " + sum);
    }
    console.log(sum);
}e