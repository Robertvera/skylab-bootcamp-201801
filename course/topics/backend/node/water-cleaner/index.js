const { Transform } = require('stream')
const byline = require('byline')
const fs = require('fs')

const waterIn = fs.createReadStream('water.txt')
const waterOut = fs.createWriteStream('clean-water.txt')
const waterInElements = byline.createStream(waterIn)


const waterCleaner = new Transform ({
    transform (chunk, encoding, next) {
        const element = chunk.toString()

        if(element === 'H2O')
            this.push(`${element}\n`)

        next()
    }
})

waterInElements.pipe(waterCleaner).pipe(waterOut)