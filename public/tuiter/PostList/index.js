import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
    <div class="list-group">
        ${posts.map(item => PostItem(item)).join('')}
    </div>
    
    `);
}

export default PostList;