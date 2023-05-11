import { useSelector } from "react-redux";
import { selectIsLoading } from "../src/redux/auth/selectors";

export const useIsLoading = () => useSelector(selectIsLoading);