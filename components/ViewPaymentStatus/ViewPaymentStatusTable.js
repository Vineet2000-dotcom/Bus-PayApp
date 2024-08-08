import React, { useState } from "react";
import { DataTable } from "react-native-paper";
import { View } from "react-native";

const ViewPaymentStatusTable = () => {
  const [page, setPage] = useState(0);

  const [items] = useState([
    {
      key: 1,
      name: "Vivek Patil",
      calories: "Paid",
      fat: 16,
    },
    {
      key: 2,
      name: "Tapasvi parathe",
      calories: "Paid",
      fat: 16,
    },
    {
      key: 3,
      name: "Vineet Iyer",
      calories: "Paid",
      fat: 6,
    },
   
  ]);

  const itemsPerPage = 10; // Example value, adjust as needed
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;

  const numberOfItemsPerPageList = [10, 20, 30];
  const onItemsPerPageChange = (value) => {
    
  };

  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Member Name</DataTable.Title>
          <DataTable.Title>Payment Status</DataTable.Title>
        </DataTable.Header>

        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell >{item.calories}</DataTable.Cell>
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

export default ViewPaymentStatusTable;
