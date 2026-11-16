// src/pages/HomePage.jsx
import { Link } from "react-router";

function HomePage() {
  return (
    <section>
      <h1>게시글 목록</h1>
      <Link to="/posts/1">1번 게시글</Link>
    </section>
  );
}

export default HomePage;