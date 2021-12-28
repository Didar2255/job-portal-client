import { Button, Container, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Home.css'

const Home = () => {
    const recentJob = [
        { id: 1, postName: 'Backend Developer', totalApplicant: 10, vacancies: 2, shift: 'Day', type: 'Full Time', postDate: '04.12.2021', expireDate: '04.12.2021', salary: 'Negotiable', status: 'Active' },
        { id: 2, postName: 'Creative Director', totalApplicant: 20, vacancies: 1, shift: 'Day', type: 'Freelancer', postDate: '04.12.2021', expireDate: '04.12.2021', salary: 'Upto 30k', status: 'Active' },
        { id: 1, postName: 'Frontend Developer', totalApplicant: 30, vacancies: 1, shift: 'Day', type: 'Intern', postDate: '04.12.2021', expireDate: '04.12.2021', salary: 'Negotiable', status: 'Expired' },
    ]
    return (
        <Container>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                my: 2
            }}>

                <Box sx={{ mx: 2 }}>
                    <InputLabel id="demo-simple-select-label">Selected by type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={''}
                        sx={{ width: '100%' }}

                    >
                        <MenuItem value={10}>Full Time</MenuItem>
                        <MenuItem value={20}>Freelancer</MenuItem>
                        <MenuItem value={30}>Intern</MenuItem>
                    </Select>
                </Box>
                <Box sx={{ mx: 2 }}>
                    <InputLabel id="demo-simple-select-label">Select by Department</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={''}
                        sx={{ width: '100%' }}
                    >
                        <MenuItem value='Development'>Development</MenuItem>
                        <MenuItem value='Design'>Design</MenuItem>
                        <MenuItem value='Problem Solving'>Problem Solving</MenuItem>
                    </Select>
                </Box>
                <Box sx={{ mx: 2 }}>
                    <InputLabel id="demo-simple-select-label">Select By Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={''}
                        sx={{ width: '100%' }}
                    >
                        <MenuItem value='PM'>Ten</MenuItem>
                        <MenuItem value='AM'>Twenty</MenuItem>
                    </Select>
                </Box>
                <Box sx={{ mx: 2 }}>
                    <InputLabel id="demo-simple-select-label">Select By Shift</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={''}
                        sx={{ width: '100%' }}
                    >
                        <MenuItem value='Day'>Day</MenuItem>
                        <MenuItem value='Night'>Night</MenuItem>
                    </Select>
                </Box>
                <Box>
                    <Button variant="contained" sx={{ mt: 4, backgroundColor: '#5bbc2e', borderRadius: 0, px: 4 }}>Filter</Button>
                </Box>
            </Box>
            <Box>
                <Typography variant='h5' sx={{ backgroundColor: '#182f59', p: 2, my: 4, color: '#fff', fontWeight: 600 }}>
                    Recent Job Post
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table aria-label="Appointment table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Post Name</TableCell>
                            <TableCell align="left">Total Applicant</TableCell>
                            <TableCell align="left">Vacancies</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Post Date</TableCell>
                            <TableCell align="left">Expire Date</TableCell>
                            <TableCell align="left">Salary</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recentJob.map((job) => (
                            <TableRow
                                key={job.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {job.postName}
                                </TableCell>
                                <TableCell align="left">{job.totalApplicant}</TableCell>
                                <TableCell align="left">{job.vacancies}</TableCell>
                                <TableCell align="left">{job.shift}</TableCell>
                                <TableCell align="left">{job.postDate}</TableCell>
                                <TableCell align="left">{job.expireDate}</TableCell>
                                <TableCell align="left">{job.salary}</TableCell>
                                <TableCell align="left">{job.status}</TableCell>
                                <TableCell align="left"><i class="fas fa-pencil-alt edit-icon"></i> <i class="fas fa-trash-alt delete-icon"></i></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container >
    );
};

export default Home;