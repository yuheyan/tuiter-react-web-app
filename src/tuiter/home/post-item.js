import React from "react";
const PostItem = (
    {
        post = {
            "avatarIcon": "elonprofile.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "content": "Amazing show about @inspiration4x mission!",
            "cardImage": "elontweet.jpg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "cardContent": "From training to lauch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "link": "netflix.com",
            "comments": "4.2K",
            "retweets": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img src={`/images/${post.avatarIcon}`} className="rounded-circle" style={{height:'50px',width:'50px'}}/>
                </div>
                <div className="col-11 ps-4">
                    <div className="row">
                        <div className="col-11">
                            <div>
                                <span className="fw-bold">
                                    {post.userName}
                                </span>
                                <span className="fa-stack" style={{fontSize:'9px'}}>
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-check fa-stack-1x fa-inverse"></i>
                                </span>
                                <span className="text-secondary">
                                    @{post.handle}
                                </span>
                                <span className="text-secondary">
                                    &nbsp;·&nbsp;{post.time}
                                </span>
                            </div>
                        </div>
                        <div className="col-1">
                            <i className="fa fa-ellipsis-h float-end text-secondary"></i>
                        </div>
                    </div>
                    <div className="pt-1">
                        {post.content}
                    </div>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-1">
                </div>
                <div className="col-11 ps-4">
                    <div className="border border-1" style={{borderRadius:'19px'}}>
                        <div>
                            <img src={`/images/${post.cardImage}`}
                                 className={`w-100 ${post.title===null?'':'border-bottom'} border-1`}
                                 style={{borderRadius: `${post.title===null?'18px 18px 18px 18px':'18px 18px 0px 0px'}`}}/>
                        </div>
                        <div className="pt-3 ps-3 pb-3" style={{display:`${post.title===null ? 'none' : ''}`}}>
                            <div>
                                {post.title}
                            </div>
                            <div className="text-secondary pt-1" style={{display:`${post.cardContent===null ? 'none' : ''}`}}>
                                {post.cardContent}
                            </div>
                            <div className="text-secondary" style={{display: `${post.link===null ? 'none' : ''}`}}>
                                <span>
                                    <i className="fa fa-link"></i>
                                </span>
                                <span>
                                    {post.link}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3 ps-3 text-secondary">
                        <div className="col-3">
                            <span>
                            <i className="fa fa-comment"></i>
                            </span>
                            <span className="ps-2">
                            {post.comments}
                            </span>
                        </div>
                        <div className="col-3">
                            <span>
                                <i className="fa fa-retweet"></i>
                            </span>
                            <span className="ps-2">
                                {post.retweets}
                            </span>
                        </div>
                        <div className="col-3">
                            <span>
                                <i className="fa fa-heart"></i>
                            </span>
                            <span className="ps-2">
                                {post.likes}
                            </span>
                        </div>
                        <div className="col-3">
                            <span>
                                <i className="fa fa-upload"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostItem;