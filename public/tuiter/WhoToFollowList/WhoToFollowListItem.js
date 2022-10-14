const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item">
            <div class="row">
                <div class="col-2 my-auto">
                    <img src="${who.avatarIcon}" class="rounded-circle w-100"/>
                </div>
                <div class="col-6 my-auto">
                    <div class="text-nowrap">
                        <b>
                            ${who.userName}
                        </b>
                        <span class="fa-stack wd-font-size-9">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div>
                        @${who.handle}
                    </div>
                </div>
                <div class="col-4 my-auto">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </div>
    `);
}

export default WhoToFollowListItem;