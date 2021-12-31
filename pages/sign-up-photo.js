import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { getGameCategory } from "../services/player";
import { setSignUp } from "../services/auth";

const SignUpPhoto = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("/icon/upload.svg");
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });

  const getGameCategoryApi = useCallback(async () => {
    const data = await getGameCategory();
    setCategories(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  const onSubmit = async () => {
    const getLocalForm = await localStorage.getItem("user-form");
    const form = JSON.parse(getLocalForm);
    const data = new FormData();

    if (image) data.append("image", image);
    data.append("email", form.email);
    data.append("name", form.name);
    data.append("password", form.password);
    data.append("username", form.name);
    data.append("phoneNumber", "08123456789");
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    const response = await setSignUp(data);
    if (response.error) toast.error(response.message);
    else {
      toast.success("Successful Registration");
      router.push("/sign-up-success");
      localStorage.removeItem("user-form");
    }
  };

  useEffect(() => getGameCategoryApi(), []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    setLocalForm(JSON.parse(getLocalForm));
  }, []);

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form>
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20 d-none">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <Image
                      src={imagePreview}
                      width={120}
                      height={120}
                      className="img-upload"
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
                      setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  defaultValue={favorite}
                  onChange={(e) => setFavorite(e.target.value)}
                >
                  {categories.map((category) => {
                    return (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="button-group d-flex flex-column mx-auto">
              <button
                type="button"
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                onClick={onSubmit}
              >
                Create My Account
              </button>
              <Link href="/">
                <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15">
                  Terms & Conditions
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpPhoto;
