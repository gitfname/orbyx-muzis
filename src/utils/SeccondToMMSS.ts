
const toMMSS = (numSecs: number) => {
    let secNum = parseInt(numSecs + "", 10);
    let hours = Math.floor(secNum / 3600).toString().padStart(2, '0');
    let minutes = Math.floor((secNum - (Number(hours) * 3600)) / 60).toString().padStart(2, '0');;
    let seconds = secNum - (Number(hours) * 3600) - Number((Number(minutes) * 60).toString().padStart(2, '0'));
    return `${minutes}:${seconds}`;
}

export {
    toMMSS
}