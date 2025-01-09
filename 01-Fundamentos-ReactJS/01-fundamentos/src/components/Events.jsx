const Events = () => {
    const handleClick = () => {
        console.log("Executou");    
    }

    // Função de renderização
    const renderSomething = (x) => {
        if(x){
            return(
                <p>Renderizando isso!</p>
            )
        } else {
            return(
                <p>Renderizando outra coisa!</p>
            )
        }
    }

    return(
        <div>
            <div>
                <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
            </div>
            <div>
                <button onClick={handleClick}>Clique aqui - com função</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events