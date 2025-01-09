import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Nicolas", "João", "Matheus"]);

    const [users, setUsers] = useState([
        {id: 1, name:"Nicolas", idade: 19},
        {id: 2, name:"João", idade: 41},
        {id: 3, name:"Matheus", idade: 25}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => 
            prevUsers.filter((user) => randomNumber !== user.id)
        );
    }

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.idade} anos</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Deletar elemento da lista</button>
        </div>
    )
}

export default ListRender