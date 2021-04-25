import express from "express";

const app = express();

app.get("/", (request, response) => {
	return response.json({
		message: 'welcome'
	})
});

app.post('/', (request, response) => {
	return response.json({
		message: 'POST sucessful'
	})
});

app.listen(3333, () => console.log("connected"));
