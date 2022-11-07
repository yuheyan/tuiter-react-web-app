import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {updateProfile} from "../profile/profile-reducer"

const EditProfileComponent = () => {
    const dispatch = useDispatch();
    const initProfile = useSelector(state => state.profile)
    let [profile, setProfile] = useState(initProfile);
    const onChange = (event) => {
        setProfile({
            ...profile,
            [event.target.name]: event.target.value
        })
    };
    const onSave = () => {
        var name = document.getElementById("name").value;
        var bio = document.getElementById("bio").value;
        var location = document.getElementById("location").value;
        var website = document.getElementById("website").value;
        var dateOfBirth = document.getElementById("dateOfBirth").value;
        const a = [name, bio, location, website, dateOfBirth];
        dispatch(updateProfile(a));
    }
    return (
        <div>
            <div className="row">
                <div className="col-1 my-auto fs-4">
                    <Link to="../profile"><i className="fa fa-times text-black"></i></Link>
                </div>
                <div className="col-9 fw-bold fs-4">
                    Edit profile
                </div>
                <div className="col-2">
                    <Link to="../profile">
                        <button className="rounded-pill float-end btn btn-dark fw-bold"
                        onClick={() => {onSave();}}>Save</button>
                    </Link>
                </div>
            </div>
            <img className="w-100 mt-3" alt={""} src={`/images/${profile.bannerPicture}`}/>
            <img alt={""} className="rounded-circle w-25 ms-2" style={{position:'relative',bottom:'70px'}} src={`/images/${profile.profilePicture}`}/>
            <div style={{position:'relative',bottom:'40px'}} className="ms-2">
                <div className="form-group border">
                    <label htmlFor="name" className="form-label mt-2 ms-3 text-secondary">Name</label>
                    <input type="text"
                           className="form-control border-0 ms-1 w-75"
                           id="name"
                           name="name"
                           value={profile.name}
                           onChange={event=>onChange(event)}
                    />
                </div>
                <div className="form-group border mt-3">
                    <label htmlFor="bio" className="form-label mt-2 ms-3 text-secondary">Bio</label>
                    <input type="text"
                           className="form-control border-0 ms-1 w-75"
                           id="bio"
                           name="bio"
                           value={profile.bio}
                           onChange={event=>onChange(event)}
                    />
                </div>
                <div className="form-group border mt-3">
                    <label htmlFor="location" className="form-label mt-2 ms-3 text-secondary">Location</label>
                    <input type="text"
                           className="form-control border-0 ms-1 w-75"
                           id="location"
                           name="location"
                           value={profile.location}
                           onChange={event=>onChange(event)}
                    />
                </div>
                <div className="form-group border mt-3">
                    <label htmlFor="website" className="form-label mt-2 ms-3 text-secondary">Website</label>
                    <input type="text"
                           className="form-control border-0 ms-1 w-75"
                           id="website"
                           name="website"
                           value={profile.website}
                           onChange={event=>onChange(event)}
                    />
                </div>
                <div className="form-group border mt-3">
                    <label htmlFor="dateOfBirth" className="form-label mt-2 ms-3 text-secondary">Birth Date</label>
                    <input type="text"
                           className="form-control border-0 ms-1 w-75"
                           id="dateOfBirth"
                           name="dateOfBirth"
                           value={profile.dateOfBirth}
                           onChange={event=>onChange(event)}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditProfileComponent;