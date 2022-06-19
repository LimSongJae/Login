import styled from "styled-components";

const List = ({ element }) => {

  return (
    <Content>
      {element.spotName}
    </Content>
  );
};

export default List;

const Content = styled.li`
  font-size: 28px;
  margin: 40px 40px;
`;
