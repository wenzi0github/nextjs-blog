const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = 8083;
app.prepare()
    .then(() => {
        const server = express();

        // server.get(/^\/post/, (req, res) => {
        //     console.log(req.path);
        //     req.path = 'post';
        //     return handle(req, res);
        // });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on port: ${port}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        nodeLogger('[app][prepare]', 'catch', ex.stack);
        nodeAtta({
            env: ENV,
            file: 'server.js',
            fn: 'app.prepare.catch',
            msg: JSON.stringify(ex.stack),
        });
        process.exit(1);
    });
