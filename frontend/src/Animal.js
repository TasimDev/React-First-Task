import React from 'react'
import animals from './constants/data'
const Animal = ({ mammal }) => {
    return (
        <div className='animals'>
            {animals.map((animal) => {
                if (mammal) {
                    if (animal.isMammal) {
                        return <div className="animal">{animal.name}</div>
                    }
                } else {
                    return <div className="animal">{animal.name}</div>
                }
                return null;
            })}

        </div>
    )
}

export default Animal