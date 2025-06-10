import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      Buit with love.
      <FontAwesomeIcon
        icon={faHeart}
        className="footer-icon"
        aria-hidden="true"
      />
      
     
    </footer>
  );
}