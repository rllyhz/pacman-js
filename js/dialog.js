
const ACTIVE_DIALOG_ID = "dialog";
let _isDialogActive = false;

function _createDialog() {
    const dialogElem = document.createElement("dialog");
    dialogElem.id = ACTIVE_DIALOG_ID;
    dialogElem.title = "Dialog";
    dialogElem.setAttribute("open", "");

    const styles = {
        display: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        color: "pink",
    };

    for (let key in styles) {
        dialogElem.style[key] = styles[key];
    }

    const dialogContent = `
        <h3>Dialog</h3>
        <p>Content dialog here</p>
    `;

    dialogElem.innerHTML = dialogContent;

    return dialogElem;
}

async function showDialog() {
    const promise = new Promise((_, __) => {
        const bodyElem = document.querySelector("body");
        bodyElem.appendChild(_createDialog());
        isDialogActive = true;
        _();
    });
    
    return promise;
}

async function closeActiveDialog() {
    const promise = new Promise((_, __) => {
        document.querySelector("body").removeChild(
            document.querySelector(`#${ACTIVE_DIALOG_ID}`)
        );
        isDialogActive = false;
        _();
    });
    
    return promise;
}

function isDialogShowing() {
    return _isDialogActive;
}

async function showAlert(message) {
    const promise = new Promise((_, __) => {
        alert(message);
        _();
    });
    
    return promise;
}
