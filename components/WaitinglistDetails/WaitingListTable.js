import React, { useState } from "react";
import { DataTable } from "react-native-paper";
import { MultiSelect } from "react-native-element-dropdown";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const data = [
  { label: "Alpha", value: "1" },
  { label: "Bravo", value: "2" },
  { label: "Charlie", value: "3" },
  { label: "Delta", value: "4" },
  { label: "Echo", value: "5" },
  { label: "Foxtrot", value: "6" },
  { label: "Golf", value: "7" },
  { label: "Hotel", value: "8" },
];

const ViewWaitingListStatusTable = () => {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      </View>
    );
  };

  const [items] = useState([
    {
      key: 1,
      name: "Khushboo Agarwal",
      calories: "Paid",
      fat: 16,
    },
    {
      key: 2,
      name: "Nilesh Deotele",
      calories: "Paid",
      fat: 16,
    },
    {
      key: 3,
      name: "Sachin Mapramam",
      calories: "Paid",
      fat: 6,
    },
  ]);

  const itemsPerPage = 10; // Example value, adjust as needed
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;

  const numberOfItemsPerPageList = [10, 20, 30];
  const onItemsPerPageChange = (value) => {};

  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Waiting List No.</DataTable.Title>
          <DataTable.Title>Employee Name</DataTable.Title>
        </DataTable.Header>

        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.key}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
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


      <Text>Move a Member from Waiting List to All Members</Text>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select Member Name from List"
        value={selected}
        search
        searchPlaceholder="Search..."
        onChange={(item) => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
        renderItem={renderItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={styles.textSelectedStyle}>{item.label}</Text>
              <AntDesign color="black" name="delete" size={17} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ViewWaitingListStatusTable;
const styles = StyleSheet.create({
  container: { padding: 16, marginTop: 140 },
  dropdown: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginTop: 80,
  },
  selectedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});

