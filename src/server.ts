import express from "express";

const app = express();

app.get("/", (request, response) => {
	return response.json({
		message: 'welcome'
	})
});

app.listen(3333, () => console.log("connected"));
