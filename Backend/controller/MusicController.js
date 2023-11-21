import Music from "../model/Music.js";
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});

export default class MusicController {

    // for the save Song
    musicAdd = async (req, res) => {
        try {
            // console.log(req.files);
            const audio = req.files.song;
            const intro = req.files.intro;
            const profile = req.files.profile;
            const audioFile = await cloudinary.uploader.upload(audio.tempFilePath, { resource_type: "video" });
            const introFile = await cloudinary.uploader.upload(intro.tempFilePath);
            const profileFile = await cloudinary.uploader.upload(profile.tempFilePath);

            const music = {
                artistName: req.body.artistName,
                song: audioFile.url,
                intro: introFile.url,
                songName: req.body.songName,
                profile: profileFile.url,
                popular: req.body.popular,
                public_Id_song: audioFile.public_id,
                public_Id_intro: introFile.public_id,
                public_Id_profile: profileFile.public_id
            }
            const MusicData = await Music.create(music);
            return res.json({ Music: MusicData })

        } catch (err) {
            console.log("there is Problem With Add New Song ", err);
            return;
        }
    }

    //  for the Getting All Songs
    getAllMusic = async (req, res) => {
        try {
            const music = await Music.find({});
            return res.json({ AllMusics: music })
        } catch (err) {
            console.log("There is Error ", err);
            return;
        }
    }

    // for the Deleting Song
    deleteMusic = async (req, res) => {
        const id = req.params.id;
        try {
            const music = await Music.findById(id);
            if (music) {
                await cloudinary.uploader.destroy(music.public_Id_song, { resource_type: 'video' });
                await cloudinary.uploader.destroy(music.public_Id_profile);
                await cloudinary.uploader.destroy(music.public_Id_intro);
                const musicData = await Music.findByIdAndDelete(id);
                return res.json({ Deleted_Successfully: musicData })
            } else {
                return res.json({ Message: 'No Music Found' })
            }
        } catch (err) {
            console.log("There is Error ", err);
            return;
        }
    }

    // for the Getting Single Song
    singleMusic = async (req, res) => {
        const id = req.params.id;
        try {
            const music = await Music.findById(id);
            return res.json({ Music: music })
        } catch (err) {
            console.log("There is Problem With Getting Song ", err);
            return;
        }
    }

    //  for the Getting recent upload All Songs
    recentData = async (req, res) => {
        try {
            const music = await Music.find({}).sort('-createdAt')
            return res.json({ AllMusics: music })
        } catch (err) {
            console.log("There is Error ", err);
            return;
        }
    }
}