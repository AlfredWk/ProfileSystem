import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
// import EditMyProfile from "./editMyProfile";

export const DataGridDemo: React.FC = () => {
  const storedUsers = JSON.parse(localStorage.getItem("userList") || "[]");
  const navigate = useNavigate();
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  // const handleUserSelection = (user: any) => {
  //   const storedValue = localStorage.getItem('userList');
  //   setSelectedUser(user);
  //   setIsEditProfileVisible(true);
  // }

  const handleEditProfile = (params: any) => {
    // const rowData = params;
    //const storedValue = localStorage.getItem('userList');
    setIsEditProfileVisible(true);
    navigate("/editMyProfile", { state: params });
  };

  const columns: GridColDef[] = [
    {
      field: "userid",
      headerName: "ID",
      width: 50,
    },
    {
      field: "username",
      headerName: "Username",
      width: 150,
    },
    {
      field: "contactNumber",
      headerName: "Contact number",
      width: 150,
    },
    {
      field: "icNumber",
      headerName: "IC number",
      // sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.username || ""} ${params.row.contactNumber || ""}`,
    },
    {
      field: "action",
      headerName: "Action",
      type: "actions",
      width: 160,
      getActions: (params: any) => [
        <Button
          onClick={() => {
            // console.log("params.row", params.row);
            // navigate('/editMyProfile');
            handleEditProfile(params.row);
          }}
        >
          EDIT
        </Button>,
      ],
    },
  ];

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={storedUsers}
          columns={columns}
          disableRowSelectionOnClick
          getRowId={(row) => row.userid}
        />
      </Box>
      {/* {isEditProfileVisible &&(
      <EditMyProfile selectedUser = {selectedUser}/>
    )} */}
    </>
  );
};
// function setSelectedUser(user: any) {
//   throw new Error("Function not implemented.");
// }
