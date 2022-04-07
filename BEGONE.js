const remove_popup = function (mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type == "childList") {
            let popup = document.getElementById("dashboard_header_container");
            if (popup.childElementCount > 1) {
                popup.removeChild(popup.lastChild);
            }
        }
    }
}

const webPage = document.querySelector('body');
const config = {attributes: true, childList: true, subtree: true};
const observer = new MutationObserver(remove_popup);
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') {
        observer.observe(webPage, config);
    }
});