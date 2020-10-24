module.exports = function reverse (n) {
    if (n < 0) {
        n = n * -1;
        let str = String(n).split('').reverse().join('');
    return (+str);
    }
    else {
        let str = String(n).split('').reverse().join('');
    return (+str);
    }
};
