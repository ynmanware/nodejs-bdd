const lexHelper = require('./lexHelper');

lexHelper.postText('appointment', 'user-1').then(function (data) {
    console.log(data);
    lexHelper.postText('dentist', 'user-1').then(function (data) {
        console.log(data);
        lexHelper.postText('today', 'user-1').then(function (data) {
            console.log(data);
            lexHelper.postText('afternoon', 'user-1').then(function (data) {
                console.log(data);
                lexHelper.postText('yes', 'user-1').then(function (data) {
                    console.log(data);
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }).catch(function (err) {
        console.log(err);
    });
}).catch(function (err) {
    console.log(err);
});


/*
{
  intentName: 'MakeAppointment_enAU',
  nluIntentConfidence: { score: 0.71 },
  alternativeIntents: [ { intentName: 'AMAZON.FallbackIntent', slots: {} } ],
  slots: { AppointmentType: null, Date: null, Time: null },
  sessionAttributes: { '<String>': 'STRING_VALUE' },
  message: 'What type of appointment would you like to schedule?',
  messageFormat: 'PlainText',
  dialogState: 'ElicitSlot',
  slotToElicit: 'AppointmentType',
  sessionId: '2021-04-13T04:08:13.781Z-ByVGXbwB',
  botVersion: '1',
  activeContexts: [
    {
      name: 'STRING_VALUE',
      timeToLive: [Object],
      parameters: [Object]
    }
  ]
}

 */