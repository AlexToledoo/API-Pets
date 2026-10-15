import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const porta = process.env.PORT;
app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`);
    
});

console.log('hello world ');

