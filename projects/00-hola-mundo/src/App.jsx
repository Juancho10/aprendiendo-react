import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {

    const juan = {isFollowing: true, userName: "Juancho10"}
    return(
        <div className='App'>
            <TwitterFollowCard {...juan}>
                Juan Lizarazo
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="obsproject">
                Hola Mundo
            </TwitterFollowCard>
        </div>
    );
}