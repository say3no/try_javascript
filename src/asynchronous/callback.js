function greeting(name) {
    alert('Hello ' + name);
}

function processuserInput(callback) {
    var name = prompt('Please entr your name.');
    callback(name);
}

processuserInput(greeting);