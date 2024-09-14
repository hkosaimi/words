import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="text-center my-5">
        Designed by{" "}
        <Link to="https://github.com/hkosaimi" className="font-mono">
          hkosaimi
        </Link>
      </div>
    </>
  );
}

export default Footer;
