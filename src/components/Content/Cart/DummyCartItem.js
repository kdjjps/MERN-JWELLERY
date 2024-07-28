import React, { useState, useEffect } from "react";
import { CartItemBox } from "./style";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../helper/getTotalPrice";
import getNewArrivalsTotalPrice from "../../../helper/getNewArrivalsTotalPrice";
import gemCertification from "../../../fakedata/gemCertification";

const CartItem = ({
  cartItems,
  allDiamonds,
  findDiamond,
  product,
  removeItem,
  rings,
  findRing,
  necklaces,
  findNecklace,
  studs,
  findStud,
  mensRings,
  findMensRing,
  kadas,
  findKada,
  chains,
  findChain,
  bracelets,
  findBracelet,
  diamondEarrings,
  findDiamondEarring,
  diamondPendants,
  findDiamondPendant,
  alphabetPendants,
  findAlphabetPendant,
  fashionRings,
  findFashionRing,
  pins,
  findPin,
  allGemstones,
  findGemstone,
  nfObject,
}) => {
  const [cookies, setCookie] = useCookies();
  const [stoneDisplayStatus, setStoneDisplayStatus] = useState(true);
  const [jewelryDisplayStatus, setJewelryDisplayStatus] = useState(false);

  const [cartObject, setCartObject] = useState({
    diamondObject: null,
    ringObject: null,
    necklaceObject: null,
    studObject: null,
    firstDiamondObject: null,
    secondDiamondObject: null,
    mensRingObject: null,
    kadaObject: null,
    chainObject: null,
    braceletObject: null,
    diamondEarringObject: null,
    diamondPendantObject: null,
    alphabetPendantObject: null,
    fashionRingObject: null,
    nosePinObject: null,
    gemObject: null,
  });

  const [loading, setLoading] = useState(true);

  const getSampleDiamondImage = (shape) => {
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
          shape: "Square Emerald",
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

  // useEffect(() => {
  //     (async() => {

  //         let diamondObject = await findDiamond(allDiamonds, product.diamondId)
  //         let ringObject = await findRing(rings, product.ringId)
  //         let necklaceObject = await findNecklace(necklaces, product.necklaceId)
  //         let studObject = await findStud(studs, product.studId)
  //         let firstDiamondObject = await findDiamond(allDiamonds, product.firstDiamondId)
  //         let secondDiamondObject = await findDiamond(allDiamonds, product.secondDiamondId)
  //         let mensRingObject = await findMensRing(mensRings, product.ringId)
  //         let kadaObject = await findKada(kadas, product.kadaId)
  //         let chainObject = await findChain(chains, product.chainId)
  //         let braceletObject = await findBracelet(bracelets, product.braceletId)
  //         let diamondEarringObject = await findDiamondEarring(diamondEarrings, product.earringId)
  //         let diamondPendantObject = await findDiamondPendant(diamondPendants, product.pendantId)
  //         let alphabetPendantObject = await findAlphabetPendant(alphabetPendants, product.pendantId)
  //         let fashionRingObject = await findFashionRing(fashionRings, product.ringId)
  //         let nosePinObject = await findPin(pins, product.pinId)
  //         let gemObject = await findGemstone(allGemstones, product.gemstoneId)

  //         setCartObject(
  //             {
  //                 diamondObject: {...diamondObject},
  //                 ringObject: {...ringObject},
  //                 necklaceObject: {...necklaceObject},
  //                 studObject: {...studObject},
  //                 firstDiamondObject: {...firstDiamondObject},
  //                 secondDiamondObject: {...secondDiamondObject},
  //                 mensRingObject: {...mensRingObject},
  //                 kadaObject: {...kadaObject},
  //                 chainObject: {...chainObject},
  //                 braceletObject: {...braceletObject},
  //                 diamondEarringObject: {...diamondEarringObject},
  //                 diamondPendantObject: {...diamondPendantObject},
  //                 alphabetPendantObject: {...alphabetPendantObject},
  //                 fashionRingObject: {...fashionRingObject},
  //                 nosePinObject: {...nosePinObject},
  //                 gemObject: {...gemObject}
  //             }
  //         )

  //         if (allDiamonds.length != 0){
  //             setLoading(false)
  //         }

  //     })()

  // },[allDiamonds])

  useEffect(() => {
    let diamondObject = findDiamond(allDiamonds, product.diamondId);
    let ringObject = findRing(rings, product.ringId);
    let necklaceObject = findNecklace(necklaces, product.necklaceId);
    let studObject = findStud(studs, product.studId);
    let firstDiamondObject = findDiamond(allDiamonds, product.firstDiamondId);
    let secondDiamondObject = findDiamond(allDiamonds, product.secondDiamondId);
    let mensRingObject = findMensRing(mensRings, product.ringId);
    let kadaObject = findKada(kadas, product.kadaId);
    let chainObject = findChain(chains, product.chainId);
    let braceletObject = findBracelet(bracelets, product.braceletId);
    let diamondEarringObject = findDiamondEarring(
      diamondEarrings,
      product.earringId
    );
    let diamondPendantObject = findDiamondPendant(
      diamondPendants,
      product.pendantId
    );
    let alphabetPendantObject = findAlphabetPendant(
      alphabetPendants,
      product.pendantId
    );
    let fashionRingObject = findFashionRing(fashionRings, product.ringId);
    let nosePinObject = findPin(pins, product.pinId);
    let gemObject = findGemstone(allGemstones, product.gemstoneId);

    setCartObject({
      diamondObject: { ...diamondObject },
      ringObject: { ...ringObject },
      necklaceObject: { ...necklaceObject },
      studObject: { ...studObject },
      firstDiamondObject: { ...firstDiamondObject },
      secondDiamondObject: { ...secondDiamondObject },
      mensRingObject: { ...mensRingObject },
      kadaObject: { ...kadaObject },
      chainObject: { ...chainObject },
      braceletObject: { ...braceletObject },
      diamondEarringObject: { ...diamondEarringObject },
      diamondPendantObject: { ...diamondPendantObject },
      alphabetPendantObject: { ...alphabetPendantObject },
      fashionRingObject: { ...fashionRingObject },
      nosePinObject: { ...nosePinObject },
      gemObject: { ...gemObject },
    });

    if (allDiamonds.length != 0) {
      setLoading(false);
    }
  }, [allDiamonds]);

  return (
    <CartItemBox
      jewelryImageStatus={jewelryDisplayStatus}
      stoneImageStatus={stoneDisplayStatus}
    >
      {product.itemType === "loose-diamond" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Loose Diamond
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.diamondObject.stockNumber != undefined ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={
                    cartObject.diamondObject.imageUrl.length > 5
                      ? cartObject.diamondObject.imageUrl
                      : getSampleDiamondImage(cartObject.diamondObject.shape)
                          .imgURL
                  }
                  alt="diamond"
                  id={product.diamondId}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getSampleDiamondImage(
                      cartObject.diamondObject.shape
                    ).imgURL;
                  }}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.diamondObject.carat} Carat{" "}
                  {cartObject.diamondObject.clarity}{" "}
                  {
                    getSampleDiamondImage(cartObject.diamondObject.diamondShape)
                      .shape
                  }{" "}
                  Natural Diamond
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "loose-diamond",
                    cartObject.diamondObject,
                    cookies
                  )}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Diamond not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "custom-ring" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Custom Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.diamondObject ?? cartObject.ringObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  className="stone-image"
                  src={
                    cartObject.diamondObject.imageUrl.length > 5
                      ? cartObject.diamondObject.imageUrl
                      : getSampleDiamondImage(cartObject.diamondObject.shape)
                          .imgURL
                  }
                  alt="diamond"
                  id={product.diamondId}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getSampleDiamondImage(
                      cartObject.diamondObject.shape
                    ).imgURL;
                  }}
                  onClick={() => {
                    setJewelryDisplayStatus(false);
                    setStoneDisplayStatus(true);
                  }}
                />

                <img
                  className="jewelry-image"
                  src={cartObject.ringObject.metals[0].imgURL}
                  alt="ring"
                  id={product.ringId}
                  onClick={() => {
                    setJewelryDisplayStatus(true);
                    setStoneDisplayStatus(false);
                  }}
                />
              </div>
              <div className="details-holder">
                <div>
                  <h2>
                    {cartObject.diamondObject.carat} Carat{" "}
                    {cartObject.diamondObject.clarity}{" "}
                    {cartObject.diamondObject.diamondShape} Natural Diamond
                  </h2>
                  <h2>
                    {cartObject.ringObject.metalWeight} Gms 18KT Gold{" "}
                    {cartObject.ringObject.ringName} Ring
                  </h2>
                </div>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "custom-ring",
                    cartObject.ringObject,
                    cookies
                  ) +
                    getTotalPrice(
                      "loose-diamond",
                      cartObject.diamondObject,
                      cookies
                    )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Diamond not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "preset-ring" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Preset Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.ringObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.ringObject.metals[product.metalCode].imgURL}
                  alt="ring"
                  id={product.ringId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.ringObject.metalWeight} Gms 18KT Gold{" "}
                  {cartObject.ringObject.ringName} Ring
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "preset-ring",
                    cartObject.ringObject,
                    cookies,
                    product.presetDiamondCarat,
                    product.presetDiamondQuality
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "custom-necklace" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Custom Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>

          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.diamondObject && cartObject.necklaceObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  className="stone-image"
                  src={
                    cartObject.diamondObject.imageUrl.length > 5
                      ? cartObject.diamondObject.imageUrl
                      : getSampleDiamondImage(cartObject.diamondObject.shape)
                          .imgURL
                  }
                  alt="diamond"
                  id={product.diamondId}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getSampleDiamondImage(
                      cartObject.diamondObject.shape
                    ).imgURL;
                  }}
                  onClick={() => {
                    setJewelryDisplayStatus(false);
                    setStoneDisplayStatus(true);
                  }}
                />

                <img
                  className="jewelry-image"
                  src={cartObject.necklaceObject.metals[0].imgURL}
                  alt="necklace"
                  id={product.necklaceId}
                  onClick={() => {
                    setJewelryDisplayStatus(true);
                    setStoneDisplayStatus(false);
                  }}
                />
              </div>
              <div className="details-holder">
                <div>
                  <h2>
                    {cartObject.diamondObject.carat} Carat{" "}
                    {cartObject.diamondObject.clarity}{" "}
                    {cartObject.diamondObject.diamondShape} Natural Diamond
                  </h2>
                  <h2>
                    {cartObject.necklaceObject.metalWeight} Gms 18KT Gold{" "}
                    {cartObject.necklaceObject.necklaceName} Necklace
                  </h2>
                </div>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "custom-necklace",
                    cartObject.necklaceObject,
                    cookies
                  ) +
                    getTotalPrice(
                      "loose-diamond",
                      cartObject.diamondObject,
                      cookies
                    )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Diamond not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "preset-necklace" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Preset Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.necklaceObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={
                    cartObject.necklaceObject.metals[product.metalCode].imgURL
                  }
                  alt="necklace"
                  id={product.necklaceId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.necklaceObject.metalWeight} Gms 18KT Gold{" "}
                  {cartObject.necklaceObject.necklaceName} Necklace
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "preset-necklace",
                    cartObject.necklaceObject,
                    cookies,
                    product.presetDiamondCarat,
                    product.presetDiamondQuality
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Necklace not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "mens-ring" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.mensRingObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.mensRingObject.imageUrl}
                  alt="mens-ring"
                  id={product.id}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.mensRingObject.metalWeight} Gms 18KT Gold{" "}
                  {cartObject.mensRingObject.ringName} Ring
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "mens-ring",
                    cartObject.mensRingObject,
                    cookies,
                    product.presetDiamondCarat,
                    product.presetDiamondQuality,
                    product.weightIndex
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "preset-stud" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Preset Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>

          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.studObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.studObject.metals[product.metalCode].imgURL}
                  alt="mens-ring"
                  id={product.studId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.studObject.metalWeight} Gms 18KT Gold{" "}
                  {cartObject.studObject.studName} Stud
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "preset-stud",
                    cartObject.studObject,
                    cookies,
                    product.presetDiamondCarat,
                    product.presetDiamondQuality,
                    null,
                    product.studQuantity
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Studs not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "mens-stud" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>

          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.studObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.studObject.metals[product.metalCode].imgURL}
                  alt="mens-ring"
                  id={product.studId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.studObject.metalWeight} Gms 18KT Gold{" "}
                  {cartObject.studObject.studName} Stud
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "preset-stud",
                    cartObject.studObject,
                    cookies,
                    product.presetDiamondCarat,
                    product.presetDiamondQuality,
                    null,
                    product.studQuantity
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Studs not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "mens-kada" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.kadaObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.kadaObject.imageUrl}
                  alt="mens-kada"
                  id={product.kadaId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.kadaObject.weight} 18KT Gold{" "}
                  {cartObject.kadaObject.kadaName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "mens-kada",
                    cartObject.kadaObject,
                    cookies,
                    null,
                    null,
                    product.weightIndex
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "gold-chain" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.chainObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.chainObject.imageUrl}
                  alt="mens-kada"
                  id={product.chainId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.chainObject.weight} 22KT{" "}
                  {cartObject.chainObject.chainName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "gold-chain",
                    cartObject.chainObject,
                    cookies,
                    null,
                    null,
                    product.weightIndex
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Chain not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "mens-bracelet" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.braceletObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.braceletObject.imageUrl}
                  alt="mens-bracelet"
                  id={product.braceletId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.braceletObject.weight} 22KT{" "}
                  {cartObject.braceletObject.braceletName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "mens-bracelet",
                    cartObject.braceletObject,
                    cookies,
                    null,
                    null,
                    product.weightIndex
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "diamond-earring" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.diamondEarringObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.diamondEarringObject.imageArray[0]}
                  alt="diamond-earring"
                  id={product.earringId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.diamondEarringObject.metalWeight} 22KT{" "}
                  {cartObject.diamondEarringObject.productName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getNewArrivalsTotalPrice(
                    "diamond-earring",
                    product.weight,
                    cookies,
                    product.smallDiamondPrice,
                    product.solitaireDiamondPrice
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "diamond-pendant" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.diamondPendantObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.diamondPendantObject.imageArray[0]}
                  alt="diamond-pendant"
                  id={product.pendantId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.diamondPendantObject.metalWeight} 22KT{" "}
                  {cartObject.diamondPendantObject.productName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getNewArrivalsTotalPrice(
                    "diamond-pendant",
                    product.weight,
                    cookies,
                    product.smallDiamondPrice,
                    product.solitaireDiamondPrice
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "alphabet-pendant" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.alphabetPendantObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.alphabetPendantObject.image}
                  alt="diamond-pendant"
                  id={product.pendantId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.alphabetPendantObject.metalWeight} 22KT{" "}
                  {cartObject.alphabetPendantObject.productName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getNewArrivalsTotalPrice(
                    "alphabet-pendant",
                    product.weight,
                    cookies,
                    product.smallDiamondPrice
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Pendant not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "fashion-ring" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.fashionRingObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.fashionRingObject.imageArray[0]}
                  alt="fashion-ring"
                  id={product.ringId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {
                    cartObject.fashionRingObject.ringSizeWeightArray[
                      product.weightIndex
                    ]
                  }{" "}
                  22KT {cartObject.fashionRingObject.productName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getNewArrivalsTotalPrice(
                    "fashion-ring",
                    cartObject.fashionRingObject.ringSizeWeightArray[
                      product.weightIndex
                    ],
                    cookies,
                    product.smallDiamondPrice,
                    product.solitaireDiamondPrice,
                    cartObject.fashionRingObject
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "nose-pin" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.nosePinObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.nosePinObject.imageArray[0]}
                  alt="nose-pin"
                  id={product.pinId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {cartObject.nosePinObject.metalWeight} 22KT{" "}
                  {cartObject.nosePinObject.productName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getNewArrivalsTotalPrice(
                    "nose-pin",
                    cartObject.nosePinObject.metalWeight,
                    cookies,
                    product.smallDiamondPrice
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Nose pin not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "custom-stud" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Custom Jewelry
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>

          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.firstDiamondObject &&
            cartObject.studObject &&
            cartObject.secondDiamondObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  className="stone-image"
                  src={
                    cartObject.firstDiamondObject.imageUrl.length > 5
                      ? cartObject.firstDiamondObject.imageUrl
                      : getSampleDiamondImage(
                          cartObject.firstDiamondObject.shape
                        ).imgURL
                  }
                  alt="diamond"
                  id={product.firstDiamondForStud}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getSampleDiamondImage(
                      cartObject.firstDiamondObject.shape
                    ).imgURL;
                  }}
                  onClick={() => {
                    setJewelryDisplayStatus(false);
                    setStoneDisplayStatus(true);
                  }}
                />

                <img
                  className="jewelry-image"
                  src={cartObject.studObject.metals[0].imgURL}
                  alt="stud"
                  id={product.studId}
                  onClick={() => {
                    setJewelryDisplayStatus(true);
                    setStoneDisplayStatus(false);
                  }}
                />
              </div>
              <div className="details-holder">
                <div>
                  <h2>
                    {cartObject.firstDiamondObject.carat} Carat{" "}
                    {cartObject.firstDiamondObject.clarity}{" "}
                    {cartObject.firstDiamondObject.diamondShape} Natural Diamond
                  </h2>
                  <h2>
                    {cartObject.studObject.metalWeight} Gms 18KT Gold{" "}
                    {cartObject.studObject.studName} Stud
                  </h2>
                </div>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "custom-stud",
                    cartObject.studObject,
                    cookies
                  ) +
                    getTotalPrice(
                      "loose-diamond",
                      cartObject.firstDiamondObject,
                      cookies
                    ) +
                    getTotalPrice(
                      "loose-diamond",
                      cartObject.secondDiamondObject,
                      cookies
                    )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Diamond not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "loose-gemstone" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Loose Gemstone
            </p>
            <div className="buttons-container">
              <p>View</p>
              <div className="seperator"></div>
              <p onClick={() => removeItem({ id: product.itemId })}>Remove</p>
            </div>
          </div>
          {loading ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : cartObject.gemObject ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={cartObject.gemObject.images[0]}
                  alt="gemstone"
                  id={product.gemstoneId}
                />
              </div>
              <div className="details-holder">
                <h2>{cartObject.gemObject.type}</h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {parseInt(
                    (cartObject.gemObject.priceDetails[product.weightIndex]
                      .price +
                      gemCertification[product.certificateIndex].price) *
                      cookies.exchangeRate[cookies.currencyCode]
                  )}{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Gemstone not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </CartItemBox>
  );
};

export default CartItem;
