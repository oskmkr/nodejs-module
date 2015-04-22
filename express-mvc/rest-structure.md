# rest structure

access_token 을 통한 권한 부여
```
using header
Authorization : Bearer oskmkr

or

using parameter
?access_token=oskmkr
```

## 조회
GET
/user
response
```
{
    'userId' : {userId}
}
```

## 업데이트
PUT
/user/{userId}
response
```
{
    'userId' : {userId}
}
```

## 생성
POST
/user/{userId}
response
```
{
    'userId' : {userId}
}
```

## 삭제
DELETE
/user/{userId]
response
```
{
    'userId' : {userId}
}
```