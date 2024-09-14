import Layout from "../Layout";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <Layout>
      <div className="min-h-screen px-10 my-20 text-xl text-center">
        Feel free to contact me through my email{" "}
        <Link to="mailto:hkosaimi@gmail.com" className="text-blue-200 underline">
          hkosaimi@gmail.com
        </Link>
      </div>
    </Layout>
  );
}

export default Contact;
