const LOCAL_KEY_SCORE = "LOCAL_KEY_SCORE";

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