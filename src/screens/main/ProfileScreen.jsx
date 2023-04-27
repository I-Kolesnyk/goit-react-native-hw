import { useSelector, useDispatch } from "react-redux";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import LogOutIcon from "react-native-vector-icons/MaterialIcons";

import { authSignOutUser } from "../../redux/auth/operations";
import { selectLogin } from "../../redux/auth/selectors";

import Layout from "../../../screens/Layout";
import { profileScreenStyles } from "../../styles";

function ProfileScreen() {
  const login = useSelector(selectLogin);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(authSignOutUser());
  };

  return (
    <Layout>
      <View style={profileScreenStyles.container}>
        <Image style={profileScreenStyles.imgContainer} />
        <TouchableOpacity activeOpacity={0.5}>
          <Icon
            style={profileScreenStyles.icon}
            name="closecircle"
            size={24}
            color="#E8E8E8"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={profileScreenStyles.logOut}
          activeOpacity={0.5}
          onPress={handleSignOut}
        >
          <LogOutIcon name="logout" size={30} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={profileScreenStyles.headerTitle}>{login}</Text>
      </View>
    </Layout>
  );
}

export default ProfileScreen;
