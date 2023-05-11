import { useSelector } from "react-redux";
import { selectIsAuth } from "../src/redux/auth/selectors";

export const useSelectIsAuth = () => useSelector(selectIsAuth);
