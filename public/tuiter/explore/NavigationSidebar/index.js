const NavigationSidebar = () => {
    return (`
    <div class="list-group mb-2">
        <a href="#" class="list-group-item list-group-item-action d-flex d-xl-block justify-content-center text-nowrap">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex d-xl-block justify-content-center text-nowrap">
            <i class="fa fa-home"></i>
            <span class="d-none d-xl-inline">Home</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action active d-flex d-xl-block justify-content-center text-nowrap">
            <i class="fa fa-hashtag"></i>
            <span class="d-none d-xl-inline">Explore</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex d-xl-block justify-content-center text-nowrap">
            <i class="fa fa-bell"></i>
            <span class="d-none d-xl-inline">Notifications</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex d-xl-block justify-content-center text-nowrap">
            <i class="fa fa-envelope"></i>
            <span class="d-none d-xl-inline">Messages</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex d-xl-block justify-content-center text-nowrap">
            <i class="fa fa-bookmark"></i>
            <span class="d-none d-xl-inline">Bookmarks</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex d-xl-block justify-content-center text-nowrap">
            <i class="fa fa-list"></i>
            <span class="d-none d-xl-inline">Lists</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex d-xl-block justify-content-center text-nowrap">
            <i class="fa fa-user"></i>
            <span class="d-none d-xl-inline">Profile</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex d-xl-block justify-content-center text-nowrap">
            <span class="fa-stack fa-2xs">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-ellipsis fa-stack-1x fa-inverse"></i>
            </span>
            <span class="d-none d-xl-inline">More</span>
        </a>
    </div>
    <button class="btn btn-primary rounded-pill w-100 wd-tweet-button">Tweet</button>       
    `);
}

export default NavigationSidebar;


