import React from 'react'
import { pets } from '../Util/const'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>Vetinary Science</h1>
            </div>

            <div className="pets">
                    {pets.map((pet) => {
                        const { name, age, id, img } = pet;
                        const { favoriteColor } = pet.personality
                        
                        return (
                            <div className={`${name} pet`} style={{background: favoriteColor}} key={id}>
                                <h3>{name}</h3>
                                <img src={img} alt={name} />
                                <p>{age} old</p>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Home
