const metalSizeFormatter = (size) => {
    switch (size) {
        case undefined:
        case null:
        case "":
            return '-'
            break;
        default:
            return size
            break;
    }
}

export default metalSizeFormatter