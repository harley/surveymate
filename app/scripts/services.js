/**
 * Created with JetBrains WebStorm.
 * User: dtt22
 * Date: 2/3/13
 * Time: 7:26 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

surveymateApp.factory('sampleSurvey', function() {
    var survey = {
        title: "Test",
        description: "Test description",
        questions: [
            {
                title: "question title 1",
                type: "multiple_choice",
                choices: [
                    { content: 'choice 1' },
                    { content: 'choice 2' }
                ]
            },
            {
                title: "question title 2",
                type: "checkbox",
                choices: [
                    { content: "q2 choice 1" },
                    { content: "q2 choice 2" }
                ]
            }
        ]
    }
    return survey;
})

surveymateApp.factory('questionTypes', function() {
    return ["multiple_choice", "checkbox"];
})
