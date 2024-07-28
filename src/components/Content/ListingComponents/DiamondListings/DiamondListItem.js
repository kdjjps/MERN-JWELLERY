import React from "react";
import { useCookies } from "react-cookie";
import getImage from "../../../../helper/getImage";
import getTotalPrice from "../../../../helper/getTotalPrice";
import { useRouteMatch } from "react-router-dom";
const nfObject = new Intl.NumberFormat("en-US");

export default function DiamondListItem({ item, onHandleListHover }) {
  const { url } = useRouteMatch();
  const [cookies] = useCookies();

  let modifiedUrl = item.imageUrl.replace(
    /https:\/\/lgc-media-bucket\.s3\.ap-south-1\.amazonaws\.com/g,
    "https://lgcgems.s3.ap-south-1.amazonaws.com"
  );

  return (
    <tr
      data-carat={`${item.carat}`}
      data-shape={`${item.diamondShape}`}
      data-color={`${item.color}`}
      data-clarity={`${item.clarity}`}
      data-imageurl={`${modifiedUrl}`}
      data-price={`${item.totalPrice}`}
      data-packetid={`${item.stockNumber}`}
      onMouseEnter={onHandleListHover}
    >
      <td>
        <img
          src={
            item.imageUrl.length > 5
              ? modifiedUrl
              : getImage(item.diamondShape).imgURL
          }
          alt="diamond"
          id={item.id}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = getImage(item.diamondShape).imgURL;
          }}
        />
      </td>
      <td>{getImage(item.diamondShape).diamondShape}</td>
      <td>{item.carat.toFixed(2)}</td>
      <td>{item.color}</td>
      <td>{item.clarity}</td>
      <td>{item.cut}</td>
      <td>{item.depthPercentage}</td>
      <td>{item.tablePercentage}</td>
      <td>
        {cookies.currencyCode}{" "}
        {nfObject.format(
          getTotalPrice("loose-diamond", item, cookies).toFixed(2)
        )}
      </td>
      <td>
        <a href={`${url}/${item.stockNumber}`}>View Details</a>
      </td>
    </tr>
  );
}
