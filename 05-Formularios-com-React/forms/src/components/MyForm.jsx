import './MyForm.css';
import { useState } from 'react';

const MyForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role);

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome: </span>
                <input 
                type="text" 
                name='name' 
                placeholder='Digite o seu nome' 
                onChange={handleName}
                value={name}/>
            </label>

            <label>
                <span>E-mail: </span>
                <input 
                type="text" 
                name='email' 
                placeholder='Digite o seu e-mail'
                onChange={(e) => {setEmail(e.target.value)}}
                value={email}/>
            </label>
            
            <label>
                <span>Bio: </span>
                <textarea 
                name="bio" 
                placeholder='Descrição do usuário'
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                ></textarea>
            </label>

            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="adm">Administrador</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm