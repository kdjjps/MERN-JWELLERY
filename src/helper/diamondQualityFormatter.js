const diamondQualityFormatter = (quality) => {

    switch (quality) {
        case 'IJSI':
            return 'IJ-SI'
            break;
    
        case 'GHVS':
            return 'GH-VS'
            break;

        default:
            return 'IJ-SI'
            break;
    }

}

export default diamondQualityFormatter