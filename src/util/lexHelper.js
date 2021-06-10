// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'ap-southeast-2'});

const lexruntime = new AWS.LexRuntime({apiVersion: '2016-11-28'});

const buildParams = (text, userId) => {
    return {
        botAlias: 'test', /* required */
        botName: 'ScheduleAppointment_enAU', /* required */
        inputText: text, /* required */
        userId: userId, /* required */
        activeContexts: [
            {
                name: 'STRING_VALUE', /* required */
                parameters: { /* required */
                    '<ParameterName>': 'STRING_VALUE',
                    /* '<ParameterName>': ... */
                },
                timeToLive: { /* required */
                    timeToLiveInSeconds: '10',
                    turnsToLive: '10'
                }
            },
            /* more items */
        ],
        requestAttributes: {
            '<String>': 'STRING_VALUE',
            /* '<String>': ... */
        },
        sessionAttributes: {
            '<String>': 'STRING_VALUE',
            /* '<String>': ... */
        }
    }
};

exports.postText = async (text, userId='some-userid') => {
    return await lexruntime.postText(buildParams(text, userId)).promise();
}


