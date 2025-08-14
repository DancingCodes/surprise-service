const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/video', async (req, res) => {
    const requests = Array.from({ length: 10 }, () =>
        axios.get('https://api.kuleu.com/api/MP4_xiaojiejie?type=json')
    );
    const results = await Promise.all(requests);
    // 提取 mp4_video
    const videos = results.map(r => r.data.mp4_video);
    // 返回结果
    res.json({ data: videos });
});

module.exports = router;