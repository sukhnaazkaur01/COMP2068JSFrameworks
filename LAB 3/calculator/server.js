import express from 'express';
import { URL } from 'url';

const app = express();
const port = 3000;

function calculate(method, x, y) {
    let result;
    switch(method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            return 'Error: Invalid method';
    }
    return `${x} ${method} ${y} = ${result}`;
}

app.get('/lab2', (req, res) => {
    const queryObject = new URL(req.url, `http://${req.headers.host}`).searchParams;
    const method = queryObject.get('method');
    const x = parseFloat(queryObject.get('x'));
    const y = parseFloat(queryObject.get('y'));

    const output = calculate(method, x, y);
    res.send(output);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
