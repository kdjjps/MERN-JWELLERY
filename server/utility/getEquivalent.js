module.exports = function (diamondProperty, value){

    switch (diamondProperty) {

        case 'cut':
            switch (value) {
                case 'ID':
                    return 4
                    break;
                case 'EX':
                    return 3
                    break;
                case 'VG':
                    return 2
                    break;
                case 'GD':
                    return 1
                    break;
            }
            break;

        case 'clarity':
            switch (value) {
                case 'FL':
                    return 10
                    break;
                case 'IF':
                    return 9
                    break;
                case 'VVS1':
                    return 8
                    break;
                case 'VVS2':
                    return 7
                    break;
                case 'VS1':
                    return 6
                    break;
                case 'VS2':
                    return 5
                    break;
                case 'SI3':
                    return 4
                    break;
                case 'SI1':
                    return 3
                    break;
                case 'SI2':
                    return 2
                    break;
                case 'IL':
                    return 1
                    break; 
            }
            break;
        
        case 'polish':
            switch (value) {
                case 'EX':
                    return 4
                    break;
                case 'VG':
                    return 3
                    break;
                case 'G':
                    return 2
                    break;
                case 'FR':
                    return 1
                    break;
            }
            break;

        case 'fluorescence':
            switch (value) {
                case 'VSTG':
                case 'VSL':
                    return 5
                    break;
                case 'STG':
                case 'STR':
                case 'SL':
                    return 4
                    break;
                case 'MED':
                    return 3
                    break;
                case 'FAINT': 
                case 'FNT':
                    return 2
                    break;
                case 'NONE':
                case 'NON':
                    return 1
                    break;
            }
            break;

        case 'symmetry':
            switch (value) {
                case 'EX':
                    return 4
                    break;
                case 'VG':
                    return 3
                    break;
                case 'GD':
                case 'G':
                    return 2
                    break;
                case 'FR':
                case 'FAIR':
                    return 1
                    break;
            }
            break;

        case 'color':
            switch (value) {
                case 'O':
                case 'N':
                case 'M':
                    return 1
                    break;
                case 'L':
                    return 2
                    break;
                case 'K':
                    return 3
                    break;
                case 'J':
                    return 4
                    break;
                case 'I':
                    return 5
                    break;
                case 'H':
                    return 6
                    break;
                case 'G':
                    return 7
                    break;
                case 'F':
                    return 8
                    break;
                case 'E':
                    return 9
                    break;
                case 'D':
                    return 10
                    break;
            }
            break;
    }

}