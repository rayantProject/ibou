import express from 'express';
import dbConnect from './config/dbConnect';
import router from './routes/routeur';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

dbConnect
    .then(() => {
        app.use(router);

        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.log(err);

        process.exit(1);
    });
