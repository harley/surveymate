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
        questions: [{
            title: "question title 1",
            body: "question body 1"
        }]
    }
    return survey;
})