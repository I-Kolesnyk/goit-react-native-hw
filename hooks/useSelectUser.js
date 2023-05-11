import { useSelector } from "react-redux";
import { selectUser } from "../src/redux/auth/selectors";

export const useSelectUser = () => useSelector(selectUser);