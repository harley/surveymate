'use strict';

surveymateApp.directive('sQuestion', function () {
    return {
        restrict:'E',
        templateUrl:'views/surveys/partials/_question.html'
    }
});

// used to bind choice content in TextResponse question type
// need to fix bug of choices' content disappearing when changing question type
surveymateApp.directive('contenteditable', function() {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngModel', // get a hold of NgModelController
        link: function(scope, element, attrs, ngModel) {
            if(!ngModel) return; // do nothing if no ng-model

            // Specify how UI should be updated
            ngModel.$render = function() {
                element.html(ngModel.$viewValue || '');
            };

            // Listen for change events to enable binding
            element.bind('blur keyup change', function() {
                scope.$apply(read);
            });
            read(); // initialize

            // Write data to the model
            function read() {
                ngModel.$setViewValue(element.text());
            }
        }
    }
});