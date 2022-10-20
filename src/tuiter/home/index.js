import React from "react";
import postsArray from './posts.json';
import PostItem from "./post-item";

const HomeComponent = () => {
    return(
        <div className="list-group">
            {
                postsArray.map(post => <PostItem key={post._id} post={post}/> )
            }
        </div>
    );
};
export default HomeComponent;