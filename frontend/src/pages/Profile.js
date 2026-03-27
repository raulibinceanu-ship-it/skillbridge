import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("https://dusty-pen-raulskillbridge-b4b08f51.koyeb.app/api/users/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => console.log("Errore user"));
  }, []);

  if (!user) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Profile</h1>

      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Created at:</b> {user.createdAt}
      </p>
    </div>
  );
}

export default Profile;
