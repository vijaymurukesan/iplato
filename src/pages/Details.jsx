import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const DetailsPage = () => {
  const { id } = useParams();
  const { status, data } = useQuery(
    ["Brewers details", id],
    () =>
      fetch(`https://api.openbrewerydb.org/breweries/${id}`).then((res) =>
        res.json()
      ),
    { onError: (error) => console.log(error) }
  );

  const getDetailsList = () => {
    const dom = [];
    for (const [key, value] of Object.entries(data)) {
      dom.push(
        <div key={uuidv4()} className="detailsList">
          <span>{key}</span>:<span>{value}</span>
        </div>
      );
    }
    return dom;
  };
  return (
    <>
      {status !== "success" && <div>Loading....</div>}
      {status === "success" && getDetailsList()}
    </>
  );
};
export default DetailsPage;
