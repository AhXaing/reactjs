import "./Layout.css";
import imgSrc from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  const RouteList = (routeName) => {
    navigate(routeName);
  };
  return (
    <div className="mainLayout">
      <div className="manageLogo">
        <img src={imgSrc} />
        <h1>Best Shopping</h1>
      </div>
      <div>
        <ul>
          <li onClick={() => RouteList("/")}>Home</li>
          <li onClick={() => RouteList("/about")}>About</li>
          <li onClick={() => RouteList("/product")}>Product</li>
          <li onClick={() => RouteList("/customer")}>Customer</li>
          <li onClick={() => RouteList("/category")}>Category</li>
          <li onClick={() => RouteList("/login")}>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
