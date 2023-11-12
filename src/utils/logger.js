const winston = require('winston');
const config = require('../config/config.js');
const NODE_ENV = config.node_env;

const customLevelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5,
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
            filename: './errors.log', 
            level: 'debug',// 'debug' para que registre a partir de este nivel
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
            filename: './errors.log', 
            level: 'info',
            format: winston.format.simple()
        })
    ]
})
const Logger = (req, res, next) => {
    if (NODE_ENV === "production") {
        prodLogger.info(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`);
        res.send({ message: "Prueba de Logger Production!" });
    } else if (NODE_ENV === "developer") {
        devLogger.debug(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`);
        res.send({ message: "Prueba de Logger Desarrollo!" });
    } else {
        res.send({ message: "Logger no configurado" });
    }
    next();
}

module.exports = { Logger };
