const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const http = require("http")
const webSocket = require("ws")

const app = express()
const port = 3002
const server = http.createServer(app)
const wss = new webSocket.Server({server})
const hostName = '127.0.0.1'
const corsOption = {
    origin: "http://127.0.0.1:5500"
}

app.use(cors(corsOption))

app.use(bodyParser.json())
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`RECEIVED: ${message}`)
    })
    ws.on('close', () => console.log('Web Socket Disconnected'))
})

app.post('/send-message', (req, res) => {
    const {name, message} = req.body

    if(!name || !message ) {
        return res.status(422).json({
            message: "Name or Message must be filled!"
        })
    }

    try {
        wss.clients.forEach(client => {
            if(client.readyState === webSocket.OPEN) {
                client.send(JSON.stringify({
                    name, message
                }))
            }
        });

        res.json({
            success: true,
            message: "Chat has send Successfully",
            contentMessage: message,
            name: name
        })
    } catch (error) {
        console.log(`Error sending notif: ${error}`)
        res.status(500).json({
            message: "ERR",
            error: error
        })
    }
})

server.listen(port, hostName, () => {console.log(`Server running at http://${hostName}:${port}`)})