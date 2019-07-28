const list = document.getElementById("list");
const removelast = document.getElementById("removelast");

const getUsers = (onSuccess) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:1234/users', true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            onSuccess(xhr.response);
        } else {
            alert('Cannot retrieve users!');
        }
    };
    xhr.send();
}

const populateList = (response) => {
    if (response && response.length) {
        response.sort().forEach(name => {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(name);
            node.appendChild(textnode);
            list.appendChild(node);
        });
    } else {
        alert('Collection of retrieved users is empty!');
    }
};

const addClickRemoveHandler = () => {
    removelast.addEventListener('click', () => {
        if (list.childNodes.length) {
            list.removeChild(list.childNodes[list.childNodes.length - 1]);
        } else {
            alert('No users left to remove!');
        }
    }, false);
};

if (list && removelast) {
    getUsers(populateList);
    addClickRemoveHandler();
} else {
    alert('Required html elements not found!');
}