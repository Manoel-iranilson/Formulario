import { Router } from "./router";
import { FormProvider } from "./contexts/FormContext";
import Theme from "./components/Theme";
import Global from "./styles/global";

function App() {
  return (
    <FormProvider>
      <Global />
      <Theme>
        <Router />
      </Theme>
    </FormProvider>
  );
}

export default App;
