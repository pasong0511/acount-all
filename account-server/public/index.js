"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const divEl = document.createElement("div");
document.querySelector("#btn").onclick = () => __awaiter(void 0, void 0, void 0, function* () {
    const response1 = yield fetch("/api/account/income", {
        method: "GET",
    });
    const response2 = yield fetch("/api/account/expend", {
        method: "GET",
    });
    const data1 = yield response1.json();
    const data2 = yield response2.json();
    console.log(data1);
    console.log(data2);
});
document.querySelector("#btn2").onclick = () => __awaiter(void 0, void 0, void 0, function* () {
    const response3 = yield fetch("/api/account/expend/id/1", {
        method: "GET",
    });
    const data3 = yield response3.json();
    console.log(data3);
});
document.querySelector("#btn5").onclick = () => __awaiter(void 0, void 0, void 0, function* () {
    const response3 = yield fetch("/api/account/income/id/1", {
        method: "GET",
    });
    const data3 = yield response3.json();
    console.log(data3);
});
document.querySelector("#btn3").onclick = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("/api/account/income/payDay/25", {
        method: "GET",
    });
    const data = yield response.json();
    console.log(data);
});
document.querySelector("#btn4").onclick = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("/api/account/expend/payDay/25", {
        method: "GET",
    });
    const data = yield response.json();
    console.log(data);
});
document.querySelector("#btnPut").onclick = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("/api/account/expend/id/1", {
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
                payDay: 25
            } }),
    });
    const data = yield response.json();
    console.log(data);
});
