export const getUTCDatetimeString = () => {
    var date = new Date();
    return `${date.getUTCMonth()}-${date.getUTCDay()}-${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
};