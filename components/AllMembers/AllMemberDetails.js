import React, { useState } from "react";
import { DataTable } from "react-native-paper";
import { View } from "react-native";

const AllMemberDetails = () => {
  const [page, setPage] = useState(0);

  const [items] = useState([
    {
      key: 1,
      name: "Khushboo Agarwal",
      email: "k@ril.com",
      fat: 16,
    },
    {
      key: 2,
      name: "Nilesh Deotele",
      email: "n@ril.com",
      fat: 16,
    },
    {
      key: 3,
      name: "Sachin Mapramam",
      email: "s@ril.com",
      fat: 6,
    },
    {
      key: 4,
      name: "Sachin Mapramam",
      email: "s@ril.com",
      fat: 6,
    },
    {
      key: 5,
      name: "Sachin Mapramam",
      email: "s@ril.com",
      fat: 6,
    },
    {
      key: 6,
      name: "Sachin Mapramam",
      email: "s@ril.com",
      fat: 6,
    },
    {
      key: 7,
      name: "Sachin Mapramam",
      email: "s@ril.com",
      fat: 6,
    },
    {
      key: 8,
      name: "Sachin Mapramam",
      email: "s@ril.com",
      fat: 6,
    },
    {
      key: 9,
      name: "Sachin Mapramam",
      email: "s@ril.com",
      fat: 6,
    },
    {
      key: 10,
      name: "Sachin Mapramam",
      email: "s@ril.com",
      fat: 6,
    },
  ]);

  const itemsPerPage = 10;
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;

  const numberOfItemsPerPageList = [10, 20, 30];
  const onItemsPerPageChange = (value) => {};

  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Id No.</DataTable.Title>
          <DataTable.Title>Employee Name</DataTable.Title>
          <DataTable.Title>RIL Email Id</DataTable.Title>
        </DataTable.Header>

        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.key}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.email}</DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        />
      </DataTable>
    </View>
  );
};

export default AllMemberDetails;
