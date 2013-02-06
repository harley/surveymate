'use strict';

surveymateApp.controller('SurveysCtrl', function($scope, sampleSurvey) {
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

    $scope.addChoiceColumn = function(question) {
        question.choice_columns.push({content: question.choice_columns.length + 1 })
    }

    $scope.removeQuestion = function(survey, index) {
        survey.questions.splice(index, 1);
    }

    $scope.cloneQuestion = function(survey, question, index) {
        // dup question
        var dup = _.cloneDeep(question);
        // insert dup to after question
        console.log('questions: ', survey.questions)
        survey.questions.splice(index, 0, dup);
    }
});

surveymateApp.controller('QuestionsCtrl', function($scope, questionTypes) {
    $scope.questionTypes = questionTypes;

    $scope.isPreviewingQuestion = function(question) {
        return true;
    }
    $scope.isEditingQuestion = function(question) {
        return true;
    }

    $scope.getQuestionTemplate = function(question) {
        return "views/surveys/partials/_" + question.type + ".html";
    }
});