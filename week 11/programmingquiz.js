//8번번
const express = require('express');

const { verifyToken } = require('../middlewares');
const { createToken, tokenTest } = require('../controllers/v1');

const router = express.Router();

// POST /v1/token: 토큰을 발급하는 라우터
router.post('/token', createToken);

// GET /v1/test: 사용자가 토큰을 테스트해볼 수 있는 라우터
router.get('/test', verifyToken, tokenTest);

module.exports = router;

//9번
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
...
exports.apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1분
    max: 1,
    handler: function (req, res) {
        res.status(this.statusCode).json({
            code: this.statusCode, // 기본값 429
            message: '1분에 한 번만 요청할 수 있습니다.'
        });
    }
});

exports.deprecated = (req, res) => {
    res.status(410).json({
        code: 410,
        message: '새로운 버전이 나왔습니다. 새로운 버전을 사용하세요.'
    });
};
