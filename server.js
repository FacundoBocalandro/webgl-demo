let app = require('express')();
let http = require('http').createServer(app);

app.get('/2DCube.js', (req, res) => {
    res.sendFile(__dirname + "/2D/2DCube.js")
});

app.get('/3DCube.js', (req, res) => {
    res.sendFile(__dirname + "/3D/3DCube.js")
});

app.get('/3DCubeWithTexture.js', (req, res) => {
    res.sendFile(__dirname + "/3DTexture/3DCubeWithTexture.js")
});

app.get('/cubetexture.jpg', (req, res) => {
    res.sendFile(__dirname + "/3DTexture/cubetexture.jpg")
});

app.get('/2d', (req, res) => {
    res.sendFile(__dirname + "/2D/2DCube.html")
});

app.get('/3d', (req, res) => {
    res.sendFile(__dirname + "/3D/3DCube.html")
});

app.get('/texture', (req, res) => {
    res.sendFile(__dirname + "/3DTexture/3DCubeWithTexture.html")
});

http.listen(8080);
