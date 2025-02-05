import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { creatNewUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Successfully Registered!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const username = form.username.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    if (!terms) {
      toast.error("Please Accept Our Terms and Conditions.");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase, one lowercase, one number, one special character, and be at least 6 characters long."
      );
      return;
    }

    creatNewUser(email, password)
      .then((result) => {
        toast.success("Successfully Registered!");
        const user = result.user;
        setUser(user);
        const profile = {
          displayName: username,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            form.reset();
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-700">Register now!</h1>
            <p className="py-6 text-gray-500">
              Become a part of our mission to bring warmth and hope this winter!
              Register now to start donating warm clothing and help those in
              need. Your support can light up lives and make the season brighter
              for those who need it most. Together, we can make this winter a
              time of comfort and kindness!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body relative">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  name="username"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  name="photo"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[52px]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox" name="terms" />
                  <span className="label-text font-bold">
                    Accept Our Terms And Condition
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-gray-500">
                  Register
                </button>
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="bg-gray-400 h-10 w-10 rounded-full mx-auto my-2 flex items-center justify-center"
                >
                  <FaGoogle className="text-2xl"></FaGoogle>
                </button>
              </div>
            </form>
            <p className="text-center py-2">
              Already have an account?{" "}
              <Link className="text-blue-500" to="/auth/login">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
