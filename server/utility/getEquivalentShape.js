module.exports = function getEquivalentShape(shapeCode){
    switch (shapeCode) {
        case 'RD':
        case 'ROUND':
            return 'round'
            break;
        case 'EM':
        case 'EMERALD':
            return 'emerald'
            break;
        case 'PS':
        case 'PE':
        case 'PEAR':
            return 'pear'
            break;
        case 'CMB':
        case 'CU':
        case 'CUSHION':
            return 'cushion'
            break;
        case 'MQ':
        case 'MARQUISE':
            return 'marquise'
            break;
        case 'HT':
        case 'HE':
        case 'HEART':
            return 'heart'
            break;
        case 'SE':
        case 'SQUARE EMERALD':
            return 'asscher'
            break;
        case 'LR':
        case 'RADIANT':
            return 'radiant'
            break;
        case 'PR':
        case 'PRINCESS':
            return 'princess'
            break;
        case 'OV':
        case 'OVAL':
            return 'oval'
            break;
    }
}