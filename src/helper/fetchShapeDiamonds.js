const fetchShapeDiamonds = (diamondsArray, diamondShape) => {
    
    switch(diamondShape) {
      case "round":
        return diamondsArray.filter((item,index)=> item.diamondShape === 'round')
        break;
      case "emerald":
        return diamondsArray.filter((item,index)=> item.diamondShape === 'emerald')
        break;
      case "pear":
        return diamondsArray.filter((item,index)=> item.diamondShape === 'pear')
        break;
      case "cushion":
        return diamondsArray.filter((item,index)=> item.diamondShape === 'cushion')
        break;
      case "marquise":
        return diamondsArray.filter((item,index)=> item.diamondShape === 'marquise')
        break;
      case "heart":
        return diamondsArray.filter((item,index)=> item.diamondShape === 'heart')
        break;
      case "square-emerald":
        return diamondsArray.filter((item,index)=> item.diamondShape === 'square-emerald')
        break;
      case "radiant":
        return diamondsArray.filter((item,index)=> item.diamondShape === 'radiant')
        break;
      case "princess":
        return diamondsArray.filter((item,index)=> item.diamondShape === 'princess')
        break;
      case "oval":
        return diamondsArray.filter((item,index)=> item.diamondShape === 'oval')
        break;
      case null || undefined:
        return diamondsArray
        break;
      default:
        return diamondsArray
        break;
      }

}

export default fetchShapeDiamonds