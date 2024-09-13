
const ACTIVE_DIALOG_ID = 1234;

function createDialog() {
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

function showDialog() {
    const bodyElem = document.querySelector("body");
    bodyElem.appendChild(createDialog());
}

function deleteActiveDialog() {
    document.querySelector("body").removeChild(
        document.querySelector(`#${ACTIVE_DIALOG_ID}`)
    );
}
