const url = URL_PLACEHOLDER;

function foo() {
    let req = new XMLHttpRequest();
    req.open('GET', url , false);

    req.send(null);

    if (req.status == 200) {
        replaceContent(req.response);
    }
}

function replaceContent(content) {
    document.getElementById('content').innerHTML = content;
}