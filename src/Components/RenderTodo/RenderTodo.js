import Todo from "../../API/Todo";
import "./RenderTodo.css"
function RenderTodo(){
    const data=Todo();
    console.log(data);
   return (
    <table>
        <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th >Title</th>
              <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            {
               data.map((e)=>{
                 return(  
                 <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.userId}</td>
                        <td className="table-title">{e.title}</td>
                        <td>{e.completed?"True":"False"}</td>
                </tr>)
                })
            }
            </tbody>
    </table>
   )
}
export default RenderTodo;