'use strict';

surveymateApp.controller('SurveysCtrl', function($scope, sampleSurvey) {
    $scope.works = "it works baby";
    $scope.survey = sampleSurvey;

    $scope.startEditing = function(question) {
        question.isEditing = true;
    }

    $scope.stopEditing = function(question) {
        question.isEditing = false;
    }

    $scope.addChoice = function(question) {
        question.choices.push({content: ''});
    }

    $scope.removeChoice = function(question, index) {
        question.choices.splice(index, 1);
    }
});
