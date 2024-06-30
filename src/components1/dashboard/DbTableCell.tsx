import TableCell, { TableCellProps } from "@mui/material/TableCell";
import { SxProps, Theme } from "@mui/system";

interface DbTableCellProps extends TableCellProps {
  sx?: SxProps<Theme>;
}

export const DbTableCell: React.FC<DbTableCellProps> = ({ sx, ...props }) => {
  return (
    <TableCell
      {...props}
      sx={{
        borderBottom: "none",
        padding: "4px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        ...sx,
      }}
    />
  );
};

export const DbTableHeaderCell: React.FC<DbTableCellProps> = ({
  sx,
  ...props
}) => {
  return (
    <DbTableCell
      {...props}
      sx={{
        color: "skyblue",
        ...sx,
      }}
    />
  );
};

export const DbTableBodyCell: React.FC<DbTableCellProps> = ({
  sx,
  ...props
}) => {
  return (
    <DbTableCell
      {...props}
      sx={{
        color: "white",
        ...sx,
      }}
    />
  );
};
