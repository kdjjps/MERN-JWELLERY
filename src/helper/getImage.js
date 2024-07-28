const getImage = (shape) => {
  switch (shape) {
    case "heart":
      return {
        shape: "Heart",
        imgURL:
          "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/heart.jpg",
      };
      break;
    case "radiant":
      return {
        shape: "Radiant",
        imgURL:
          "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/radiant.jpg",
      };
      break;
    case "emerald":
      return {
        shape: "Emerald",
        imgURL:
          "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/emerald.jpg",
      };
      break;
    case "round":
      return {
        shape: "Round",
        imgURL:
          "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg",
      };
      break;
    case "pear":
      return {
        shape: "Pear",
        imgURL:
          "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/pear.jpg",
      };
      break;
    case "cushion":
      return {
        shape: "Cushion",
        imgURL:
          "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/cushion.jpg",
      };
      break;
    case "asscher":
      return {
        shape: "Asscher",
        imgURL:
          "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/asscher.jpg",
      };
      break;
    case "princess":
      return {
        shape: "Princess",
        imgURL:
          "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/princess.jpg",
      };
      break;
    case "oval":
      return {
        shape: "Oval",
        imgURL:
          "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/oval.jpg",
      };
      break;
    case "marquise":
      return {
        shape: "Marquise",
        imgURL:
          "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/marquise.jpg",
      };
      break;
  }
};

export default getImage;
