import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { faHeart as faHeartR} from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {updateTuitThunk } from "../../services/tuits-thunks";
// import {likeToggle} from "./tuits-reducer";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    // const likeClickHandler = () => {
    //     dispatch(likeToggle(tuit))
    // }
    return (
        <div className="row pt-3 ps-3 text-secondary">
            <div className="col-2">
                <span><FontAwesomeIcon icon={faComment} /></span>
                <span className="ps-2">{tuit.replies}</span>
            </div>
            <div className="col-2">
                <span><i className="fa fa-retweet"></i></span>
                <span className="ps-2">{tuit.retuits}</span>
            </div>
            <div className="col-3" onClick={() => dispatch(updateTuitThunk({...tuit, liked: !(tuit.liked),likes: tuit.likes + 1}))}>
                <span><i className="fa fa-heart text-danger"></i></span>
                <span className="ps-2">{tuit.likes}</span>
            </div>
            <div className="col-3" onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))}>
                <i className="bi bi-hand-thumbs-down-fill me-2 text-danger"></i>
                <span className="ps-2">{tuit.dislikes}</span>
            </div>
            <div className="col-2">
                <span><FontAwesomeIcon icon={faShareSquare} /></span>
            </div>
        </div>
    )
}

export default TuitStats;