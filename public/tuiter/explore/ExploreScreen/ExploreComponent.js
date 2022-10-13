import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row mb-2">
                <div class="col-10 position-relative">
                    <input type="text" placeholder="Search Twitter" class="float-start form-control rounded-pill ps-5">
                    <i class="fa fa-magnifying-glass position-absolute wd-search-twitter"></i>
                </div>

                <div class="col-2 my-auto">
                    <a href="explore-settings.html" class="float-end">
                        <i class="fa fa-cog fa-xl"></i>
                    </a>
                </div>
            </div>

            <ul class="mb-2 nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="foryou.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div class="position-relative">
                <img src="../../images/spacex.jpg" class="img-fluid"/>
                <b class="position-absolute text-white wd-spacex wd-font-size-25">
                    SpaceX's Starship
                </b>
            </div>

            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
