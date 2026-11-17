import { Link } from "react-router";

function BlogPost({ post }){
    return (
        <section className="blog-post">
            <Link to={`/posts/${post.id}`}>
                <h1>{post.title}</h1>
            </Link>
            <p>{post.body}</p>
        </section>
    );
}

export default BlogPost;