const LOCAL_KEY_SCORE = "LOCAL_KEY_SCORE";
const LOCAL_KEY_WIN_TIMES = "LOCAL_KEY_WIN_TIMES";

async function saveLatestScore(newScore = 0) {
    const promise = new Promise((resolve, reject) => {
        if (!localStorage) return reject("LocalStorage not supported!");

        localStorage.setItem(LOCAL_KEY_SCORE, newScore);
        resolve();
    });
    
    return promise;
}

async function getLatestScore(defaultScore = 0) {
    const promise = new Promise((resolve, reject) => {
        if (!localStorage) return reject("LocalStorage not supported!");

        let score = localStorage.getItem(LOCAL_KEY_SCORE);
        
        if (Number.parseInt(score)) resolve(score);
        else resolve(defaultScore);
    });

    return promise;
}

async function saveWinTimes(newWinTimes = 0) {
    const promise = new Promise((resolve, reject) => {
        if (!localStorage) return reject("LocalStorage not supported!");

        localStorage.setItem(LOCAL_KEY_WIN_TIMES, newWinTimes);
        resolve();
    });
    
    return promise;
}

async function getLastWinTimes(defaultValue = 0) {
    const promise = new Promise((resolve, reject) => {
        if (!localStorage) return reject("LocalStorage not supported!");

        let winTimes = localStorage.getItem(LOCAL_KEY_WIN_TIMES);
        
        if (Number.parseInt(winTimes)) resolve(winTimes);
        else resolve(defaultValue);
    });

    return promise;
}
