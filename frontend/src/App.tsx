import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Coaching from './pages/Coaching';
import Training from './pages/Training';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Container from './components/common/Container';

function NotFound() {
  return (
    <Container>
      <div style={{ padding: 'var(--space-24) 0', textAlign: 'center' }}>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </Container>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/coaching" element={<Coaching />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
