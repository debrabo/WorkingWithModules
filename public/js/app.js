// IIFE == Immediately Invoked Function Expression
//
// (function() {
//
// }())
//
// When app.js is called en it's going to run this code and is not
// going to share any thing outside of it's scope.

(function () {
    function render() {
        var list = document.querySelector('#sessions');
        if (!list) return;
        list.innerHTML = sessionTemplate(data.listItems);
    };


    var data = {
        listItems: []
    };

    getSessions()
        .then((sessions) => {
            console.log('promises!')
            data.listItems = sessions;
            render();
        });
}());

