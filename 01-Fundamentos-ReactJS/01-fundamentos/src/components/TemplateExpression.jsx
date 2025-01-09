const TemplateExpression = () => {
    const name = "Nícolas";

    const data = {
        age: 19,
        job: "Programador"
    }

    return(
        <div>
            <p>{"A soma de 2 + 2 é igual a " + (2 + 2)}</p>
            <h3> Bem vindo {name}</h3>
            <h4>{name} tem {data.age} anos e é um {data.job}!</h4>
        </div>
    )
}

export default TemplateExpression