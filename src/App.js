// import logo from './logo.svg';
import './App.css';
import Album from './components/Album';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Album />
      </main>
      <Footer />
    </div>
  );
}

export default App;
