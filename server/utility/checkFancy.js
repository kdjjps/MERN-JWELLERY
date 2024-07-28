function checkFancyStatusForKumar(color){
    switch (color) {
        case 'D':
            return false
            break;
        case 'E':
            return false
            break;
        case 'F':
            return false
            break;
        case 'G':
            return false
            break;
        case 'H':
            return false
            break;
        case 'I':
            return false
            break;
        case 'J':
            return false
            break;
        case 'K':
            return false
            break;
        case 'L':
            return false
            break;
        case 'M':
            return false
            break;
        case 'N':
            return false
            break;
        case 'O':
            return false
            break;
        default:
            return true
            break;
    }
}


function checkFancyStatusForParishi(color){
    switch (color) {
        case null:
            return false
            break;
        default:
            return true
            break;
    }
}


module.exports = {checkFancyStatusForKumar, checkFancyStatusForParishi}