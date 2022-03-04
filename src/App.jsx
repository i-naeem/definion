import { AppLayout } from './components/layouts/AppLayout';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

function App() {
  return (
    <AppLayout>
      <Header />
      <main>
        <h1>Hello World!</h1>
      </main>
      <Footer />
    </AppLayout>
  );
}

export default App;
