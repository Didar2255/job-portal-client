import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewJob = () => {
    const { id } = useParams()
    const [viewJob, setViewJob] = useState({})
    fetch(`http://localhost:5000/jobs/${id}`)
        .then(res => res.json())
        .then(data => setViewJob(data))
    return (
        <Container>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginY: 3
            }}>
                <Typography variant='h6' sx={{ marginRight: 5 }}>
                    Job Title
                </Typography>
                <Typography variant='h6'>
                    {viewJob.jobTitle}
                </Typography>
            </Box>
            <hr />
            <TableContainer component={Paper} sx={{ marginY: 5 }}>
                <Table aria-label="Appointment table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Shift</TableCell>
                            <TableCell align="left">Department</TableCell>
                            <TableCell align="left">Level</TableCell>
                            <TableCell align="left">Vacancies</TableCell>
                            <TableCell align="left">Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {viewJob.shift}
                            </TableCell>
                            <TableCell align="left">{viewJob.department}</TableCell>
                            <TableCell align="left">{viewJob.level}</TableCell>
                            <TableCell align="left">{viewJob.vacancy}</TableCell>
                            <TableCell align="left">{viewJob.salary}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <hr />
            <Box sx={{ marginY: 3 }}>
                <Typography variant='h6' sx={{ textAlign: 'left', marginBottom: 2, fontWeight: 600 }}>
                    Description
                </Typography>
                <Typography variant='body2' sx={{ textAlign: 'justify' }}>
                    {viewJob.jobDescription}
                </Typography>
            </Box>
            <hr />
            <Box sx={{ border: 1, p: 3, marginY: 3 }}>
                <Typography variant='h6' sx={{ textAlign: 'left', marginBottom: 2, fontWeight: 600 }}>
                    Filter Question
                </Typography>
                <Typography sx={{ textAlign: 'left' }}>
                    <li> {viewJob.question}</li>
                </Typography>
            </Box>
        </Container>
    );
};

export default ViewJob;