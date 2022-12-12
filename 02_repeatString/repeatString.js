const repeatString = function(str, times) {
    let repeated = ""
    if (times < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < times; i++) {
            repeated += str
        }
    }
    return repeated;
}

//repeatString('hey',3)

// Do not edit below this line
module.exports = repeatString;
