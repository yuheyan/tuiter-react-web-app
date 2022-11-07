import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "tesla.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuitContent": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars."
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img alt={""} src={`/images/${tuit.image}`} className="rounded-circle" style={{height:'50px',width:'50px'}}/>
                </div>
                <div className="col-11 ps-4">
                    <div className="row">
                        <div className="col-11">
                            <div>
                                <span className="fw-bold">
                                    {tuit.userName}
                                </span>
                                &nbsp;
                                <span className="fa-stack" style={{fontSize:'9px'}}>
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-check fa-stack-1x fa-inverse"></i>
                                </span>
                                &nbsp;
                                <span className="text-secondary">
                                    {tuit.handle}
                                </span>
                                <span className="text-secondary">
                                    &nbsp;·&nbsp;{tuit.time}
                                </span>
                            </div>
                        </div>
                        <div className="col-1">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                    </div>
                    <div className="pt-1">
                        {tuit.tuitContent}
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>

        </div>
    );
};
export default TuitItem;