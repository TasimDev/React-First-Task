import React, { useState } from 'react'
import Animal from './Animal'

const App = () => {

    const [mammal, setMammal] = useState(false);
    const [toggleAll, setToggleAll] = useState(true);
    const [toggleMammal, setToggleMammal] = useState(false);

    let toggleCheckAll = toggleAll ? 'active' : null;
    let toggleCheckMammal = toggleMammal ? 'active' : null;

    const handleClick1 = () => {
        setMammal(false)
        setToggleAll(true)
        setToggleMammal(false)
    };
    const handleClick2 = () => {
        setMammal(true)
        setToggleAll(false)
        setToggleMammal(true)
    };
    return (
        <div>
            <div className="container">
                <div className="buttons">
                    <button className={`btn ${toggleCheckAll}`} onClick={handleClick1}>All</button>
                    <button className={`btn ${toggleCheckMammal}`} onClick={handleClick2}>Mammal</button>
                </div>
                <div className="carts">
                    <Animal mammal={mammal} />
                </div>
            </div>
        </div>
    )
}

export default App