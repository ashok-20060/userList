import React from "react";

import Button from "../../atoms/Button";

const Pagination = ({
  onNextPageClick,
  onPrevPageClick,
  currentPage,
  totalPagesRef,
}) => {
  const { totalPages } = totalPagesRef?.current;

  return (
    <div style={{ marginTop: "10px", display: "flex", columnGap: "30px" }}>
      <div>
        Page {currentPage} of {totalPages}
      </div>
      <div style={{ display: "flex", columnGap: "8px" }}>
        <Button
          disabled={currentPage === 1}
          handleClick={onPrevPageClick}
          label="Prev"
        />
        <Button
          disabled={currentPage === totalPages}
          handleClick={onNextPageClick}
          label="Next"
        />
      </div>
    </div>
  );
};

export default React.memo(Pagination);
