import express from "express";

let configViewEngine = (app) => {
    // Cấu hình thư mục chứa các file static (css, js, images)
    app.use(express.static("./src/public"));

    // Cấu hình View Engine là EJS (để code HTML)
    app.set("view engine", "ejs");

    // Chỉ định thư mục chứa các file view (.ejs)
    app.set("views", "./src/views");
}

module.exports = configViewEngine;