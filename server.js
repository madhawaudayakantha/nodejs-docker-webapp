import express from "express";

const PORT =  process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
    res.json({message: "App is running on the docker container"})
});

app.listen(PORT, () => {
console.log(`App is running on ${PORT}`);
});
