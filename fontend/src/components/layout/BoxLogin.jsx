import { useState } from "react";

function BoxLogin() {
  let [bodyLogin, setNewAccount] = useState({
    user_email: "",
    password: "",
  });
  let [showPass, setShowPass] = useState(false);
  const handleSubmit = () => {
    fetch(`http://localhost:8000/api/v1/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyLogin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          console.log("chuyendentrangdangnhap");
        } else {
          console.log("Kiem tra thong tin dang ky");
        }
      })
      .catch((err) => console.log(err));
  };
  const showPassword = () => {
    setShowPass(!showPass);
  };
  const handleInput = (e) => {
    setNewAccount({ ...bodyLogin, [e.target.name]: e.target.value });
  };
  const validateBody = () => {
    if (!bodyLogin.user_email || !bodyLogin.password) {
      console.log("nhap day du thong tin");
    } else {
      handleSubmit();
    }
  };
  return (
    <div className="boxLogin">
      <img className="logo" src="/assits/image/Pinterest-logo.png" alt="logo" />
      <h4>Welcome to Pinterest</h4>
      <h6>Find new ideas to try</h6>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="user_email"
          placeholder="Email"
          value={bodyLogin.user_email}
          onInput={(e) => handleInput(e)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Create a password"
          onInput={(e) => handleInput(e)}
          value={bodyLogin.password}
        />
        <i onClick={showPassword} class="fa-solid fa-eye"></i>
      </div>
      <button onClick={validateBody}>Continue</button>
      <h5>OR</h5>
      <button className="btnLoginWFb">Continue with Facebook</button>
      <button className="btnLoginWGg">Continue with Google</button>
      <p className="text">By continuing, you agree to Pinterest's</p>
      <p className="text">
        <span>Terms of Service</span> and acknowledge you've read our
      </p>
      <span>Privacy Policy.Notice at collection</span>
      <p className="text">
        Bạn đã là thành viên?<span> Chưa tham gia Pinterest? Đăng ký</span>
      </p>
    </div>
  );
}

export default BoxLogin;
