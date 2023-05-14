import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {

    const juan = {userName: "Juancho10"}
    return(
        <div className='App'>
            <TwitterFollowCard {...juan}>
                Juan Lizarazo
            </TwitterFollowCard>
            <TwitterFollowCard userName="obsproject" initialIsFollowing= {true}>
                Hola Mundo
            </TwitterFollowCard>
        </div>
    );
}