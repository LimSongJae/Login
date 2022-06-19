import React, { useEffect, useState } from "react";
import List from "../components/List";
import Pagination from "../components/pagination";
import styled from "styled-components";

const Gogo = () => {
  const [posts, setPost] = useState([]);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // 공공데이터 api 호출
  useEffect(() => {
    const url =
      "http://apis.data.go.kr/1360000/TourStnInfoService/getTourStnVilageFcst";

    const encodingKey =
      "KqHR5bqAvA%2BKnbkr2dD7WSLWnoSg3iXH%2BVcp%2B9AsWfwOp2YZ3Eb61scnDyVXhje6oAV%2Bh%2FeeGuRJNbbeIVPTjg%3D%3D";
    fetch(
      url +
        "?serviceKey=" +
        encodingKey +
        "&numOfRows=50&dataType=JSON&pageNo=2&CURRENT_DATE=2022061810&HOUR=48&COURSE_ID=100"
    )
      .then((res) => res.json())
      .then((data) => {
        const { item } = data.response.body.items;
        setPost(item);
      });
  }, []);

  // 무작위 여행지 추천
  function recommendCourse() {
    const rand = Math.floor(Math.random() * 438 + 1);
    const url =
      "http://apis.data.go.kr/1360000/TourStnInfoService/getTourStnVilageFcst";

    const encodingKey =
      "KqHR5bqAvA%2BKnbkr2dD7WSLWnoSg3iXH%2BVcp%2B9AsWfwOp2YZ3Eb61scnDyVXhje6oAV%2Bh%2FeeGuRJNbbeIVPTjg%3D%3D";
    fetch(
      url +
        "?serviceKey=" +
        encodingKey +
        `&numOfRows=50&dataType=JSON&pageNo=1&CURRENT_DATE=2022061810&HOUR=48&COURSE_ID=${rand}`
    )
      .then((res) => res.json())
      .then((data) => {
        const { item } = data.response.body.items;
        setPost(item);
      });
  }
  return (
    <Container>
      <Header>오늘의 여행지 추천</Header>
      <CourseBox>
        <button onClick={() => recommendCourse()}>무작위 코스 추천 버튼</button>
      </CourseBox>
      <BtnBox>
        <button onClick={() => setLimit(3)}>3개씩 보기</button>
        <button onClick={() => setLimit(5)}>5개씩 보기</button>
        <button onClick={() => setLimit(10)}>10개씩 보기</button>
      </BtnBox>
      <ContentBox>
        {posts
          .filter((element, index, arr) => {
            return (
              arr.findIndex((item) => item.spotName === element.spotName) ===
              index
            );
          })
          .slice(offset, offset + limit)
          .map((element, index) => (
            <List key={index} element={element} />
          ))}
      </ContentBox>
      <Footer>
        <Pagination
          total={
            posts.filter((element, index, arr) => {
              return (
                arr.findIndex((item) => item.spotName === element.spotName) ===
                index
              );
            }).length
          }
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </Footer>
    </Container>
  );
};

export default Gogo;

const Container = styled.div``;

const Header = styled.header`
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  margin-top: 20px;
`;

const CourseBox = styled.div`
  margin: 30px 0 5px 15px;
`;

const BtnBox = styled.div`
  margin-left: 15px;
`;

const ContentBox = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
`;

const Footer = styled.footer`
  text-align: center;
  margin-bottom: 70px;
`;
