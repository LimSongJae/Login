# LOGIN + OPEN API를 이용한 여행지 추천 사이트

## 주의사항

**서버 배포가 이루어지지 않은 상태이기 떄문에 실행시키기 위해선 자신의 local sql 데이터베이스를 연결하고 TABLE을 생성해야함 !!**

**TABLE 필수정보**

    Table: users

    Columns:

        id varchar(30) PK 
  
        pw varchar(30) 
  
        name varchar(30) 
  
        email varchar(50)
  
        age int 
  
        gender varchar(10)


**clients와 server를 각각 npm start로 둘다 실행시켜야함 !!
