import profilePic from './assets/ibtesam.jpg'

function Card() {
    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt='profile picture'></img>
            <h2 className='card-title'>Ibtesam</h2>
            <p className='card-para'>I recently learn JavaScript, Now I'm learning React</p>
        </div>
    );
}

export default Card;