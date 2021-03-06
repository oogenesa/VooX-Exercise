import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const upper = (str) => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

const chiplabel = (label) => {
  let arr = [];
  label.map((lbl) => {
    switch (lbl) {
      case "electrical":
        arr.push(
          <Chip
            key="electrical"
            label="Electrical"
            size="small"
            color="primary"
          />
        );
        break;
      case "mechanical":
        arr.push(
          <Chip
            key="mechanical"
            label="Mechanical"
            size="small"
            color="secondary"
          />
        );
        break;
      case "landscape":
        arr.push(
          <Chip
            key="landscape"
            label="Landscape"
            size="small"
            color="success"
          />
        );
        break;
      case "plumbing":
        arr.push(
          <Chip key="plumbing" label="Plumbing" size="small" color="warning" />
        );
        break;
      default:
        break;
    }
  });

  return <div>{arr}</div>;
};
const Tables = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Priority</StyledTableCell>
            <StyledTableCell align="right">Label</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.issues.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="right">
                {upper(row.title)}
              </StyledTableCell>
              <StyledTableCell align="right">
                {upper(row.priority)}
              </StyledTableCell>
              <TableCell align="right">{chiplabel(row.label)}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Tables;
