import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type User from "./types/User";

export default function UserPage(): JSX.Element {
  const { userId } = useParams();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function loadUser(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/users/${userId}`);
      const obj = await res.json();
      setUser(obj);
    }
    loadUser();
  }, [userId]);

  

  return (
    <>
      {user && (
        <div style={{ border: "solid black 2px", margin: "10px" }} key={user.id}>
          <div>Ник:{user.username}</div>
          <div>
            Имя,фамилия:{user.name.firstname} {user.name.lastname}
          </div>
          <div>Телефон:{user.phone}</div>
          <div>Емайл:{user.email}</div>
          <div>Zip-code: {user.address.zipcode}</div>
          <Link to="../userspage">К списку пользователей</Link>
        </div>
      )}
    </>
  );
}
