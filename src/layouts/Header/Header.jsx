import { useLocation, useNavigate, Link } from "react-router";
import "./header.scss";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageName = location.pathname.split("/").pop();
  const displayName = pageName ? pageName : "Accueil";

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="header">
      {displayName !== "Accueil" && (
        <a onClick={handleGoBack}>
          <img
            className="header__arrowToLeft"
            src="/latest.png"
            alt="Retour"
          />
        </a>
      )}
      <div className="header__titleContainer">
        <h1 className="header__title">{displayName}</h1>
        {displayName === "Accueil" && (
          <Link to="/contact">
            <button>
              <span className="transition"></span>
              <span className="gradient"></span>
              <span className="label">Contact</span>
            </button>
          </Link>

        )}
      </div>
    </div>
  );
}