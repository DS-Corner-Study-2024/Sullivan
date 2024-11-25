//8. 아래의 테이블(users)에 2개의 데이터 생성을 위한 명령어를 작성하시오
mysql(프롬프트)> INSERT INTO users (id, name, age, married, comment) VALUES (1, 'YN', 21, 0, '자기소개1');
mysql(프롬프트)> INSERT INTO users (id, name, age, married, comment) VALUES (2, 'GB', 22, 0, '자기소개2');

//9. 라우터를 만드는 파일이다. 빈칸을 채우시오
//routes/index.js
const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();	//메서드를 이용해 모든 사용자 찾기
    res.render('sequelize', { users });	//sequelize.html을 렌더링할 때 결과 값
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;	//다른 파일에서 사용할 수 있도록 내보냄
