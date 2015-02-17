/**
 * controller routing module
 */
exports.mapRoute = function(app, prefix) {
  
    // / 문자열로 시작하는 지 검사 후 없을 경우에만 추가하는 로직 필요
    prefix = '/' + prefix;
    
    var prefixObj = require('./controllers' + prefix);
    
    // 색인
    app.get(prefix, prefixObj.index);
    
    // 추가 페이지
    app.get(prefix + '/new', prefixObj.new);
    
    // 조회
    app.get(prefix + '/:id', prefixObj.show);
    
    // 생성
    app.post(prefix, prefixObj.create);
    
    // 편집 페이지
    app.get(prefix + '/edit', prefixObj.edit);
    
    // 업데이트
    app.put(prefix + '/:id', prefixObj.update);
    
    // 제거
    app.del(prefix + '/:id', prefixObj.remove);
};