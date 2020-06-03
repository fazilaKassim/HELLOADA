const winston = require('winston');

function getLogger(module) {
    const path = module.filename.split('/').slice(-2).join('/'); //using filename in log statements
	
    return new winston.createLogger({
        transports : [
            new winston.transports.Console({
                colorize:   true,
                level:      'debug',
                label:      path
            })
        ]
    });
}

module.exports = getLogger;