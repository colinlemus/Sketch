export function log(message) {
    console.log(message);
}

export function getLoginInformation() {
    fetch('/api/login/' + '1', (data) => {
        log(data);
    });
}