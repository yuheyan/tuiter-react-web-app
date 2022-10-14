const PostItem = post => {
    return(`
        <div class="list-group-item bg-body">
      <div class="row">
        <div class="col-1">
          <img src="${post.avatarIcon}" class="rounded-circle" style="height: 50px; width:50px;">
        </div>
        <div class="col-11 ps-4">
          <div class="row">
            <div class="col-11">
            <div>
            <span class="fw-bold">
              ${post.userName}
            </span>
            <span class="fa-stack wd-font-size-9">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-check fa-stack-1x fa-inverse text-black"></i>
            </span>
            <span class="text-secondary">
              @${post.handle}
            </span>
            <span class="text-secondary">
               · ${post.time}
            </span>
            </div>
            </div>
            <div class="col-1">
              <i class="fa fa-ellipsis float-end text-secondary"></i>
            </div>
          </div>
          <div class="pt-1">
            ${post.content}
          </div>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-1">
        </div>
        <div class="col-11 ps-4">
          <div class="border border-light border-2" style="border-radius: 20px;">
            <div>
              <img src="${post.cardImage}" class="w-100 ${post.title===null?'':'border-bottom'} border-light border-2" 
              style="border-radius: ${post.title===null?'20px 20px 20px 20px':'20px 20px 0px 0px'};">
            </div>
            <div class="pt-3 ps-3 pb-3" style="display: ${post.title===null ? 'none' : ''};">
              <div>
                ${post.title}
              </div>
              <div class="text-secondary pt-1" style="display: ${post.cardContent===null ? 'none' : ''};">
                ${post.cardContent}
              </div>
              <div class="text-secondary style="display: ${post.link===null ? 'none' : ''};"">
              <span>
                <i class="fa fa-link">
                </i>
              </span>
                <span>
                ${post.link}
              </span>
              </div>
            </div>
          </div>
          <div class="row pt-3 ps-3 text-secondary">
            <div class="col-3">
              <span>
                <i class="far fa-comment">
                </i>
              </span>
              <span class="ps-2">
                ${post.comments}
              </span>
            </div>
            <div class="col-3">
              <span>
                <i class="fa fa-retweet"></i>
              </span>
              <span class="ps-2">
                ${post.retweets}
              </span>
            </div>
            <div class="col-3">
              <span>
                <i class="far fa-heart">
                </i>
              </span>
              <span class="ps-2">
                ${post.likes}
              </span>
            </div>
            <div class="col-3">
              <span>
                <i class="fa fa-upload">
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `);
}

export default PostItem;