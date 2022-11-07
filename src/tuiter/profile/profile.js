import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const DisplayProfileComponent = () => {
    const profile = useSelector(
        (state) => state.profile);
    return (
        <div>
            <div className="row">
                <div className="col-2 my-auto mx-auto">
                    <i className="fa fa-arrow-left ms-2 fs-5"></i>
                </div>
                <div className="col-10">
                    <div className="fw-bold fs-4">
                        {profile.name}
                    </div>
                    <div className="text-secondary fs-6">
                        {profile.tuitsCount} Tweets
                    </div>
                </div>
            </div>
            <img className="w-100" alt={""} src={`/images/${profile.bannerPicture}`}/>
            <img alt={""} className="rounded-circle w-25 ms-2" style={{position:'relative',bottom:'70px'}} src={`/images/${profile.profilePicture}`}/>
            <Link to="../edit-profile">
                <button className="rounded-pill float-end btn btn-light border border-dark mt-3 fw-bold">Edit Profile</button>
            </Link>
            <div style={{position:'relative',bottom:'40px'}} className="ms-2">
                <div className="fw-bold fs-4">
                    {profile.name}
                </div>
                <div className="text-secondary">
                    {profile.handle}
                </div>
                <div className="mt-3 mb-3">
                    {profile.bio}
                </div>
                <div className="row text-secondary">
                    <div className="col-4">
                        <i className="bi bi-geo-alt"></i> {profile.location}
                    </div>
                    <div className="col-4">
                        <i className="bi bi-balloon-heart"></i> Born {profile.dateOfBirth}
                    </div>
                    <div className="col-4">
                        <i className="bi bi-calendar-check"></i> Joined {profile.dateJoined}
                    </div>
                </div>
                <div className="row mt-2 fs-6 text-secondary">
                    <div className="col-3">
                        <span className="fw-bold text-black">{profile.followingCount}</span> Following
                    </div>
                    <div className="col-9">
                        <span className="fw-bold text-black">{profile.followersCount}</span> Followers
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DisplayProfileComponent;