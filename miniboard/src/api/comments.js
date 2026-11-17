import { API_BASE_URL } from "./config";

export async function fetchComments(postId) {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);
    if (!response.ok) {
        throw new Error("Failed to fetch comments");
    }

    const data = await response.json();
    return data.comments;
}