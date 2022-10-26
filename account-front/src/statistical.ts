import "./css/reset.css";
import "./css/navigation.css";

const statisticalItemsEL = document.querySelector(".statistical-items");

async function fetchDataIncomeData() {
    const response3 = await fetch("/api/account/income/id/1", {
        method: "GET",
    });

    const data = await response3.json();
    console.log(data);
}

fetchDataIncomeData();
