'use strict';

// questionEditor directive:
// - set editor to be invisible
// - click will show editor
//
surveymateApp.directive('questionEditable', function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            console.log(scope);
            var question = attrs.questionEditable;
            if(typeof scope.editing === 'undefined')
                scope.editing = {};
            scope.editing[question] = true;
        }
    }
});

surveymateApp.directive('sQuestion', function(){
    return {
        restrict: 'E',
        templateUrl: 'views/surveys/partials/_question.html'
    }
})
