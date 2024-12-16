const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const readWrite = (file, content, res) => {
  fs.readFile(file, (err, data) => {
    res.writeHead(200, {'Content-Type': content});
    res.write(data);
    res.end();
  });
};

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  switch(page) {
    case '/':
      readWrite('index.html', 'text/html', res);
      break;
    case '/api':
      res.writeHead(200, {'Content-Type': 'application/json'});
      if(params['q'] === 'flip'){
        // coin flip
        let flipRes = Math.ceil(Math.random() * 2) === 1 ? 'Heads' : 'Tails';
        const objToJson = {
          flip: flipRes
        }

        if(flipRes === 'Heads') {
          objToJson['imgSrc'] = 'https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Heads.png';
        } else {
          objToJson['imgSrc'] = 'https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png'
        }
        res.end(JSON.stringify(objToJson));
      }
      break;
    case '/css/style.css':
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
      break;
    case '/js/main.js':
      readWrite('js/main.js', 'text/javascript', res);
      break;
    default: 
      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
    }
});

server.listen(8000);