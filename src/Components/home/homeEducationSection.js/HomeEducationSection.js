import React from "react";
import { Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Box
} from '@mui/material';


function HomeEducationSection() {

    const educationTableData = [
        {
            standard: 'High',
            institute: 'Sevti Devi School',
            affilation: 'CBSE',
            passingYear: '2012'
        },
        {
            standard: 'Inter',
            institute: 'Sevti Devi School',
            affilation: 'CBSE',
            passingYear: '2014'
        },
        {
            standard: 'Graduation',
            institute: 'World College',
            affilation: 'MDU',
            passingYear: '2019'
        }
    ]

    const heading = `{ Education !!! }`

    return (<Box component='div'>
        <Typography variant="h2" fontSize={40} textAlign='center' sx={{ color: '#5B0888' }}>{heading}</Typography>
        <Box component='div' sx={{ height: 40 }}></Box>
        <TableContainer component={Paper} sx={{ borderRadius: '7px' }}>
            <Table aria-label='Education Table'>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 800 }}>STANDARD</TableCell>
                        <TableCell sx={{ fontWeight: 800 }}>INSTITUTE</TableCell>
                        <TableCell sx={{ fontWeight: 800 }}>AFFILATION</TableCell>
                        <TableCell sx={{ fontWeight: 800 }}>PASSING YEAR</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        educationTableData.map((item, key) => {
                            return <TableRow key={key} sx={{
                                '&:last-child td, &:last-child th':
                                    { border: 0 },
                                '&:nth-of-type(odd)': { background: '#EFEFEF' }
                            }}>
                                <TableCell sx={{ fontWeight: 700 }}>{item.standard}</TableCell>
                                <TableCell sx={{ fontWeight: 700 }}>{item.institute}</TableCell>
                                <TableCell sx={{ fontWeight: 700 }}>{item.affilation}</TableCell>
                                <TableCell sx={{ fontWeight: 700 }}>{item.passingYear}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </Box>);
}

export default HomeEducationSection;