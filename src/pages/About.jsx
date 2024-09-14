import Layout from "../Layout";
import { Link } from "react-router-dom";

function About() {
  return (
    <Layout>
      <div className="min-h-screen px-10 my-20 text-xl text-center">
        This project was developed using React JS with the help of{" "}
        <Link to="https://dictionaryapi.dev/" className="text-blue-200 underline">
          dictionaryapi.dev
        </Link>
      </div>
    </Layout>
  );
}

export default About;
