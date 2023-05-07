// Para convertir los componentes dinamicos y reutilizables se pasan los parametros en llaves ({parametros})
export function TwitterFollowCard({children, userName, name, isFollowing}){
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
                <button className={buttonColor}>
                    {text}
                </button>
            </aside>
        </article>
    );
}