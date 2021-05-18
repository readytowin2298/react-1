function addCommas(num) {
    const numString = `${num}`;
    const len = numString.length;
    let finished = ""
    for(let i=0; i<len; i++){
        finished += numString[i]
        if( i !== (len - 1) &&  (len - 1 - i)%3 === 0){
            finished += ","
        }
    }
    return finished;
}

module.exports = addCommas;

// 01234567