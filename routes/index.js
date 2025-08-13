const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/img', async (req, res) => {
    const r = await axios.get('https://api.52vmy.cn/api/img/tu/girl')
    res.json({ data: r.data.url });
});

router.get('/img1', async (req, res) => {
    const r = await axios.get('https://api.lolicon.app/setu/v2?tag=fgo&num=1&r18=0')
    res.json({ data: r.data.data });
});

router.get('/video', async (req, res) => {
    const r = await axios.get('https://api.kuleu.com/api/MP4_xiaojiejie?type=json')
    res.json({ data: r.data.mp4_video });
});


module.exports = router;