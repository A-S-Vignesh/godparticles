import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Service from './components/Service';
import ClientReview from './components/ClientReview';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Service />
      <ClientReview />
      <Footer />
    </div>
  );
}

export default App;
