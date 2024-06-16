import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../components";

const RootLayout = () => {
  const navigate = useNavigate();
  const redirectToHome = () => navigate("/");
  return (
    <div>
      <Header handleClick={redirectToHome}/>
      <Outlet />
    </div>
  );
}

export default RootLayout;