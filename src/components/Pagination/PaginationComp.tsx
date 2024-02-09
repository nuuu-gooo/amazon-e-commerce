import React from "react";
import { Pagination } from "antd";
import { TPagination } from "@src/@types/types";
export const PaginationComp = ({
  currentPage,
  productOnPage,
  setCurrentPage,
  total,
}: TPagination) => {
  return (
    <Pagination
      total={total}
      current={currentPage}
      pageSize={productOnPage}
      onChange={setCurrentPage}
    ></Pagination>
  );
};
