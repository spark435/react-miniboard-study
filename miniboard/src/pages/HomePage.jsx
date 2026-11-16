// src/pages/HomePage.jsx
function HomePage() {
  return (
    <>
      <section className="container">
        <h1>Miniboard</h1>
        <p>글을 읽고 댓글을 살펴보는 작은 게시판.</p>
      </section>
      <section className="container post-section">
        <PostList isLoading={isLoading} isError={isError} posts={posts} />
      </section>
    </>
  );
}

export default HomePage;