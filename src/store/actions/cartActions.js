// Section of plain action objects
export const addLooseDiamond = (payload) => {
  return { type: "ADD_LOOSE_DIAMOND", payload };
};

export const addCustomizedRing = (payload) => {
  return { type: "ADD_CUSTOMIZED_RING", payload };
};

export const addPresetRing = (payload) => {
  return { type: "ADD_PRESET_RING", payload };
};

export const addCustomizedNecklace = (payload) => {
  return { type: "ADD_CUSTOMIZED_NECKLACE", payload };
};

export const addPresetNecklace = (payload) => {
  return { type: "ADD_PRESET_NECKLACE", payload };
};

export const addCustomizedStud = (payload) => {
  return { type: "ADD_CUSTOMIZED_STUD", payload };
};

export const addPresetStud = (payload) => {
  return { type: "ADD_PRESET_STUD", payload };
};

export const addMensStud = (payload) => {
  return { type: "ADD_MENS_STUD", payload };
};

export const addMensRing = (payload) => {
  return { type: "ADD_MENS_RING", payload };
};

export const addMensKada = (payload) => {
  return { type: "ADD_MENS_KADA", payload };
};

export const addMensBracelet = (payload) => {
  return { type: "ADD_MENS_BRACELET", payload };
};

export const addChain = (payload) => {
  return { type: "ADD_CHAIN", payload };
};

export const addDiamondEarring = (payload) => {
  return { type: "ADD_DIAMOND_EARRING", payload };
};

export const addDiamondPendant = (payload) => {
  return { type: "ADD_DIAMOND_PENDANT", payload };
};

export const addAlphabetPendant = (payload) => {
  return { type: "ADD_ALPHABET_PENDANT", payload };
};

export const addFashionRing = (payload) => {
  return { type: "ADD_FASHION_RING", payload };
};

export const addNosePin = (payload) => {
  return { type: "ADD_NOSE_PIN", payload };
};

export const addLooseGemstone = (payload) => {
  return { type: "ADD_LOOSE_GEMSTONE", payload };
};

export const addCustomizedGemRing = (payload) => {
  return { type: "ADD_CUSTOMIZED_GEM_RING", payload };
};

export const addCustomizedGemPendant = (payload) => {
  return { type: "ADD_CUSTOMIZED_GEM_PENDANT", payload };
};

export const removeItem = (payload) => {
  return { type: "REMOVE_ITEM", payload };
};

export const clearCart = () => {
  return { type: "CLEAR" };
};

export const handleCheckout = () => {
  return { type: "CHECKOUT" };
};

export const onError = (error) => {
  return {
    type: "ON_ERROR",
    error,
  };
};