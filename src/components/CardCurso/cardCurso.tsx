import Curso from "../Curso/curso"
import { courses } from "@/database"

interface functionHandle{
    handleAddItemCard: any;
}


export default function cardCurso( {handleAddItemCard} : functionHandle){
    return(
        <main>
            <section className="courses-section">
                {courses.map((curso,index) => <Curso 
                handleAddItemCard={handleAddItemCard}
                logo={curso.url} 
                title={curso.name} 
                preco={curso.price}
                key={index}/>)}
            </section>
       </main>
    )
}