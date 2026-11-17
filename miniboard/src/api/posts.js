import { API_BASE_URL } from "./config";

export async function fetchPosts() {
    const response = await fetch(`${API_BASE_URL}/posts?limit=10`);
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data.posts;

}

export async function fetchPostId(id){
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    if (response.status === 404) {
        return null;
    }
    if (!response.ok) {
        throw new Error("Failed to fetch post");
    };

    return response.json();
}