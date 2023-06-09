import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { useIsLoading } from "../../../../hooks";
import { signIn } from "../../../redux/auth/operations";
import Input from "../../../components/Input/Input";
import { styles } from "./LoginScreen.styles";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const isLoading = useIsLoading();
  const [show, setShow] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const toggleShowPassword = () => {
    setShow(!show);
  };

  const onSubmit = (data) => {
    dispatch(signIn(data));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/background.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.select({
              ios: -230,
              android: -40,
            })}
          >
            <ScrollView style={styles.form}>
              <Text style={styles.title}>Sign in</Text>

              <Input
                control={control}
                name="email"
                placeholder="Email"                
              />

              <Input
                control={control}
                name="password"
                placeholder="Password"                
                secureTextEntry={show === true ? false : true}
                isPassword={true}
                toggleShowPassword={toggleShowPassword}
                show={show}
              />
              {isLoading ? (
                <ActivityIndicator
                  size="large"
                  color="#FF6C00"
                  style={{ marginTop: 27, marginBottom: 16 }}
                />
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.7}
                  onPress={handleSubmit(onSubmit)}
                >
                  <Text style={styles.label}>Sign in</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.link}>Don't have an account? Sign up</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
