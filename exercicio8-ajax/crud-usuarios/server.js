import express from "express";
import app from "./routes/router.js";
import SeedService from "./services/SeedService.js";

const porta = 3000;

app.listen(porta, async () => {
    console.log(`backend sendo executado em http://localhost:${porta}`);
    
    await SeedService.preencher();
});