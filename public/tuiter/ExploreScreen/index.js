import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";


function exploreComponent() {
    $('#wd-explore').append(`
<!--        <h2>Explore</h2>-->

        <div class="row mt-2">
        <div class="col-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('explore')}
        </div>

        <div class="col-10 col-lg-7 col-xl-6">
            ${ExploreComponent()}
        </div>

        <div class="col-lg-4 col-xl-4 d-none d-lg-block">
            ${WhoToFollowList()}
        </div>
    </div>
   `);
}

$(exploreComponent);