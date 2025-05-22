const express = require('express')
const bodyParser = require('body-parser')
const WebSocket = require('ws');
const http = require('http');
const clients = new Set();
const path = require('path');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = 3000
const hostName = '127.0.0.1'

const {Sequelize} = require('sequelize')
const authRoutes = require('./routes/authRoutes');
const studentRoute = require('./routes/studentRoute');
const cors = require('cors');
const majorRoutes = require('./routes/majorRoutes');

const sequelize = new Sequelize({
    database: 'pi_medsos',
    username: 'root',
    password: '031107',
    host: 'localhost',
    dialect: 'mysql'
}); 

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
        
        await sequelize.sync({ alter: true });
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database or sync model:', error);
    }
})();

const corsOption = {
    origin: 'http://localhost:5173'
}

app.use('/v1/auth', cors(corsOption), authRoutes(express))
app.use('/v1/student', studentRoute(express))
app.use('/v1/post',cors(corsOption), studentRoute(express))
app.use('/v1', cors(corsOption), majorRoutes(express))

app.get('/', async(req, res) => {
    try {
        await sequelize.authenticate();
        res.send({
            message: "Home Page - Database connected successfully"
        });
    } catch (error) {
        res.status(500).send({
            message: "Unable to connect to the database",
            error: error.message
        });
    }
})

wss.on('connection', (ws) => {
    clients.add(ws);
    console.log('Klien terhubung');
    ws.send(JSON.stringify({
        type: 'connection',
        message: 'Terhubung ke server WebSocket'
    }));
    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            console.log('Diterima:', parsedMessage);
            clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: 'broadcast',
                        data: parsedMessage
                    }));
                }
            });
        } catch (error) {
            console.error('Error parsing pesan:', error);
        }
    });
    ws.on('close', () => {
        clients.delete(ws);
        console.log('Klien terputus');
    });
});

app.post('/send-notification', (req, res) => {
    const notification = req.body;
    
    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
            type: 'notification',
            data: notification
            }));
        }
    });
    res.status(200).json({ message: 'Notifikasi berhasil dikirim' });
});

app.listen(port, () => {console.log(`Server running at http://${hostName}:${port}`)})   