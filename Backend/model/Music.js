import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
    artistName: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    songName: {
        type: String
    },
    intro: {
        type: String
    },

    popular: Boolean,

    public_Id_song: {
        type: String
    },

    public_Id_intro: {
        type: String
    },
    profile: {
        type: String
    },
    public_Id_profile: {
        type: String
    }


}, { timestamps: true });

const Music = mongoose.model('Music', musicSchema);

export default Music;