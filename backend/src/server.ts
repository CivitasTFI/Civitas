import app from "./app";
import "dotenv/config";

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port, "0.0.0.0", () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});