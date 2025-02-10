import UserList from "../../components/UsersList";
import { useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 0,
      firstName: "User0",
      lastName: "Userenko0",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
      isMale: true,
      email: "userUserenko0@example.com",
      password: "supersecurepassword123",
    },
    {
      id: 1,
      firstName: "User1",
      lastName: "Userenko1",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
      isMale: false,
      email: "userUserenko1@example.com",
      password: "supersecurepassword123",
    },
    {
      id: 2,
      firstName: "User2",
      lastName: "Userenko2",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
      isMale: true,
      email: "userUserenko2@example.com",
      password: "supersecurepassword123",
    },
    {
      id: 3,
      firstName: "User3",
      lastName: "Userenko3",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
      isMale: true,
      email: "userUserenko3@example.com",
      password: "supersecurepassword123",
    },
  ]);

  const handleDeleteUser = (id) => {
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newUsers);
  };

  return (
    <div>
      <h2>Users Page</h2>
      <UserList users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default UsersPage;
