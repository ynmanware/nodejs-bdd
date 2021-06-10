@appointment
Feature: balance
  Scenario Outline:  Customer is able to check balance
    When Customer says <utterance-1>
    Then Bot replies <response-1>
    When Customer says <utterance-2>
    Then Bot replies <response-2>
    When Customer says <utterance-3>
    Then Bot replies <response-3>
    When Customer says <utterance-4>
    Then Bot replies <response-4>
    When Customer says <utterance-5>
    Then Bot replies <response-5>
    Examples:
      | utterance-1 | response-1                                                                                                                                                                  | utterance-2 | response-2                                                                                                                              | utterance-3 | response-3                                                                                                                                           | utterance-4 | response-4                                                                                                                                                        | utterance-5 | response-5                                                                                                   |
      | appointment | { "intentName": "MakeAppointment_enAU", "message": "What type of appointment would you like to schedule?", "dialogState": "ElicitSlot", "slotToElicit": "AppointmentType" } | dentist     | {"intentName":"MakeAppointment_enAU","message":"When should I schedule your dentist?","dialogState":"ElicitSlot","slotToElicit":"Date"} | today       | {"intentName":"MakeAppointment_enAU","message":"At what time on 2021-04-13?","dialogState":"ElicitSlot","slotToElicit":"Time"} | afternoon   | {"intentName":"MakeAppointment_enAU","message":"AF is available, should I go ahead and book your appointment?","dialogState":"ConfirmIntent","slotToElicit":null} | yes         | {"intentName":"MakeAppointment_enAU","message":null,"dialogState":"ReadyForFulfillment","slotToElicit":null} |
      | appointment | { "intentName": "MakeAppointment_enAU", "message": "What type of appointment would you like to schedule?", "dialogState": "ElicitSlot", "slotToElicit": "AppointmentType" } | dentist     | {"intentName":"MakeAppointment_enAU","message":"When should I schedule your dentist?","dialogState":"ElicitSlot","slotToElicit":"Date"} | today       | {"intentName":"MakeAppointment_enAU","message":"At what time on 2021-04-13?","dialogState":"ElicitSlot","slotToElicit":"Time"} | afternoon   | {"intentName":"MakeAppointment_enAU","message":"AF is available, should I go ahead and book your appointment?","dialogState":"ConfirmIntent","slotToElicit":null} | yes         | {"intentName":"MakeAppointment_enAU","message":null,"dialogState":"ReadyForFulfillment","slotToElicit":null} |
