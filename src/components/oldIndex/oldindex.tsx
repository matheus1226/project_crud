import React, { useState, useEffect } from 'react';
import ListItem from '@/src/components/ListItem/listItem';

interface Todo {
    id: number;
    description: string;
    status: boolean;
}

export default function(){
    const [userData, setUserData] = useState<any>({})
    const [newDescription, setNewDescription] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, description: "Aprender a matar", status: true },
        { id: 2, description: "Aprender comprar maça", status: false },
        { id: 3, description: "Aprender coletar moedas", status: true }
    ]);
    const [idCounter, setIdCounter] = useState<number>(4);

    useEffect(()=>{
        receiveApi('matheus1226')
    },[]);

    async function receiveApi(userName : string){
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const data  = await response.json()
        setUserData(data)
    }


    function handleCheckLength(){
        if(todos.length === 5){
            alert("Número máximo de ToDos atingido!")
        }
        
    }

    const handleClick = () => {
        const newTodo: Todo = { id: idCounter, description: newDescription, status: true };
        setTodos([...todos, newTodo]);
        setNewDescription("");
        setIdCounter(idCounter + 1);
    };

    const handleClickDelete = (todoToDelete: Todo) => {
        const filteredTodos = todos.filter(todo => todo.id !== todoToDelete.id);
        setTodos(filteredTodos);
    };

    return (
        <div className="max-w-3xl 
                        mx-auto 
                        mt-8 p-4">
            <h1>Olá: {userData.login}</h1>
            <input
                type="text"
                className="w-full px-4 py-2 border 
                border-gray-300 rounded mb-4"
                placeholder="Insira novo ToDo"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
            />
            <button
                onClick={handleClick}
                className="px-4 py-2 
                bg-blue-500 
                text-white rounded 
                hover:bg-blue-600 
                focus:outline-none focus:ring-2 
                focus:ring-blue-300"
            >
                Inserir
            </button>
            <div className="mt-4">
                {todos.length === 0 && <h1>Não há nenhum ToDo</h1>}
                {todos && todos.map((todo) => (
                    <div key={todo.id} className="m-4 p-4 border 
                    border-gray-300 rounded">
                        <ListItem 
                            handleClickDelete={() => handleClickDelete(todo)}  
                            description={todo.description} 
                            status={todo.status} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};