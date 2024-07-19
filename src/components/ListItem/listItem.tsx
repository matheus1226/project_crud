import { useState} from 'react';

interface ListItemProps {
    description: string;
    status: boolean;
    handleClickDelete: any;
}

export default function listItem({ description, status, handleClickDelete }: ListItemProps) {

    // const [description, setDescription] = useState<any>("")
    const [done, setDone]= useState<boolean>(false);

    // useEffect(()=>({
    //     setDescription(props.description)
    //     setStatus(props.status)
    // }),[])

    function handleClick(){
       setDone(prevState => !prevState);
     }

    
    return(
        <div className="p-4 border-b border-gray-200 ">
            <label className="block text-lg font-semibold mb-2">{description}</label>
            <label className={`m-4 block text-sm ${done ? 'text-green-500' : 'text-red-500'} 
                mb-2`}>
                {done ? 'Eu sou legal' : 'Eu sou chato'}
            </label>
            <button
                onClick={handleClick}
                className="px-4 py-2 m-4 bg-blue-500 text-white rounded
                 hover:bg-blue-600 focus:outline-none focus:ring-2
                  focus:ring-blue-300"
            >
                Mudar
            </button>
            <button className="px-4 py-2 m-4 bg-blue-500 text-white rounded
                 hover:bg-blue-600 focus:outline-none focus:ring-2
                  focus:ring-blue-300" onClick={handleClickDelete}>Apagar</button>
        </div>
    );
}