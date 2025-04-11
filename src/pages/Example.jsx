import { useState } from "react";

const Example = () => {
  const [userList, setUserList] = useState([
    {firstName: 'Vanya', lastName: 'Solovyev', age: 26, id:1},
    {firstName: 'Igor', lastName: 'Kondrat', age: 32, id:2}
  ]);

  const [newUserFirstName, setNewUserFirstName] = useState();
  const [newUserLastName, setNewUserLastName] = useState();
  const [newUserAge, setNewUserAge] = useState();

  const deleteUser = (id) => {
    setUserList(userList.filter(elem => elem.id !== id))
  };

  const stateNewUser = (e) => {
    if (e.target.name === 'firstName') {
        setNewUserFirstName(e.target.value)
    } else if (e.target.name === 'lastName'){
        setNewUserLastName(e.target.value)
    } else {
        setNewUserAge(e.target.value)
    }
  };
  
  const addUser = () => {
    const getId = userList[userList.length - 1].id;
    setUserList([...userList, {firstName:newUserFirstName, lastName:newUserLastName, age:newUserAge, id: getId + 1}]);
    setNewUserFirstName('');
    setNewUserLastName('');
    setNewUserAge('');
  };

  console.log(userList);

  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} {user.age}
            <button onClick={() => deleteUser(user.id)}>Удалить пользователя</button>
          </li>     
        ))}
      </ul>

      <input name="firstName" onChange={(e) => stateNewUser(e)} value={newUserFirstName} type="text" placeholder="Введите имя"/>
      <input name="lastName" type="text" onChange={(e) => stateNewUser(e)} value={newUserLastName} placeholder="Введите фамилию"/>
      <input name="age" type="text" onChange={(e) => stateNewUser(e)} value={newUserAge} placeholder="Введите возраст"/>
      
      <button onClick={() => addUser()}>Добавить пользователя</button>
    </div>
  );
};

export default Example;
