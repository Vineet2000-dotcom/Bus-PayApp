import { Searchbar } from "react-native-paper";
import { View,StyleSheet } from "react-native";
import * as React from "react";

const ViewPaymnentStatus = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={styles.searchbar}>
      <Searchbar
        placeholder="Search By Member Name"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchbar:{
    marginTop:20
  }

})


export default ViewPaymnentStatus;


