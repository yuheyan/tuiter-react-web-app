const PostSummaryItem = (post) => {
    return (`
    <div class="list-group-item">
        <div class="row">
            <div class="col-9">
                <div class="text-secondary">
                    ${post.topic}
                </div>
                <div>
                    <b>${post.userName}</b>
                    <span class="fa-stack wd-font-size-9">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-check fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="text-secondary">
                    - ${post.time}
                    </span>
                </div>
                <b>
                    ${post.title}
                </b>
                <div class="text-secondary">
                     ${post.tweets}
                </div>
            </div>
            <div class="col-3 my-auto">
                <img src="${post.image}" class="img-fluid">
            </div>

        </div>
    </div>
    `);
}
export default PostSummaryItem;