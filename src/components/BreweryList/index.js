import React from "react";
import { useHistory } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";

const BreweryList = ({ data }) => {
  const history = useHistory();
  const viewDetailsPage = (e) => {
    history.push(`/details/${e.target.dataset.id}`);
  };
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 130,
    },
    { field: "brewery_type", headerName: "Type of Brewery", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "state", headerName: "State", width: 130 },
    { field: "country", headerName: "Country", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
    {
      field: "id",
      headerName: "Details",
      width: 130,
      renderCell: (params) => {
        return (
          <button data-id={params.id} onClick={viewDetailsPage}>
            View
          </button>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data} columns={columns} pageSize={5} />
    </div>
  );
};
export default BreweryList;
