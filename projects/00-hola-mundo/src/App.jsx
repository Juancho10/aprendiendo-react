import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
    {
        userName: "Juancho10",
        name: "Juan Lizarazo",
        isFollowing : true
    },
    {
        userName : "obsproject",
        name : "hola mundo",
        isFollowing : false
    }
]
export function App() {

    
        return(
            <section className='App'>
                {
                    users.map(({ userName, name, isFollowing}) =>(
                            <TwitterFollowCard
                                userName={userName}
                                initialIsFollowing={isFollowing}
                            >
                                {name}
                            </TwitterFollowCard>
                    ))
                }
            </section>
        );
}