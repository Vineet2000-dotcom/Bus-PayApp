import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Platform,
    ScrollView,
    TextInput,
    Text,
    Button,
    KeyboardAvoidingView,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  
  function AddMembertoWaitingListForm() {
    const navigation = useNavigation();
    function redirecttoHome() {
      navigation.navigate("Home");
    }
  
    return (
      <View>
        {/* <TextInput
          placeholder="Enter Passenger Full Name"
          style={styles.input}
          
        />
        <TextInput
          placeholder="Enter your Last Name"
          style={styles.input}
         
        />
        <TextInput
          placeholder="RIL Domain ID"
          style={styles.input}
         
        /> */}
  
        <View style={styles.loginContainer}>
          <View style={styles.container}>
            <View style={styles.circle}></View>
          </View>
  
          <View style={styles.form}>
          <Text style={styles.label}>Passenger Full Name</Text>
          <TextInput
            placeholder="Enter Passenger Full Name"
            style={styles.input}
          />

          <Text style={styles.label}>Passenger Contact Details</Text>
          <TextInput
            placeholder="Enter Passenger's Contact Number"
            style={styles.input}
          />
  
            <Text style={styles.label}>RIL DOMAIN ID</Text>
            <TextInput placeholder="RIL DOMAIN ID" style={styles.input} />
  
            <Button title="Save and Submit" onPress={redirecttoHome} />
          </View>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    form: {
      backgroundColor: "#ffffff",
      padding: 20,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginTop: 280,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: "bold",
    },
    loginContainer: {},
    input: {
      height: 40,
      borderColor: "#ddd",
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
    },
    errorText: {
      color: "red",
    },
  
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    circle: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
  });
  
  export default AddMembertoWaitingListForm;
  