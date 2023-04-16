import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {

    
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

const makeStyle = (status) => {
    if (status === 'Sent!'){
        return {
            background: 'rgb(145 254 159 /47%)',
            color: 'green',
        }
    }else if (status === 'Pending'){
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }        
}

function createData(name, gender,Age, className, Status) {
  return { name,gender,Age, className, Status};
}

const rows = [
  createData("Brenda Ananda", 5000, 50000, 500, "Pending"),
  createData("Geofrey Ben", 4800, 48000, 480,"Sent!"),
  createData("Eclair Jacobs", 2000, 20000, 200,"Pending"),
  createData("Diana Khadija", 3500, 35000, 350,"Sent!"),
  createData("Trevor Kimani", 600, 6000, 60,"Sent!"),
];

export default function CustomizedTables() {
  return (
    <div className="Table">
        <h3> Chama Stats</h3>
    <TableContainer component={Paper}
    style={{
        marginTop: '30px',
        boxShadow: '0px 13px 20px 0px #80808029'}}
    
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Member</StyledTableCell>
            <StyledTableCell align="left">Weight in kg</StyledTableCell>
            <StyledTableCell align="left">points </StyledTableCell>
            <StyledTableCell align="left">Algorands</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.gender}</StyledTableCell>
              <StyledTableCell align="left">{row.Age}</StyledTableCell>
              <StyledTableCell align="left">{row.className}</StyledTableCell>
              <StyledTableCell align="left">

                <span className="status" style={makeStyle(row.Status)}>{row.Status}</span>
              </StyledTableCell>
              <StyledTableCell align="left">
                details</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}
