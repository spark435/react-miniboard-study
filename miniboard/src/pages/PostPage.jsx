import { useEffect, useState } from "react";
import { fetchPostId } from "../api/posts.js";
import Comments from "../components/Comments.jsx";
import { useParams } from "react-router";

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const thePost = await fetchPostId(id);
                setPost(thePost);
            } catch (err) {
                console.log(err);
                setError(true);
            }
            finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [id]);

    return (
        <section>
            <div>
                <PostContent loading={loading} error={error} post={post} />
            </div>
        </section>
    );
}

function PostContent({ loading, error, post }) {
    if (loading) {
        return <p className="content-loading">Post is loading...</p>;
    }
    if (error) {
        return <p className="content-loading">Failed to load post. Try again later.</p>;
    }
    if (!post) {
        return <p className="content-loading">Post not found.</p>;
    }

    return (
        <>
            <article className="post-content">
                <h1 className="blog-title">{post.title}</h1>
                <p>{post.body}</p>
            </article>
            <div className="post-comments">
                <Comments key={post.id} postId={post.id} />
            </div>
        </>
    );
}

export default PostPage;