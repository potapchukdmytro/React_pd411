import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ColorsPage from './pages/ColorsPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Header />
      <div className='content'>
        <MainPage />
      </div>
      <Footer />
    </>
  )
}

export default App
