import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Input from "../../components/atoms/Input";
import Sidebar from "../../components/organisms/Sidebar";
import { updateProfile } from "../../services/member";

const EditProfile = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    avatar: "/img/default.png",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async () => {
    const data = new FormData();
    if (user.avatar !== "/img/default.png") data.append("image", user.avatar);
    data.append("name", user.name);
    const response = await updateProfile(data, user.id);
    if (response.error) toast.error(response.message);
    else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };

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
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form>
              <div className="photo d-flex">
                <div className="image-upload d-none">
                  <label htmlFor="avatar">
                    <Image
                      src={imagePreview ? imagePreview : user.avatar}
                      width={90}
                      height={90}
                      className="rounded-circle"
                      alt="Upload"
                    />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      const img = e.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  title="full name"
                  label="name"
                  value={user.name}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="pt-30">
                <Input
                  title="email address"
                  label="email"
                  type="email"
                  value={user.email}
                  disabled
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default EditProfile;
