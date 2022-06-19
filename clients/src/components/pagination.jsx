import styled from "styled-components";
import React from "react";

// 페이지네이션 구현
const Pagination = ({ total, limit, setPage, page }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <nav>
      <Btn onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Btn>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Btn
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Btn>
        ))}
      <Btn onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Btn>
    </nav>
  );
};

export default Pagination;

const Btn = styled.button`
  font-size: 20px;
  &[disabled] {
    background: lightgray;
    cursor: revert;
  }

  &[aria-current] {
    background: lightgreen;
    font-weight: bold;
    cursor: revert;
  }
`;
