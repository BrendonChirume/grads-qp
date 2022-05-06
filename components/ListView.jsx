import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import LinkIcon from '@mui/icons-material/Link';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import Icons from './Icons';

const courses = [
  {
    yearwritten: 2021,
    year: 2.1,
    coursecode: 'SCI2101',
    coursename: 'Research Methods',
  },
  {
    yearwritten: 2021,
    year: 2.1,
    coursecode: 'SCI2103',
    coursename: 'Data Analysis and Simulation',
  },
  {
    yearwritten: 2021,
    year: 2.1,
    coursecode: 'SCI2104',
    coursename: 'Application Development',
  },
  {
    yearwritten: 2021,
    year: 2.1,
    coursecode: 'SCI2107',
    coursename: 'Statistical Programming',
  },
  {
    yearwritten: 2021,
    year: 2.1,
    coursecode: 'SCI2109',
    coursename: 'Technopreneurship',
  },
  {
    yearwritten: 2021,
    year: 2.1,
    coursecode: 'SCS2111',
    coursename: 'Data Communications and Computer Networks	Results',
  },
  {
    yearwritten: 2020,
    year: 1.2,
    coursecode: 'SCI1201',
    coursename: 'Business Information Systems and Applications',
  },
  {
    yearwritten: 2020,
    year: 1.2,
    coursecode: 'SCI1202',
    coursename: 'Data Mining and Warehousing',
  },
  {
    yearwritten: 2020,
    year: 1.2,
    coursecode: 'SCI1203',
    coursename: 'Data Visualisation and Reporting',
  },
  {
    yearwritten: 2020,
    year: 1.2,
    coursecode: 'SCI1204',
    coursename: 'Programming Concepts and Development using Python	',
  },
  {
    yearwritten: 2020,
    year: 1.2,
    coursecode: 'SCS1210',
    coursename: 'Discete Mathematics',
  },
  {
    yearwritten: 2020,
    year: 1.2,
    coursecode: 'SORS1201',
    coursename: 'Applied Statistics',
  },
  {
    yearwritten: 2020,
    year: 1.1,
    coursecode: 'ILI1105',
    coursename: 'Communication Skills',
  },
  {
    yearwritten: 2020,
    year: 1.1,
    coursecode: 'SCI1101',
    coursename: 'Information Management Concepts',
  },
  {
    yearwritten: 2020,
    year: 1.1,
    coursecode: 'SCI1102',
    coursename: 'Electronic Commerce',
  },
  {
    yearwritten: 2020,
    year: 1.1,
    coursecode: 'SCI1103',
    coursename: 'Database Systems',
  },
  {
    yearwritten: 2020,
    year: 1.1,
    coursecode: 'SCS1101',
    coursename: 'Introduction to Computer Science and Programming',
  },
  { yearwritten: 2020, year: 1.1, coursecode: 'SMA1101', coursename: 'Calculus' },
  {
    yearwritten: 2020,
    year: 1.1,
    coursecode: 'SMA1102',
    coursename: 'Linear Algebra',
  },
];

export default function ListView() {
  const [tooltipText, setTooltipText] = React.useState('Copy share link');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setTooltipText('Copied!');
    return setTimeout(() => setTooltipText('Copy share link'), 2000);
  };

  return (
    <TableContainer>
      <Table aria-label="courses list view">
        <TableBody>
          {courses.map((row) => (
            <TableRow
              key={row.coursename}
              hover
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                cursor: 'pointer',
              }}
            >
              <TableCell padding="checkbox">
                <Avatar
                  variant="square"
                  sx={{
                    width: '100%',
                    margin: '0 auto',
                    backgroundColor: 'transparent',
                  }}
                >
                  <Icons.ImgAlt
                    sx={{ height: 40, width: 37, color: 'rgb(211 212 213)' }}
                  />
                </Avatar>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.coursecode}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {row.coursename}
              </TableCell>
              <TableCell align="right">{row.yearwritten}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right" padding="checkbox">
                <Tooltip title={tooltipText} placement="top">
                  <IconButton onClick={() => copyToClipboard('demo text copied')}>
                    <LinkIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
