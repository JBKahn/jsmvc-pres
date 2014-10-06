/** @jsx React.DOM */

var app = app || {};

(function() {
    "use strict";

    var TodoApp = app.components.TodoApp;

    app.retrieveData = function() {
        return app.FIXTURES;
    };

    React.renderComponent(
        <TodoApp />,
        document.getElementById('app')
    );
})();
