// download
function download() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(download);
        }, 3000);
    });
}

// verify
function verify() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Verify File');
        }, 2000);
    });
}

// notify
function notify() {
    console.log('Download Complete');
}

download()
    .then((result) => {
        console.log(result);
        return verify();
    })
    .then((result) => {
        console.log(result);
        notify();
    })
    .catch((error) => {
        console.log(error);
    });
