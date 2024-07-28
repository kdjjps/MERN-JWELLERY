const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

const time = () => {
  var t = new Date();
  return t.getTime();
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.AMOUNT * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

const storage = window.localStorage.getItem("cart")
  ? JSON.parse(window.localStorage.getItem("cart"))
  : [];
  
const initialState = {
  cartItems: storage,
  ...sumItems(storage)
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.cartItems.find(
          (item) => item.PACKETID === action.payload.PACKETID
        )
      ) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        alert(
          "This diamond is already in the cart. <br/> Please select a different diamond."
        );
      }
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_LOOSE_DIAMOND":
      if (
        !state.cartItems.find(
          (item) => item.diamondId === action.payload.diamondId
        )
      ) {
        state.cartItems.push({
          itemId: state.cartItems.length + 1,
          itemType: "loose-diamond",
          diamondId: action.payload.diamondId,
          diamondShape: action.payload.diamondShape,
          carat: action.payload.carat,
          lab: action.payload.lab,
          color: action.payload.color,
          clarity: action.payload.clarity,
          cut: action.payload.cut,
          culet: action.payload.culet,
          symmetry: action.payload.symmetry,
          fluorescence: action.payload.fluorescence,
          measurement: action.payload.measurement,
          polish: action.payload.polish,
          girdlePercentage: action.payload.girdlePercentage,
          ratio: action.payload.ratio,
          table: action.payload.table,
          depth: action.payload.depth,
          black: action.payload.black,
          white: action.payload.white,
          quantity: 1,
        });

      } else {
        alert(
          "This diamond is already in the cart. \n Please select a different diamond."
        );
      }
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_CUSTOMIZED_RING":
      if (
        !state.cartItems.find(
          (item) => item.diamondId === action.payload.diamondId
        )
      ) {
        state.cartItems.push({
          itemId: state.cartItems.length + 1,
          itemType: "custom-ring",
          diamondId: action.payload.diamondId,
          diamondShape: action.payload.diamondShape,
          carat: action.payload.carat,
          lab: action.payload.lab,
          color: action.payload.color,
          clarity: action.payload.clarity,
          cut: action.payload.cut,
          culet: action.payload.culet,
          symmetry: action.payload.symmetry,
          fluorescence: action.payload.fluorescence,
          measurement: action.payload.measurement,
          polish: action.payload.polish,
          girdlePercentage: action.payload.girdlePercentage,
          ratio: action.payload.ratio,
          table: action.payload.table,
          depth: action.payload.depth,
          black: action.payload.black,
          white: action.payload.white,
          ringId: action.payload.ringId,
          metal: action.payload.metal,
          weightIndex: action.payload.ringSize,
          ringSizeStandard: action.payload.ringSizeStandard,
          quantity: 1,
        });
      } else {
        alert(
          "This diamond is already in the cart. \n Please select a different diamond."
        );
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_PRESET_RING":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "preset-ring",
        ringId: action.payload.ringId,
        metalCode: action.payload.metalCode,
        metal: action.payload.metal,
        weightIndex: action.payload.weightIndex,
        presetDiamondCarat: action.payload.carat,
        presetDiamondQuality: action.payload.quality,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_CUSTOMIZED_NECKLACE":
      if (
        !state.cartItems.find(
          (item) => item.diamondId === action.payload.diamondId
        )
      ) {
        state.cartItems.push({
          itemId: state.cartItems.length + 1,
          itemType: "custom-necklace",
          diamondId: action.payload.diamondId,
          diamondShape: action.payload.diamondShape,
          carat: action.payload.carat,
          lab: action.payload.lab,
          color: action.payload.color,
          clarity: action.payload.clarity,
          cut: action.payload.cut,
          culet: action.payload.culet,
          symmetry: action.payload.symmetry,
          fluorescence: action.payload.fluorescence,
          measurement: action.payload.measurement,
          polish: action.payload.polish,
          girdlePercentage: action.payload.girdlePercentage,
          ratio: action.payload.ratio,
          table: action.payload.table,
          depth: action.payload.depth,
          black: action.payload.black,
          white: action.payload.white,
          necklaceId: action.payload.necklaceId,
          metal: action.payload.metal,
          weightIndex: action.payload.necklaceLength,
          quantity: 1,
        });
      } else {
        alert(
          "This diamond is already in the cart. \n Please select a different diamond."
        );
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_PRESET_NECKLACE":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "preset-necklace",
        necklaceId: action.payload.necklaceId,
        metalCode: action.payload.metalCode,
        metal: action.payload.metal,
        length: action.payload.length,
        presetDiamondCarat: action.payload.carat,
        presetDiamondQuality: action.payload.quality,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_CUSTOMIZED_STUD":
      if (
        !state.cartItems.find(
          (item) =>
            item.diamondId === action.payload.firstDiamondId &&
            item.diamondId === action.payload.secondDiamondId
        )
      ) {
        state.cartItems.push({
          itemId: state.cartItems.length + 1,
          itemType: "custom-stud",
          studId: action.payload.studId,
          firstDiamondId: action.payload.firstDiamondId,
          secondDiamondId: action.payload.secondDiamondId,
          metal: action.payload.metal,
          backing: action.payload.backing,
          diamondShape: action.payload.shape,
          firstDiamondCarat: action.payload.firstDiamondCarat,
          firstDiamondLab: action.payload.firstDiamondLab,
          firstDiamondColor: action.payload.firstDiamondColor,
          firstDiamondClarity: action.payload.firstDiamondClarity,
          firstDiamondCut: action.payload.firstDiamondCut,
          firstDiamondCulet: action.payload.firstDiamondCulet,
          firstDiamondSymmetry: action.payload.firstDiamondSymmetry,
          firstDiamondFluorescence: action.payload.firstDiamondFluorescence,
          firstDiamondMeasurement: action.payload.firstDiamondMeasurement,
          firstDiamondPolish: action.payload.firstDiamondPolish,
          firstDiamondGirdlePercentage: action.payload.firstDiamondGirdlePercentage,
          firstDiamondRatio: action.payload.firstDiamondRatio,
          firstDiamondTable: action.payload.firstDiamondTable,
          firstDiamondDepth: action.payload.firstDiamondDepth,
          firstDiamondBlack: action.payload.firstDiamondBlack,
          firstDiamondWhite: action.payload.firstDiamondWhite,
          secondDiamondCarat: action.payload.secondDiamondCarat,
          secondDiamondLab: action.payload.secondDiamondLab,
          secondDiamondColor: action.payload.secondDiamondColor,
          secondDiamondClarity: action.payload.secondDiamondClarity,
          secondDiamondCut: action.payload.secondDiamondCut,
          secondDiamondCulet: action.payload.secondDiamondCulet,
          secondDiamondSymmetry: action.payload.secondDiamondSymmetry,
          secondDiamondFluorescence: action.payload.secondDiamondFluorescence,
          secondDiamondMeasurement: action.payload.secondDiamondMeasurement,
          secondDiamondPolish: action.payload.secondDiamondPolish,
          secondDiamondGirdlePercentage: action.payload.secondDiamondGirdlePercentage,
          secondDiamondRatio: action.payload.secondDiamondRatio,
          secondDiamondTable: action.payload.secondDiamondTable,
          secondDiamondDepth: action.payload.secondDiamondDepth,
          secondDiamondBlack: action.payload.secondDiamondBlack,
          secondDiamondWhite: action.payload.secondDiamondWhite,
          quantity: 1,
        });
      } else {
        alert(
          "This diamond is already in the cart. \n Please select a different diamond."
        );
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_PRESET_STUD":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "preset-stud",
        studId: action.payload.studId,
        metalCode: action.payload.metalCode,
        metal: action.payload.metal,
        presetDiamondCarat: action.payload.carat,
        presetDiamondQuality: action.payload.quality,
        studQuantity: action.payload.quantity,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_MENS_STUD":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "mens-stud",
        studId: action.payload.studId,
        metalCode: action.payload.metalCode,
        metal: action.payload.metal,
        presetDiamondCarat: action.payload.carat,
        presetDiamondQuality: action.payload.quality,
        studQuantity: action.payload.quantity,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_MENS_RING":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "mens-ring",
        ringId: action.payload.ringId,
        presetDiamondCarat: action.payload.carat,
        presetDiamondQuality: action.payload.quality,
        quantity: 1,
        weightIndex: action.payload.weightIndex,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_MENS_KADA":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "mens-kada",
        kadaId: action.payload.kadaId,
        weightIndex: action.payload.weightIndex,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_CHAIN":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "gold-chain",
        chainId: action.payload.chainId,
        weightIndex: action.payload.weightIndex,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_MENS_BRACELET":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "mens-bracelet",
        braceletId: action.payload.braceletId,
        weightIndex: action.payload.weightIndex,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_DIAMOND_EARRING":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "diamond-earring",
        earringId: action.payload.earringId,
        metal: action.payload.metal,
        weight: action.payload.weight,
        diamondQuality: action.payload.diamondQuality,
        smallDiamondPrice: action.payload.smallDiamondPrice,
        solitaireDiamondPrice: action.payload.solitaireDiamondPrice,
        solitaireDiamondQuality: action.payload.solitaireDiamondQuality,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_DIAMOND_PENDANT":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "diamond-pendant",
        pendantId: action.payload.pendantId,
        metal: action.payload.metal,
        weight: action.payload.weight,
        diamondQuality: action.payload.diamondQuality,
        smallDiamondPrice: action.payload.smallDiamondPrice,
        solitaireDiamondPrice: action.payload.solitaireDiamondPrice,
        solitaireDiamondQuality: action.payload.solitaireDiamondQuality,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_ALPHABET_PENDANT":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "alphabet-pendant",
        pendantId: action.payload.pendantId,
        metal: action.payload.metal,
        weight: action.payload.weight,
        smallDiamondPrice: action.payload.smallDiamondPrice,
        diamondQuality: action.payload.diamondQuality,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_FASHION_RING":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "fashion-ring",
        ringId: action.payload.ringId,
        metal: action.payload.metal,
        weightIndex: action.payload.weightIndex,
        ringSizeStandard: action.payload.ringSizeStandard,
        diamondQuality: action.payload.diamondQuality,
        smallDiamondPrice: action.payload.smallDiamondPrice,
        solitaireDiamondPrice: action.payload.solitaireDiamondPrice,
        solitaireDiamondQuality: action.payload.solitaireDiamondQuality,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_NOSE_PIN":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "nose-pin",
        pinId: action.payload.pinId,
        weight: action.payload.weight,
        metal: action.payload.metal,
        smallDiamondPrice: action.payload.smallDiamondPrice,
        diamondQuality: action.payload.diamondQuality,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_LOOSE_GEMSTONE":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "loose-gemstone",
        gemstoneId: action.payload.gemstoneId,
        weightIndex: action.payload.weightIndex,
        certificateIndex: action.payload.certificationIndex,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_CUSTOMIZED_GEM_RING":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "gem-ring",
        gemstoneId: action.payload.gemId,
        gemstoneWeight: action.payload.gemstoneWeight,
        gemstoneCertification: action.payload.gemstoneCertification,
        ringId: action.payload.ringId,
        ringMetal: action.payload.ringMetal,
        ringSizeStandard: action.payload.ringSizeStandard,
        ringSize: action.payload.ringSize,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "ADD_CUSTOMIZED_GEM_PENDANT":
      state.cartItems.push({
        itemId: state.cartItems.length + 1,
        itemType: "gem-pendant",
        gemstoneId: action.payload.gemId,
        gemstoneWeight: action.payload.gemstoneWeight,
        gemstoneCertification: action.payload.gemstoneCertification,
        pendantId: action.payload.pendantId,
        pendantMetal: action.payload.pendantMetal,
        quantity: 1,
      });
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.itemId !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.itemId !== action.payload.id),
        ],
      };
     
    case "INCREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "DECREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
     
    case "CHECKOUT":
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };
     
    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([]),
      };
     
    default:
      return state;
  }
};

export default cartReducer;
