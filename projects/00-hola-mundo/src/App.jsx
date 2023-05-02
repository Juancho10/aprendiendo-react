import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {
    return(
        <div className='App'>
            <TwitterFollowCard userName="Juancho10" name="Juan Lizarazo"/>
            <TwitterFollowCard userName="obsproject" name="App OBS"/>
        </div>
    );
}