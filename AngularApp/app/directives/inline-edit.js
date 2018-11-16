var app = angular.module('app');

app.directive("clickToEdit", function () {
    var editorTemplate = '' +
        '<div class="click-to-edit">' +
            '<div ng-hide="view.editorEnabled">' +
                '<a class = "dir-btn-edit" ng-click="enableEditor()">{{value}}</a>' +
            '</div>' +
            '<div ng-show="view.editorEnabled">' +
                '<input type="text" ng-model="view.editableValue">' +
                '<a class="dir-btn-save" href="#" ng-click="save()">Save</a>' +
                ' or ' +
                '<a class="dir-btn-cancel" ng-click="disableEditor()">cancel</a>' +
            '</div>' +
        '</div>';

    return {
        restrict: "A",
        replace: true,
        template: editorTemplate,
        scope: {
            value: "=clickToEdit",
        },
        link: function (scope, element, attrs) {
            scope.view = {
                editableValue: scope.value,
                editorEnabled: false
            };
            
            scope.enableEditor = function () {
                scope.view.editorEnabled = true;
                scope.view.editableValue = scope.value;
            };

            scope.disableEditor = function () {
                scope.view.editorEnabled = false;
            };

            scope.save = function () {
                scope.value = scope.view.editableValue;
                scope.disableEditor();
            };

        }
    };
});
