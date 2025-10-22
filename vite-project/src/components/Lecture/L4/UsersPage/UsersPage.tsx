import { useEffect, useState, type JSX } from "react";
import type User from "./types/User";

export default function UsersPage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  async function loadUser(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const arr = await res.json();
    setUsers(arr);
  }     

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div>
      <ul>      
        {users.map((user) => (
          <li
            style={{ border: "solid black 2px", margin: "10px" }}
            key={user.id}
          >
            <div>Ник:{user.username}</div>
            <div>
              Имя,фамилия:{user.name.firstname} {user.name.lastname}
            </div>
            <div>Телефон:{user.phone}</div>
            <div>Емайл:{user.email}</div>
            <div>Zip-code: {user.address.zipcode}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
// 