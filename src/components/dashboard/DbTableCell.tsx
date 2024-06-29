// CustomTableCell.tsx

import TableCell, { TableCellProps } from "@mui/material/TableCell";
import { SxProps } from "@mui/system";

interface DbTableCellProps extends TableCellProps {
  sx?: SxProps;
}

const DbTableCell: React.FC<DbTableCellProps> = ({ sx, ...props }) => {
  return (
    <TableCell
      {...props}
      sx={{
        borderBottom: "none",
        padding: "4px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        ...sx, // Allow overriding styles if necessary
      }}
    />
  );
};

export default DbTableCell;
