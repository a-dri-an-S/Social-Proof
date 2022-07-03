import SocialMain from './components/SocialMain';
import './styles/App.css';

function App() {
  return (
    <main className="App">
        <div className="bg-desktop-top"/>
        <div className="bg-mobile-top"/>
        <SocialMain />
        <div className="bg-mobile-bottom"/>
        <div className="bg-desktop-bottom"/>
    </main>
  );
}

export default App;
