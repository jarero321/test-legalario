import { Container } from "./components/Container";
import { ValidationBiometricsProvider } from "./context/validationBiometrics/context";
import Layout from "./layout/Layout";
import { ValidationBiometrics } from "./pages/ValidationBiometrics";

function App() {
  return (
    <ValidationBiometricsProvider>
      <Layout>
        <Container>
          <ValidationBiometrics />
        </Container>
      </Layout>
    </ValidationBiometricsProvider>
  );
}

export default App;
