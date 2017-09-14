import express from 'express';

const app = express();
app.use(express.static('./public'));


app.get('/test', (req, res) => {
	res.send('Hello World!');
});

app.listen(3000, (err) => {

	if (err) {
		return console.error(err);
	}

	console.log('Server listen on port 3000 ...');
});