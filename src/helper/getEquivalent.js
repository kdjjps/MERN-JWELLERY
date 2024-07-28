const getEquivalent = (diamondProperty, value) => {

    switch (diamondProperty) {

        case 'color':
            switch (value) {
                case 'D':
                    return 9
            
                case 'E':
                    return 8

                case 'F':
                    return 7
            
                case 'G':
                    return 6
                
                case 'H':
                    return 5
            
                case 'I':
                    return 4

                case 'J':
                    return 3
            
                case 'K':
                    return 2

                case 'L':
                    return 1
                
                case 'M':
                    return 0

                default:
                    return 0
            }
            break;

        case 'cut':
            switch (value) {
                case 'ID':
                    return 3
            
                case 'EX':
                    return 2

                case 'VG':
                    return 1
            
                case 'G':
                    return 0

                default:
                    return 0
            }
            break;

        case 'clarity':
            switch (value) {
                case 'FL':
                    return 9
            
                case 'IF':
                    return 8

                case 'VVS1':
                    return 7
            
                case 'VVS2':
                    return 6
                
                case 'VS1':
                    return 5
            
                case 'VS2':
                    return 4

                case 'SI1':
                    return 3
            
                case 'SI2':
                    return 2

                case 'SI3':
                    return 1
                
                case 'I1':
                    return 0

                default:
                    return 0
            }
            break;
        
        case 'polish':
            switch (value) {
                case 'EX':
                    return 3
            
                case 'VG':
                    return 2

                case 'G':
                    return 1
            
                case 'FR':
                    return 0
                    
                default:
                    return 0
            }
            break;

        case 'fluorescence':
            switch (value) {
                case 'VSTG' || 'VSL':
                    return 4
            
                case 'STG' || 'STR' || 'SL':
                    return 3

                case 'MED':
                    return 2
            
                case 'FAINT' || 'FNT':
                    return 1

                case 'NONE':
                    return 0
                    
                default:
                    return 0
            }
            break;

        case 'symmetry':
            switch (value) {
                case 'EX':
                    return 3
            
                case 'VG':
                    return 2

                case 'GD' || 'G':
                    return 1
            
                case 'FR' || 'FAIR':
                    return 0

                default:
                    return 0
            }
            break;
    }

}

const reverseGetEquivalent = (diamondProperty, value) => {

    switch (diamondProperty) {

        case 'color':
            switch (value) {
                case 10:
                    return 'D'

                case 9:
                    return 'D'
            
                case 8:
                    return 'E'

                case 7:
                    return 'F'
            
                case 6:
                    return 'G'
                
                case 5:
                    return 'H'
            
                case 4:
                    return 'I'

                case 3:
                    return 'J'
            
                case 2:
                    return 'K'
                
                case 1:
                    return 'L'
                
                case 0:
                    return 'M'
                
                default:
                    return 'M'
            }
            break;

        case 'cut':
            switch (value) {
                case 3:
                    return 'ID'
            
                case 2:
                    return 'EX'

                case 1:
                    return 'VG'
            
                case 0:
                    return 'G'

                default:
                    return 'G'
            }
            break;

        case 'clarity':
            switch (value) {

                case 10:
                    return 'FL'

                case 9:
                    return 'FL'
            
                case 8:
                    return 'IF'

                case 7:
                    return 'VSS1'
            
                case 6:
                    return 'VSS2'
                
                case 5:
                    return 'VS1'
            
                case 4:
                    return 'VS2'

                case 3:
                    return 'SI1'
            
                case 2:
                    return 'SI2'
                
                case 1:
                    return 'SI3'
                
                case 0:
                    return 'I1'
                
                default:
                    return 'I1'
            }
            break;
        
        case 'polish':
            switch (value) {
                case 3:
                    return 'EX'
            
                case 2:
                    return 'VG'

                case 1:
                    return 'G'
            
                case 0:
                    return 'FR'
                
                default:
                    return 'FR'
            }
            break;

        case 'fluorescence':
            switch (value) {
                case 4:
                    return 'VSTG'
            
                case 3:
                    return 'STG'

                case 2:
                    return 'MED'
            
                case 1:
                    return 'FNT'

                case 0:
                    return 'NONE'

                default:
                    return 'NONE'
            }
            break;

        case 'symmetry':
            switch (value) {
                case 4:
                    return 'EX'

                case 3:
                    return 'EX'
            
                case 2:
                    return 'VG'

                case 1:
                    return 'GD'
            
                case 0:
                    return 'FR'
                
                default:
                    return 'FR'
            }
            break;
    }

}


export {getEquivalent, reverseGetEquivalent}