const express = require("express");
const router = express.Router();
const PurchasedLooseDiamond = require("../models/purchasedLooseDiamond");
const PurchasedLooseGemstone = require("../models/purchasedLooseGemstone");
const PurchasedFashionJewelry = require("../models/purchasedFashionJewelry");
const PurchasedMensJewelry = require("../models/purchasedMensJewelry");
const PurchasedPresetJewelry = require("../models/purchasedPresetJewelry");
const PurchasedCustomJewelry = require("../models/purchasedCustomJewelry");

router.post("/save-purchase", async (req, res) => {
  try {
    console.log("Products to be saved: ", req.body);

    let cartLength = req.body.cartItems.length;

    for (var i = 0; i < cartLength; i++) {
      let cartItemType = req.body.cartItems[i].itemType;

      switch (cartItemType) {
        case "loose-diamond":
          PurchasedLooseDiamond.create({
            diamondStockNumber: req.body.cartItems[i].diamondId,
            vendor: req.body.cartItems[i].diamondId.split("-")[1],
            orderId: req.body.orderId,
            carat: req.body.cartItems[i].carat,
            lab: req.body.cartItems[i].lab,
            shape: req.body.cartItems[i].diamondShape,
            color: req.body.cartItems[i].color,
            clarity: req.body.cartItems[i].clarity,
            cut: req.body.cartItems[i].cut,
            culet: req.body.cartItems[i].culet,
            symmetry: req.body.cartItems[i].symmetry,
            fluorescence: req.body.cartItems[i].fluorescence,
            measurement: req.body.cartItems[i].measurement,
            polish: req.body.cartItems[i].polish,
            girdlePercentage: req.body.cartItems[i].girdlePercentage,
            ratio: req.body.cartItems[i].ratio,
            table: req.body.cartItems[i].table,
            depth: req.body.cartItems[i].depth,
            black: req.body.cartItems[i].black,
            white: req.body.cartItems[i].white,
            diamondPrice: req.body.cartItemsPriceArray[i],
          });
          break;

        case "loose-gemstone":
          PurchasedLooseGemstone.create({
            gemStockNumber: req.body.cartItems[i].gemstoneId,
            gemWeightIndex: req.body.cartItems[i].weightIndex,
            gemCertificationIndex: req.body.cartItems[i].certificateIndex,
            orderId: req.body.orderId,
            gemstonePrice: req.body.cartItemsPriceArray[i],
          });
          break;

        case "fashion-ring":
          PurchasedFashionJewelry.create({
            jewelryType: "fashion-ring",
            orderId: req.body.orderId,
            jewelryStockNumber: req.body.cartItems[i].ringId,
            jewelrySizeIndex: req.body.cartItems[i].weightIndex,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            smallDiamondQuality: req.body.cartItems[i].diamondQuality,
            smallDiamondPrice: req.body.cartItems[i].smallDiamondPrice,
            solitaireDiamondQuality:
              req.body.cartItems[i].solitaireDiamondQuality,
            solitaireDiamondPrice: req.body.cartItems[i].solitaireDiamondPrice,
          });

          break;

        case "nose-pin":
          PurchasedFashionJewelry.create({
            jewelryType: "nose-pin",
            orderId: req.body.orderId,
            jewelryStockNumber: req.body.cartItems[i].pinId,
            jewelrySizeIndex: req.body.cartItems[i].weight,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            smallDiamondQuality: req.body.cartItems[i].diamondQuality,
            smallDiamondPrice: req.body.cartItems[i].smallDiamondPrice,
          });

          break;

        case "alphabet-pendant":
          PurchasedFashionJewelry.create({
            jewelryType: "alphabet-pendant",
            orderId: req.body.orderId,
            jewelryStockNumber: req.body.cartItems[i].pendantId,
            jewelrySizeIndex: req.body.cartItems[i].weight,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            smallDiamondQuality: req.body.cartItems[i].diamondQuality,
            smallDiamondPrice: req.body.cartItems[i].smallDiamondPrice,
          });

          break;

        case "diamond-pendant":
          PurchasedFashionJewelry.create({
            jewelryType: "diamond-pendant",
            orderId: req.body.orderId,
            jewelryStockNumber: req.body.cartItems[i].pendantId,
            jewelrySizeIndex: req.body.cartItems[i].weight,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            smallDiamondQuality: req.body.cartItems[i].diamondQuality,
            smallDiamondPrice: req.body.cartItems[i].smallDiamondPrice,
            solitaireDiamondQuality:
              req.body.cartItems[i].solitaireDiamondQuality,
            solitaireDiamondPrice: req.body.cartItems[i].solitaireDiamondPrice,
          });

          break;

        case "diamond-earring":
          PurchasedFashionJewelry.create({
            jewelryType: "diamond-earring",
            orderId: req.body.orderId,
            jewelryStockNumber: req.body.cartItems[i].earringId,
            jewelrySizeIndex: req.body.cartItems[i].weight,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            smallDiamondQuality: req.body.cartItems[i].diamondQuality,
            smallDiamondPrice: req.body.cartItems[i].smallDiamondPrice,
            solitaireDiamondQuality:
              req.body.cartItems[i].solitaireDiamondQuality,
            solitaireDiamondPrice: req.body.cartItems[i].solitaireDiamondPrice,
          });

          break;

        case "mens-bracelet":
          PurchasedMensJewelry.create({
            jewelryType: "mens-bracelet",
            jewelryStockNumber: req.body.cartItems[i].braceletId,
            orderId: req.body.orderId,
            jewelrySizeIndex: req.body.cartItems[i].weightIndex,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair: false,
            diamondQuality: null,
            diamondCarat: null,
          });

          break;

        case "gold-chain":
          PurchasedMensJewelry.create({
            jewelryType: "gold-chain",
            jewelryStockNumber: req.body.cartItems[i].chainId,
            orderId: req.body.orderId,
            jewelrySizeIndex: req.body.cartItems[i].weightIndex,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair: false,
            diamondQuality: null,
            diamondCarat: null,
          });

          break;

        case "mens-kada":
          PurchasedMensJewelry.create({
            jewelryType: "mens-kada",
            jewelryStockNumber: req.body.cartItems[i].kadaId,
            orderId: req.body.orderId,
            jewelrySizeIndex: req.body.cartItems[i].weightIndex,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair: false,
            diamondQuality: null,
            diamondCarat: null,
          });

          break;

        case "mens-ring":
          PurchasedMensJewelry.create({
            jewelryType: "mens-ring",
            jewelryStockNumber: req.body.cartItems[i].ringId,
            orderId: req.body.orderId,
            jewelrySizeIndex: req.body.cartItems[i].weightIndex,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair: false,
            diamondQuality: req.body.cartItems[i].presetDiamondQuality,
            diamondCarat: req.body.cartItems[i].presetDiamondCarat,
          });

          break;

        case "mens-stud":
          PurchasedMensJewelry.create({
            jewelryType: "mens-stud",
            jewelryStockNumber: req.body.cartItems[i].studId,
            orderId: req.body.orderId,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelrySizeIndex: null,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair:
              req.body.cartItems[i].studQuantity === 2 ? true : false,
            diamondQuality: req.body.cartItems[i].presetDiamondQuality,
            diamondCarat: req.body.cartItems[i].presetDiamondCarat,
          });

          break;

        case "preset-stud":
          PurchasedPresetJewelry.create({
            jewelryType: "preset-stud",
            jewelryStockNumber: req.body.cartItems[i].studId,
            orderId: req.body.orderId,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelrySizeIndex: null,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair:
              req.body.cartItems[i].studQuantity === 2 ? true : false,
            diamondQuality: req.body.cartItems[i].presetDiamondQuality,
            diamondCarat: req.body.cartItems[i].presetDiamondCarat,
          });

          break;

        case "preset-necklace":
          PurchasedPresetJewelry.create({
            jewelryType: "preset-necklace",
            jewelryStockNumber: req.body.cartItems[i].necklaceId,
            orderId: req.body.orderId,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelrySizeIndex: req.body.cartItems[i].length,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair: false,
            diamondQuality: req.body.cartItems[i].presetDiamondQuality,
            diamondCarat: req.body.cartItems[i].presetDiamondCarat,
          });

          break;

        case "preset-ring":
          PurchasedPresetJewelry.create({
            jewelryType: "preset-ring",
            jewelryStockNumber: req.body.cartItems[i].ringId,
            orderId: req.body.orderId,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelrySizeIndex: req.body.cartItems[i].weightIndex,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair: false,
            diamondQuality: req.body.cartItems[i].presetDiamondQuality,
            diamondCarat: req.body.cartItems[i].presetDiamondCarat,
          });

          break;

        case "custom-ring":
          let looseDiamond = await PurchasedLooseDiamond.create({
            diamondStockNumber: req.body.cartItems[i].diamondId,
            vendor: req.body.cartItems[i].diamondId.split("-")[1],
            orderId: req.body.orderId,
            carat: req.body.cartItems[i].carat,
            lab: req.body.cartItems[i].lab,
            shape: req.body.cartItems[i].diamondShape,
            color: req.body.cartItems[i].color,
            clarity: req.body.cartItems[i].clarity,
            cut: req.body.cartItems[i].cut,
            culet: req.body.cartItems[i].culet,
            symmetry: req.body.cartItems[i].symmetry,
            fluorescence: req.body.cartItems[i].fluorescence,
            measurement: req.body.cartItems[i].measurement,
            polish: req.body.cartItems[i].polish,
            girdlePercentage: req.body.cartItems[i].girdlePercentage,
            ratio: req.body.cartItems[i].ratio,
            table: req.body.cartItems[i].table,
            depth: req.body.cartItems[i].depth,
            black: req.body.cartItems[i].black,
            white: req.body.cartItems[i].white,
            diamondPrice: req.body.cartItemsPriceArray[i],
          });

          let diamondStockNumberForRing = looseDiamond.diamondStockNumber;

          PurchasedCustomJewelry.create({
            jewelryType: "custom-ring",
            jewelryStockNumber: req.body.cartItems[i].ringId,
            orderId: req.body.orderId,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelrySizeIndex: req.body.cartItems[i].weightIndex,
            jewelrySizeStandard: req.body.cartItems[i].ringSizeStandard,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair: false,
            firstDiamondStockNumber: diamondStockNumberForRing,
            secondDiamondStockNumber: null,
            jewelryExtraSetting: null,
          });

          break;

        case "custom-necklace":
          let looseDiamondForNecklace = await PurchasedLooseDiamond.create({
            diamondStockNumber: req.body.cartItems[i].diamondId,
            vendor: req.body.cartItems[i].diamondId.split("-")[1],
            orderId: req.body.orderId,
            carat: req.body.cartItems[i].carat,
            lab: req.body.cartItems[i].lab,
            shape: req.body.cartItems[i].diamondShape,
            color: req.body.cartItems[i].color,
            clarity: req.body.cartItems[i].clarity,
            cut: req.body.cartItems[i].cut,
            culet: req.body.cartItems[i].culet,
            symmetry: req.body.cartItems[i].symmetry,
            fluorescence: req.body.cartItems[i].fluorescence,
            measurement: req.body.cartItems[i].measurement,
            polish: req.body.cartItems[i].polish,
            girdlePercentage: req.body.cartItems[i].girdlePercentage,
            ratio: req.body.cartItems[i].ratio,
            table: req.body.cartItems[i].table,
            depth: req.body.cartItems[i].depth,
            black: req.body.cartItems[i].black,
            white: req.body.cartItems[i].white,
            diamondPrice: req.body.cartItemsPriceArray[i],
          });

          let diamondStockNumberForNecklace =
            looseDiamondForNecklace.diamondStockNumber;

          PurchasedCustomJewelry.create({
            jewelryType: "custom-necklace",
            jewelryStockNumber: req.body.cartItems[i].necklaceId,
            orderId: req.body.orderId,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelrySizeIndex: req.body.cartItems[i].weightIndex,
            jewelrySizeStandard: null,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair: false,
            firstDiamondStockNumber: diamondStockNumberForNecklace,
            secondDiamondStockNumber: null,
            jewelryExtraSetting: null,
          });

          break;

        case "custom-stud":
          let firstLooseDiamondForStud = await PurchasedLooseDiamond.create({
            diamondStockNumber: req.body.cartItems[i].firstDiamondId,
            vendor: req.body.cartItems[i].firstDiamondId.split("-")[1],
            orderId: req.body.orderId,
            carat: req.body.cartItems[i].firstDiamondCarat,
            lab: req.body.cartItems[i].firstDiamondLab,
            shape: req.body.cartItems[i].diamondShape,
            color: req.body.cartItems[i].firstDiamondColor,
            clarity: req.body.cartItems[i].firstDiamondClarity,
            cut: req.body.cartItems[i].Cut,
            culet: req.body.cartItems[i].firstDiamondCulet,
            symmetry: req.body.cartItems[i].firstDiamondSymmetry,
            fluorescence: req.body.cartItems[i].firstDiamondFluorescence,
            measurement: req.body.cartItems[i].firstDiamondMeasurement,
            polish: req.body.cartItems[i].firstDiamondPolish,
            girdlePercentage:
              req.body.cartItems[i].firstDiamondGirdlePercentage,
            ratio: req.body.cartItems[i].firstDiamondRatio,
            table: req.body.cartItems[i].firstDiamondTable,
            depth: req.body.cartItems[i].firstDiamondDepth,
            black: req.body.cartItems[i].firstDiamondBlack,
            white: req.body.cartItems[i].firstDiamondWhite,
            diamondPrice: req.body.cartItemsPriceArray[i],
          });

          let secondLooseDiamondForStud = await PurchasedLooseDiamond.create({
            diamondStockNumber: req.body.cartItems[i].secondDiamondId,
            vendor: req.body.cartItems[i].secondDiamondId.split("-")[1],
            orderId: req.body.orderId,
            carat: req.body.cartItems[i].secondDiamondCarat,
            lab: req.body.cartItems[i].secondDiamondLab,
            shape: req.body.cartItems[i].diamondShape,
            color: req.body.cartItems[i].secondDiamondColor,
            clarity: req.body.cartItems[i].secondDiamondClarity,
            cut: req.body.cartItems[i].secondDiamondCut,
            culet: req.body.cartItems[i].secondDiamondCulet,
            symmetry: req.body.cartItems[i].secondDiamondSymmetry,
            fluorescence: req.body.cartItems[i].secondDiamondFluorescence,
            measurement: req.body.cartItems[i].secondDiamondMeasurement,
            polish: req.body.cartItems[i].secondDiamondPolish,
            girdlePercentage:
              req.body.cartItems[i].secondDiamondGirdlePercentage,
            ratio: req.body.cartItems[i].secondDiamondRatio,
            table: req.body.cartItems[i].secondDiamondTable,
            depth: req.body.cartItems[i].secondDiamondDepth,
            black: req.body.cartItems[i].secondDiamondBlack,
            white: req.body.cartItems[i].secondDiamondWhite,
            diamondPrice: req.body.cartItemsPriceArray[i],
          });

          let firstDiamondStockNumberForStud =
            firstLooseDiamondForStud.diamondStockNumber;
          let secondDiamondStockNumberForStud =
            secondLooseDiamondForStud.diamondStockNumber;

          PurchasedCustomJewelry.create({
            jewelryType: "custom-stud",
            jewelryStockNumber: req.body.cartItems[i].studId,
            orderId: req.body.orderId,
            jewelryMetal: req.body.cartItems[i].metal,
            jewelrySizeIndex: null,
            jewelrySizeStandard: null,
            jewelryPrice: req.body.cartItemsPriceArray[i],
            jewelryPair: false,
            firstDiamondStockNumber: firstDiamondStockNumberForStud,
            secondDiamondStockNumber: secondDiamondStockNumberForStud,
            jewelryExtraSetting: req.body.cartItems[i].backing,
          });

          break;
      }
    }

    res.send({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

module.exports = router;
