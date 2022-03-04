import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layouts/AppLayout';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Search } from './routes/Search';
import { Home } from './routes/home';

function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/search/:word" element={<Search />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
