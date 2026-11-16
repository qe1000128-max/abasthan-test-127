const http = require('http');
const boot = new Date();
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  const uptimeSec = Math.floor((Date.now() - boot.getTime())/1000);
  if (req.url === '/health') {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({ok:true, service:'abasthan-test-127', boot: boot.toISOString(), uptimeSec, pid: process.pid, now: new Date().toISOString()}));
    return;
  }
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.end(`<h1>abasthan-test-127</h1><p>Abasthan free tier test by 127 account.</p><p>Boot: ${boot.toISOString()}</p><p>Uptime: ${uptimeSec}s</p><p><a href="/health">/health</a></p>`);
});
server.listen(port, () => console.log('listening on '+port));
