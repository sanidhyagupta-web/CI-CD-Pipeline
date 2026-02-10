const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

app.get("/health", (req, res) => {
	res.status(200).json({ status: "ok" });
});

app.get("/api/v1/hello", (req, res) => {
	res.json({ message: "Hello from Elastic Sanidhya Beanstalk!" });
});

app.post("/api/v1/echo", (req, res) => {
	res.json({ youSent: req.body });
});

app.listen(port, "0.0.0.0", () => {
	console.log(`API running on port ${port}`);
});

