import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use('/build', express.static(path.join(__dirname, 'public/build')));
app.use('/static', express.static(path.join(__dirname, '../public/build/static')));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});