/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

const humanReadable = (seconds) => {
    let sec = seconds%60;
    let min = Math.floor(seconds/60%60);
    let hour = Math.floor(seconds/60/60);

    if (hour < 10) hour = `0${hour}`;
    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;

    return `${hour}:${min}:${sec}`;
};
console.log(humanReadable(3600));