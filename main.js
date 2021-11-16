window.addEventListener("DOMContentLoaded", function (event){});

function calculate() {
    let number = Number(document.getElementById("Clothes_Count").value);
    let price = Number(document.getElementById("Clothes_Price").value);


    let exp = new RegExp(/^[0-9]+$/i);
    if (
        !(
            exp.test(number) && exp.test(price)
        )
    ) {
        alert("Введите положительные числа");
    } else if (number == "") {
        alert("Введите количество одежды");
    } else if (price == "") {
        alert("Введите цену одежды");
    } else {
        const cost = number * price;
        document.getElementById("cost").innerHTML =
            "Стоимость товаров составляет " + cost + "руб.";
    }
}
