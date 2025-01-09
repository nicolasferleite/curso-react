import { useState } from 'react'

const Data = () => {
    const [cont, setCont] = useState(0);

    const incrementar = () => {
        if(cont < 10){
            setCont(cont + 1)
        }
    }

    const decrementar = () => {
        if(cont > 0){
            setCont(cont - 1)
        }
    }

    return (
        <div className='contador'>
            <p>Contador: {cont} (min 0, max 10)</p>
            <div className="buttons">
                <button onClick={incrementar}>Aumentar</button>
                <button onClick={decrementar}>Diminuir</button>
            </div>
        </div>
    )
}

export default Data