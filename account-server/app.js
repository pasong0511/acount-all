"use strict";
const express = require("express");
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1q2w3e4r",
    database: "accountbook",
});
connection.connect();
app.use(express.json());
app.post("/api/account/income", (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
        res.sendStatus(400);
        return;
    }
    const inputValues = Object.values(req.body.content);
    connection.query("insert into income \
        (payedMoney, category, memo, payYear, payMonth, payDay) \
        values (?) ", [inputValues], (err, rows) => {
        if (err) {
            throw err;
        }
        res.sendStatus(200);
    });
});
app.get("/api/account/income", (req, res) => {
    console.log(res);
    connection.query("select * from income ", (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.delete("/api/account/income", (req, res) => {
    connection.query("delete * from income ", (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.put("/api/account/income/id/:id", (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
        res.sendStatus(400);
        return;
    }
    let updateValues = "";
    let updateArray = [];
    for (let key in req.body.content) {
        updateArray.push(`${key} = '${req.body.content[key]}' `);
    }
    updateValues = updateArray.join(" , ");
    connection.query(`update income set ${updateValues} where id = ?`, [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.delete("/api/account/income/id/:id", (req, res) => {
    connection.query("delete * from income where id = ?", [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/account/income/id/:id", (req, res) => {
    connection.query("select * from income where id = ? ", [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/account/income/payYear/:payYear", (req, res) => {
    connection.query("select * from income where payYear = ? ", [req.params.payYear], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/account/income/payMonth/:payMonth", (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.payMonth)) {
        res.sendStatus(400);
        return;
    }
    connection.query("select * from income where payMonth = ? ", [req.params.payMonth], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/account/income/payDay/:payDay", (req, res) => {
    connection.query("select * from income where payDay = ? ", [req.params.payDay], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.post("/api/account/expend", (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
        res.sendStatus(400);
        return;
    }
    const inputValues = Object.values(req.body.content);
    connection.query("insert into expend \
        (payedMoney, payment, category, memo, payYear, payMonth, payDay) \
        values (?)", [inputValues], (err, rows) => {
        if (err) {
            throw err;
        }
        res.sendStatus(200);
    });
});
app.get("/api/account/expend", (req, res) => {
    connection.query("select * from expend ", (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.delete("/api/account/expend/id/:id", (req, res) => {
    connection.query("delete * from expend where id = ?", [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.put("/api/account/expend/id/:id", (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
        res.sendStatus(400);
        return;
    }
    let updateValues = "";
    let updateArray = [];
    for (let key in req.body.content) {
        updateArray.push(`${key} = '${req.body.content[key]}' `);
    }
    updateValues = updateArray.join(" , ");
    connection.query(`update expend set ${updateValues} where id = ?`, [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/account/expend/id/:id", (req, res) => {
    connection.query("select * from expend where id = ?", [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.delete("/api/account/expend/id/:id", (req, res) => {
    connection.query("delete * from expend where id = ? ", [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/account/expend/payYear/:payYear", (req, res) => {
    connection.query("select * from expend where payYear = ? ", [req.params.payYear], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/account/payMonth/:payMonth", (req, res) => {
    connection.query("select * from expend where payMonth = ? ", [req.params.payMonth], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/account/expend/payDay/:payDay", (req, res) => {
    connection.query("select * from expend where payDay = ? ", [req.params.payDay], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(createProxyMiddleware("/", {
    target: "http://localhost:8080/",
    changeOrigin: true,
}));
app.listen(3000, () => {
    console.log("listening on 3000…");
});
