import React from "react";
import { PaginationProps, useTranslate } from "react-admin";
import { TablePagination } from "@mui/material";

const CustomPagination = (props: any) => {
  const translate = useTranslate();
  return (
    <TablePagination
      component="div"
      count={props.total} // 确保传递总记录数
      page={props.page ? props.page - 1 : 0} // Material-UI 的分页从0开始，react-admin 从1开始
      onPageChange={(_, page) =>
        props.setPage ? props.setPage(page + 1) : null
      } // 处理页面更改
      rowsPerPage={props.perPage}
      onRowsPerPageChange={(event) =>
        props.setPerPage
          ? props.setPerPage(parseInt(event.target.value, 10))
          : null
      } // 处理每页行数更改
      rowsPerPageOptions={[5, 10, 25]}
      labelRowsPerPage={translate("ra.navigation.page_rows_per_page")}
    />
  );
};

export default CustomPagination;
