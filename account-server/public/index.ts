const divEl = document.createElement("div");

(document.querySelector("#btn") as HTMLButtonElement).onclick = async () => {
    const response1 = await fetch("/api/account/income", {
        method: "GET",
    });
    const response2 = await fetch("/api/account/expend", {
        method: "GET",
    });
    
    const data1 = await response1.json();
    const data2 = await response2.json();
    
    console.log(data1);
    console.log(data2);
    
}

(document.querySelector("#btn2") as HTMLButtonElement).onclick = async () => {
    const response3 = await fetch("/api/account/expend/id/1", {
        method: "GET",
    });

    const data3 = await response3.json();
    console.log(data3);

};

(document.querySelector("#btn5") as HTMLButtonElement).onclick = async () => {
    const response3 = await fetch("/api/account/income/id/1", {
        method: "GET",
    });

    const data3 = await response3.json();
    console.log(data3);

}

(document.querySelector("#btn3") as HTMLButtonElement).onclick = async () => {
    const response = await fetch("/api/account/income/payDay/25", {
        method: "GET",
    });

    const data = await response.json();
    console.log(data);
}

(document.querySelector("#btn4") as HTMLButtonElement).onclick = async () => {
    const response = await fetch("/api/account/expend/payDay/25", {
        method: "GET",
    });

    const data = await response.json();
    console.log(data);
}

(document.querySelector("#btnPut") as HTMLButtonElement).onclick = async () => {
    const response = await fetch("/api/account/expend/id/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: {
                                    payedMoney: 20000000, 
                                    payment: "카드",
                                    category: "식비", 
                                    memo: "안녕하세요", 
                                    payYear: 2022,
                                    payMonth: 10, 
                                    payDay: 25}}),
    });

    const data = await response.json();
    console.log(data);
}