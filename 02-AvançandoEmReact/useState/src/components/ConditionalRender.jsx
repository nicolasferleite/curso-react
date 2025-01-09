const ConditionalRender = () => {
    const x = true;

    const name = "Nicolas";

    return (
        <div>
            <h3>Isso será exibido?</h3>
            { x && <p>oi</p>}

            {name === "João" ? (<div>
                <p>Olá João!</p>
            </div>): (<div>
                <p>Nome não encontrado!</p>
            </div>)}
        </div>
    );
};

export default ConditionalRender