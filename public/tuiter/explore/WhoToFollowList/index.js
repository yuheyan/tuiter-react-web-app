import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
    <div class="list-group">
        <b class="list-group-item">
            Who to follow
        </b>
        ${who.map(item => WhoToFollowListItem(item)).join('')}
    </div>
    `);
}

export default WhoToFollowList;