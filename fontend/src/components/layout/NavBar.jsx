import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  const navigatePage = (link) => {
    navigate(link);
  };
  return (
    <div className="navBar">
      <div>
        <img
          className="logo"
          src="/assits/image/Pinterest-logo.png"
          alt="logo"
        />
        <button className="btnHome" onClick={() => navigatePage("/")}>
          Trang chủ
        </button>
        <button className="btnCreate" onClick={() => navigatePage("/create")}>
          Tạo v
        </button>
      </div>
      <div>
        <input type="text" placeholder="Search...." />
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
      </div>
      <div>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-brands fa-facebook-messenger"></i>
      </div>
      <div>
        <img className="avata" src="" alt="" />
      </div>
    </div>
  );
}

export default NavBar;
