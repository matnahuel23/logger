const winston = require ('winston')

const customLevelOptions = {
    levels: {
        debug: 0,
        http: 1,
        info: 2,
        warning: 3,
        error: 4,
        fatal: 5
    },
    colors: {
        debug: 'magenta',
        http: 'green',
        info: 'blue',
        warning: 'yellow',
        error: 'orange',
        fatal: 'red'
    }
}

const devLogger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [ 
        new winston.transports.Console({ 
            level: "debug",
           format: winston.format.combine(
            winston.format.colorize({ colors: customLevelOptions.colors }),
            winston.format.simple()
           )
        }),
        new winston.transports.File({ 
            filename:'./errors.log', 
            level:'warning',
            format: winston.format.simple()
        })
    ]
})

const prodLogger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [ 
        new winston.transports.Console({ 
            level: "info",
           format: winston.format.combine(
            winston.format.colorize({ colors: customLevelOptions.colors }),
            winston.format.simple()
           )
        }),
        new winston.transports.File({ 
            filename:'./errors.log', 
            level:'warning',
            format: winston.format.simple()
        })
    ]
})
const Logger = (req, res, next) => {
        devLogger.debug(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
        prodLogger.info(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
        next()
}

module.exports = { Logger }