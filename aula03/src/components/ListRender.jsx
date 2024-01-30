import { useState } from "react";

const ListRender = () => {
 
  const [list] = useState(["Marcel", "Matheus", "Pedro"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Marcel", age: 20 },
    { id: 2, name: "Matheus", age: 21 },
    { id: 3, name: "Pedro", age: 22 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) => {
        return prevUsers.filter((user) => user.id !== randomNumber);
    })
  };
  return (
    <div>           
      <ul>
        {/* Similar ao foreach */}
        {list.map((item, index) => (
          // index normalmente é usado como uma primary key
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar usúario aleatório</button>
    </div>
  );
};

export default ListRender;
