const net = require('net')

function warrant2Digits(number) {
    return number < 10 ? '0' + number : number
}

const server = net.createServer(socket=> {
    const date = new Date

    const res = `${date.getFullYear()}-${warrant2Digits(date.getMonth()+1)}-${warrant2Digits(date.getDate())}-${warrant2Digits(date.getHours())}:${warrant2Digits(date.getMinutes())}`

    socket.end(formattedDate)
})

const port = process.argv[2]

server.listen(port, () => console.log(`time server running on port ${port}`))