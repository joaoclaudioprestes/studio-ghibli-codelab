import background from './assets/background.png';
import { Container } from "./components/container";
import { Header } from "./components/header";
import { Hero } from './components/hero';

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover bg-center min-h-screen"
    >
      <Container>
        <Header />
        <Hero />
      </Container>
    </div>
  );
}

export default App;
