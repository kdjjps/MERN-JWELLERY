const fetchShapeDiamonds = (diamondsArray, diamondShape) => {

    switch(diamondShape) {
      case "round":
        return diamondsArray.filter((item,index)=> item.shape === 'RD')
        break;
      case "emerald":
        return diamondsArray.filter((item,index)=> item.shape === 'EM')
        break;
      case "pear":
        return diamondsArray.filter((item,index)=> item.shape === 'PS')
        break;
      case "cushion":
        return diamondsArray.filter((item,index)=> item.shape === 'CMB')
        break;
      case "marquise":
        return diamondsArray.filter((item,index)=> item.shape === 'MQ')
        break;
      case "heart":
        return diamondsArray.filter((item,index)=> item.shape === 'HT')
        break;
      case "square-emerald":
        return diamondsArray.filter((item,index)=> item.shape === 'SE')
        break;
      case "radiant":
        return diamondsArray.filter((item,index)=> item.shape === 'LR')
        break;
      case "princess":
        return diamondsArray.filter((item,index)=> item.shape === 'PR')
        break;
      case "oval":
        return diamondsArray.filter((item,index)=> item.shape === 'OV')
        break;
      case null || undefined:
        return diamondsArray
        break;
      default:
        return diamondsArray
        break;
      }
}

module.exports = fetchShapeDiamonds