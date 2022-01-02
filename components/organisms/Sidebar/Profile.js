import Image from "next/image";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const Profile = () => {
  const [user, setUser] = useState({
    avatar: "/img/default.png",
    name: "",
    email: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const { player } = payload;
      player.avatar = player.avatar ? player.avatar : "/img/default.png";
      setUser(player);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={user.avatar}
        width={90}
        height={90}
        className="img-fluid rounded-circle mb-20"
        alt={user.name}
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
};

export default Profile;
