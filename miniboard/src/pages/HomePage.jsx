import { fetchPosts } from "../api/posts";
import { useState, useEffect } from "react";
import BlogPost from "../components/BlogPost.jsx";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const thePosts = await fetchPosts()
        setPosts(thePosts)
      } catch (err) {
        console.log(err)
        setError(true)
      }
      finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  return (
    <>
      <section>
        <PostList loading={loading} error={error} posts={posts} />
      </section>

    </>
  );
}

function PostList({loading, error, posts}){
  if (loading){
    return <p className="content-loading">Posts are loading...</p>
  }

  if(error){
    return <p className="content-loading">Failed to load posts. Try again later.</p>
  }

  if(posts.length == 0){
    return <p className="content-loading">No posts available.</p>
  }

  return(
    <ul>
      {posts.map((post) => (
        <li key={(post.id)}>
          <BlogPost post ={post} />
        </li>
      ))}
    </ul>
  );
}

export default HomePage;