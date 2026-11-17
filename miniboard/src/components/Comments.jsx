import { fetchComments } from "../api/comments.js";
import { useState, useEffect } from "react";

function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadComments = async () => {
          try {
            const theComments = await fetchComments(postId);
            setComments(theComments);
          } catch (err) {
            console.log(err);
            setError(true);
          }
          finally {
            setLoading(false);
          }
        }
    
        loadComments();
      }, [postId]);
    
    return (
        <>
          <section>
            <h1>Comments</h1>
            <CommentList isLoading={loading} isError={error} comments={comments} />
          </section>
        
        </>
    );
    
}


function CommentList({loading, error, comments}){
  if (loading){
    return <p>Comments are loading...</p>;
  }

  if(error){
    return <p>Failed to load comments. Try again later.</p>;
  }

  if(comments.length == 0){
    return <p>No comments available.</p>;
  }

  return(
    <ul>
      {comments.map((comment) => (
        <li key={(comment.id)} className="comments">
            <p className="comment-body">{comment.body}</p>
            <p className="comment-author">{comment.user.username}</p>
        </li>
      ))}
    </ul>
  );
}

export default Comments;