const log4j = require('log4js');

log4j.configure({
    appenders: {
        'fc-bdd': {
            type: 'stdout', //stdout -> for console log || file -> for Appender log
            maxLogSize: 10485760,
            backups: 3,
            compress: true,
            layout: {
                type: 'pattern',
                pattern: '%d %p [ %c ] [%h] %m'
            }
        }
    },
    categories: {default: {appenders: ['fc-bdd'], level: 'ALL'}}
});

const log = log4j.getLogger('fc-bdd');

exports.log = log;