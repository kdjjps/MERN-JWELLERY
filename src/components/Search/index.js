import React, { useContext, useEffect, useState } from "react";
import { SearchPageBox, SearchItem } from "./style";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import SearchListItem from "./SearchListItem";
import SearchGridItem from "./SearchGridItem";
import { checkForDefaultCookies } from "../../helper/checkForDefaultCookies";
import { fetchDiamondData } from "../../store/actions/diamondActions";
import { fetchJewelryData } from "../../store/actions/jewelryActions";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Content/Loader/Loader";
import getEquivalentDiamondShapeNumber from "../../helper/getEquivalentDiamondShapeNumber";

export default function SearchList() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  const { q } = queryObject;
  const [cookies, setCookie] = useCookies();
  const [isAllSet, setIsAllSet] = useState(false);

  const diamonds = data.diamondReducer.unfilteredDiamondArray;
  const rings = data.jewelryReducer.unfilteredSolitaireRingsArray;
  const necklaces = data.jewelryReducer.unfilteredSolitaireNecklacesArray;
  const studs = data.jewelryReducer.unfilteredSolitaireStudsArray;
  const fashionRings = data.jewelryReducer.unfilteredFashionRingsArray;
  const diamondPendants = data.jewelryReducer.unfilteredDiamondPendantsArray;
  const alphabetPendants = data.jewelryReducer.unfilteredAlphabetPendantsArray;
  const diamondEarrings = data.jewelryReducer.unfilteredDiamondEarringsArray;
  const nosePins = data.jewelryReducer.unfilteredNosePinsArray;
  const mensRings = data.jewelryReducer.unfilteredMensRingsArray;
  const mensChains = data.jewelryReducer.unfilteredMensChainsArray;
  const mensKadas = data.jewelryReducer.unfilteredMensKadasArray;
  const mensBracelets = data.jewelryReducer.unfilteredMensBraceletsArray;

  const getCustomRingsSearchArray = () => {
    let ringArray = [];
    for (var i = 0; i < rings.length; i++) {
      for (var j = 0; j < rings[i].metals.length; j++) {
        ringArray.push({
          category: "custom-ring",
          keywords: `${rings[i].ringName} Ring, ${rings[i].diamondShape} Diamond, ${rings[i].metals[j].metal} Metal`,
          url: `https://luxurygemsco.com/create-your-own-ring/rings/LGC-CJ-SR${
            i + 1
          }${getEquivalentDiamondShapeNumber(rings[i].diamondShape)}${j}`,
          image: rings[i].metals[j].imgURL,
        });
      }
    }
    return ringArray;
  };

  const getCustomNecklacesSearchArray = () => {
    let necklaceArray = [];
    for (var i = 0; i < necklaces.length; i++) {
      for (var j = 0; j < necklaces[i].metals.length; j++) {
        necklaceArray.push({
          category: "custom-necklace",
          keywords: `${necklaces[i].necklaceName} Necklace, ${necklaces[i].diamondShape} Diamond, ${necklaces[i].metals[j].metal} Metal`,
          url: `https://luxurygemsco.com/create-your-own-necklace/necklaces/LGC-CJ-SP${
            i + 1
          }${getEquivalentDiamondShapeNumber(necklaces[i].diamondShape)}${j}`,
          image: necklaces[i].metals[j].imgURL,
        });
      }
    }
    return necklaceArray;
  };

  const getCustomStudsSearchArray = () => {
    let studArray = [];
    for (var i = 0; i < studs.length; i++) {
      for (var j = 0; j < studs[i].metals.length; j++) {
        studArray.push({
          category: "custom-earring",
          keywords: `${studs[i].studName} Stud, ${studs[i].diamondShape} Diamond, ${studs[i].metals[j].metal} Metal`,
          url: `https://luxurygemsco.com/create-your-own-earring/studs/LGC-CJ-SE${
            i + 1
          }${getEquivalentDiamondShapeNumber(studs[i].diamondShape)}${j}`,
          image: studs[i].metals[j].imgURL,
        });
      }
    }
    return studArray;
  };

  const diamondSearchArray = diamonds.map((item) => {
    let modifiedUrl = item.imageUrl.replace(
      /https:\/\/lgc-media-bucket\.s3\.ap-south-1\.amazonaws\.com/g,
      "https://lgcgems.s3.ap-south-1.amazonaws.com"
    );

    return {
      category: "loose-diamond",
      keywords: `${item.carat} Carat, ${item.color} Color, ${item.clarity} Clarity, ${item.cut} Cut, ${item.diamondShape} Diamond`,
      url: `https://luxurygemsco.com/diamonds/${item.stockNumber}`,
      image: modifiedUrl,
      shape: item.diamondShape,
    };
  });

  const mensRingSearchArray = mensRings.map((item) => {
    let modifiedUrl = item.imageUrl.replace(
      /https:\/\/lgc-media-bucket\.s3\.ap-south-1\.amazonaws\.com/g,
      "https://lgcgems.s3.ap-south-1.amazonaws.com"
    );

    return {
      category: "mens-ring",
      keywords: `${item.ringName} Mens Ring, ${item.diamondShape} Diamond, ${item.purity} Gold`,
      url: `https://luxurygemsco.com/mens-rings/${item.stockNumber}`,
      image: modifiedUrl,
    };
  });

  const customRingSearchArray = getCustomRingsSearchArray();
  const customNecklaceSearchArray = getCustomNecklacesSearchArray();
  const customStudSearchArray = getCustomStudsSearchArray();

  const searchBank = [
    ...diamondSearchArray,
    ...customRingSearchArray,
    ...customNecklaceSearchArray,
    ...customStudSearchArray,
    ...mensRingSearchArray,
  ];

  console.log(searchBank);

  const filteredSearchBankArray = searchBank.filter((item) => {
    return item.keywords.toLowerCase().includes(q);
  });

  useEffect(() => {
    checkForDefaultCookies(cookies, setCookie)
      .then(dispatch(fetchDiamondData({})))
      .then(dispatch(fetchJewelryData("solitaireRings")))
      .then(dispatch(fetchJewelryData("solitaireNecklaces")))
      .then(dispatch(fetchJewelryData("solitaireStuds")))
      .then(dispatch(fetchJewelryData("fashionRings")))
      .then(dispatch(fetchJewelryData("diamondPendants")))
      .then(dispatch(fetchJewelryData("alphabetPendants")))
      .then(dispatch(fetchJewelryData("diamondEarrings")))
      .then(dispatch(fetchJewelryData("nosePins")))
      .then(dispatch(fetchJewelryData("mensRings")))
      .then(dispatch(fetchJewelryData("mensChains")))
      .then(dispatch(fetchJewelryData("mensKadas")))
      .then(dispatch(fetchJewelryData("mensBracelets")))
      .then(dispatch(fetchJewelryData("gemstones")))
      .then(() => setIsAllSet(true));
  }, []);

  return isAllSet ? (
    <SearchPageBox>
      <section className="top-bar">
        <div>
          <label>Search : </label>
          <input />
          <button>SEARCH</button>
        </div>
        <div className="search-filters">
          <div>
            <label for="category">Choose a category : </label>
            <select name="category" id="category">
              <option value="all">All</option>
              <option value="diamond">Diamond</option>
              <option value="gemstone">Gemstone</option>
              <option value="solitaire-ring">Solitaire Ring</option>
              <option value="solitaire-necklace">Solitaire Necklace</option>
              <option value="solitaire-stud">Solitaire Stud</option>
              <option value="fashion-ring">Fashion Ring</option>
              <option value="diamond-pendant">Diamond Pendant</option>
              <option value="alphabet-pendant">Alphabet Pendant</option>
              <option value="diamond-earring">Diamond Earring</option>
              <option value="nose-pin">Nose Pin</option>
              <option value="mens-ring">Mens Ring</option>
              <option value="mens-stud">Mens Stud</option>
              <option value="mens-kada">Mens Kada</option>
              <option value="mens-chain">Mens Chain</option>
              <option value="mens-bracelet">Mens Bracelet</option>
            </select>
          </div>
        </div>
      </section>
      <section className="listings-box">
        <div className="page-mover">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {filteredSearchBankArray.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>Nothing To Search For</h2>
        ) : (
          <div className="listings">
            {filteredSearchBankArray.map((item, index) => (
              <SearchGridItem item={item} key={index} />
            ))}
          </div>
        )}
      </section>
    </SearchPageBox>
  ) : (
    <Loader />
  );
}
