import getSessions from "./sessionRepository.js"; // is default so you can name it for example 'john'
import {sessionTemplate, errorMessage} from "./template.js";
// import * as template from "./template.js";

function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = sessionTemplate(data.listItems);
    // list.innerHTML = template.sessionTemplate(data.listItems);
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

