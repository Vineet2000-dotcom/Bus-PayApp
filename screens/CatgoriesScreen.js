import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { useNavigation } from "@react-navigation/native";

function CatgoriesScreen() {
  const navigation = useNavigation();
  console.log(navigation)
 
 
  
  function renderCategoryItem(itemData) {
    
   
    
    function pressHandler() {
     
      
      
      
      console.log(itemData.item.id);
      if (itemData.item.id == "c1") {
        navigation.navigate("AddNewMember", {
          categoryId: itemData.item.id,
        });
      }

      if (itemData.item.id == "c2") {
        navigation.navigate("ViewPaymentStatus", {
          categoryId: itemData.item.id,
        });
      }

      if (itemData.item.id == "c3") {
        navigation.navigate("MemberPaymentConfirmation", {
          categoryId: itemData.item.id,
        });
      }
      if (itemData.item.id == "c4") {
        navigation.navigate("WaitingListDetails", {
          categoryId: itemData.item.id,
        });
      }
      if (itemData.item.id == "c5") {
        navigation.navigate("AllMemberDetails", {
          categoryId: itemData.item.id,
        });
      }
      if (itemData.item.id == "c6") {
        navigation.navigate("AddMembertoWaiting", {
          categoryId: itemData.item.id,
        });
      }
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
export default CatgoriesScreen;
