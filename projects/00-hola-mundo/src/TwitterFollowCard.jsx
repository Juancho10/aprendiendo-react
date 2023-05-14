import { useState } from "react";
// Para convertir los componentes dinamicos y reutilizables se pasan los parametros en llaves ({parametros})
export function TwitterFollowCard({children, userName}){
    // hook que permite crear estados para seguir un elemento, como parametro recibe el estado en el que inicia
    /**
     * Dos formas de expresar un estado
     * const [isFollowing, setIsFollowing] = useState(false);
     * 
     * const state = useState(false);
     * const isFollowing = state[0];
     * const setIsFollowing = state[1];
     */

    
    const [isFollowing, setIsFollowing] = useState(false);
    // funcion para modificar el estado del elemento
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    console.log(setIsFollowing)
    //para modificar una url en especifico se utiliza el acento agudo para que tome la variable que colocamos asi ${variable}
    const imageSrc = `https://unavatar.io/github/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonColor = isFollowing ? 'tw-followCard-button is-following': 'tw-followCard-button';
    console.log(isFollowing)
    return(
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img className='tw-followCard-avatar' src={imageSrc} alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-userInfo'>@{userName}</span>
                </div>    
            </header>
            <aside>
                <button className={buttonColor} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}