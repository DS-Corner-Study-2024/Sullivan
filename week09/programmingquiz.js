//8. Node.js와 Express를 사용하여 POST /post/img 라우터를 구현하는 코드를 작성하시오. (이 라우터는 사용자가 업로드한 단일 이미지를 서버에서 처리하고, 로그인한 사용자만 기능을 기용할 수 있다.)

router.post('/img', isLoggedIn, upload.single('img'), afterUploadImage);

//9. GET /profile 요청이 들어오면 'profile' 템플릿을 렌더링하고, title로 '내 정보 - NodeBird'를 전달하는 컨트롤러 함수를 작성하시오.

exports.renderProfile=(req, res)=>{
    res.render('profile',{title: '내 정보 - NodeBird'});
}