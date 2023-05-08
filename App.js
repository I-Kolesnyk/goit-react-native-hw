import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Container from "./src/components/Container";

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
