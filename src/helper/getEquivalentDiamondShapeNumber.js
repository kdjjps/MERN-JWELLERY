const getEquivalentDiamondShapeNumber = (diamondShape) => {

    switch (diamondShape) {
        case 'round':
            return 0
            break;
        case 'radiant':
            return 1
            break;
        case 'princess':
            return 2
            break;
        case 'pear':
            return 3
            break;
        case 'oval':
            return 4
            break;
        case 'marquise':
            return 5
            break;
        case 'heart':
            return 6
            break;
        case 'emerald':
            return 7
            break;
        case 'cushion':
            return 8
            break;
        case 'asscher':
            return 9
            break;
        default:
            return 0
            break;
    }
}

export default getEquivalentDiamondShapeNumber