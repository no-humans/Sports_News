import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from '../News/RNews.module.css'
import Karate from "../../assets/karate-fighters 1.png";
import MUITable from '@mui/material/Table'; 
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TableData} from '../../Database'
import { RData } from "../../Database";

export default function RecentNews() {
  return (
<div className={Styles.Article}>
      <div className={Styles.karate} style={{position:"relative"}}>
        <img style={{height:"100%"}} src={Karate} alt="" />
        <div className={Styles.text} style={{position:"absolute", bottom:"0"}}>
        <div className={Styles.Paragraph}>
          <p style={{marginBottom:"0rem"}}>Day 5 Highlights</p>
        </div>
        <div className={Styles.Head}>
          <h4>Baku 2023 World Taekwondo <br /> Championships</h4>
        </div>
      </div>
      </div>
   
      <div className={Styles.news}>
        <div className={Styles.Background}>
        {RData && RData.map((e)=>{
          return (
            <div className={Styles.IData}key={e.id}>
          <div className={Styles.NImage } >
            <img src={e.img} alt="" />
            </div>
            <div className={Styles.NData}>
              <span>{e.dateplace}</span>
              <h6>{e.heading}</h6>
            </div>
            
            </div>
          )
        })}
        <div className={Styles.button}>
              <button>More</button>
            </div>
            </div>
      </div>
      <div className={Styles.Table}>
      <TableContainer sx={{backgroundColor:"#EBEEF3"}} component={Paper}>
      <MUITable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>

          <TableRow >
            <TableCell>Club</TableCell>
            <TableCell align="right">GP</TableCell>
            <TableCell align="right">W</TableCell>
            <TableCell align="right">D</TableCell>
            <TableCell align="right">L</TableCell>
            <TableCell align="right">F</TableCell>
            <TableCell align="right">A</TableCell>
            <TableCell align="right">GD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData && TableData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <img src={row.img} alt="img" /> {row.name}
              </TableCell>
              <TableCell align="right">{row.GP}</TableCell>
              <TableCell align="right">{row.w}</TableCell>
              <TableCell align="right">{row.D}</TableCell>
              <TableCell align="right">{row.L}</TableCell>
              <TableCell align="right">{row.F}</TableCell>
              <TableCell align="right">{row.A}</TableCell>
              <TableCell align="right">{row.GD}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
      </div>
    </div>
  );
}
