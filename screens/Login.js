import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  Text,
  Button,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login({ onLogin, isButtonPressed }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);
    return Object.keys(errors).length == 0;
  };

  const handleLoginPress = () => {
    if (validateForm()) {
      

      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Image source={{ uri: "../assets/" }} style={styles.image} />
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Enter your Username"
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        <Button
          title={isButtonPressed ? "Logging in..." : "Log in"}
          onPress={handleLoginPress}
          disabled={isButtonPressed}
        />
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
