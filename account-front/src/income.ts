import "./css/reset.css";
import "./css/navigation.css";

interface PostOption {
    method: string;
    headers: object | any;
    body: string;
}

async function saveIncome(
    way: string,
    mony: number,
    date: string,
    category: string,
    memo: string
) {
    const [year, month, day] = date.split("-");
    console.log(way, mony, date, category, memo);
    console.log(year, month, day);

    const incomeData = JSON.stringify({
        payedMoney: way,
        category: category,
        memo: memo,
        payYear: year,
        payMonth: month,
        payDay: day,
    });

    const requstOption: PostOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: incomeData,
    };

    const response3 = await fetch("/api/account/income/", requstOption);

    const data3 = await response3.json();
    console.log(data3);
}

const submitBtnEl = document.querySelector(".submit-btn");

function submitIncomeData(): any {
    const incomeWayEl = document.querySelector(
        ".income-way"
    ) as HTMLSelectElement;
    const incomeMonyEl = document.querySelector(
        ".income-mony"
    ) as HTMLSelectElement;
    const dateEl = document.querySelector(
        "input[type='date']"
    ) as HTMLSelectElement;
    const categoryEl = document.querySelector(
        ".category-way"
    ) as HTMLSelectElement;
    const memoEl = document.querySelector(".input-memo") as HTMLSelectElement;
    console.log(incomeWayEl.options[incomeWayEl.selectedIndex].value);
    console.log(incomeMonyEl.value);
    console.log(dateEl.value);
    console.log(categoryEl.value);
    console.log(memoEl.value);

    saveIncome(
        incomeWayEl.options[incomeWayEl.selectedIndex].value,
        Number(incomeMonyEl.value),
        dateEl.value,
        categoryEl.value,
        memoEl.value
    );
}

submitBtnEl?.addEventListener("click", submitIncomeData);
