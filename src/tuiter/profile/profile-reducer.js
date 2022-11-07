import { createSlice } from "@reduxjs/toolkit";

const profileData = {
    name: 'Yuhe Yan', handle: '@yuheyan',
    profilePicture: 'nypprofile.jpg', 	bannerPicture: 'coldplay.jpg',
    bio: 'Software Engineer, AI, Space, Student.',
    website: 'youtube.com/webdevtv',
    location: 'San Jose, CA',	dateOfBirth: '9/5/1996',	dateJoined: '4/2009',
    followingCount: 340,	followersCount: 223, tuitsCount: 567
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileData,
    reducers: {
        updateProfile(state, action) {
            const a = action.payload;
            state.name = a[0];
            state.bio = a[1];
            state.location = a[2];
            state.website = a[3];
            state.dateOfBirth = a[4];
        }
    }
});

export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;