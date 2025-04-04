import axios from 'axios';
export async function fetchArticle(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error('Article not found');
        }else{
            throw new Error('An error occurred while fetching the article');
        }
    }
}