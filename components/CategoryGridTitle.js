import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTitle({ title, color,onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable  android_ripple={{color:'#ccc'}} style={styles.button} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 25,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 2,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible' 
  },
  title: {
    fontWeight: "bold",
    fontsize: 18,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryGridTitle;
