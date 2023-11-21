import express from 'express';
import MusicController from '../controller/MusicController.js';

const router = express.Router();
const Music = new MusicController();

router.post('/add', Music.musicAdd);
router.get('/getAll', Music.getAllMusic);
router.delete('/delete/:id', Music.deleteMusic);
router.get('/getMusic/:id', Music.singleMusic);
router.get('/recent',Music.recentData)

export default router;