import {useEffect,useState} from 'react';
function Todo(){
    const [todo, setTodo] = useState([]);
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos") 
          .then(res =>{return res.json()} )
          .then(data => setTodo(data))
      }, []);
      return todo;
};
export default Todo;