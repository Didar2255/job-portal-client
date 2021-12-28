import { Button, Container, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [recentJobs, setRecentJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => setRecentJobs(data))
    }, [])
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
                    <Button variant="contained" sx={{ m: 4, backgroundColor: '#5bbc2e', borderRadius: 0, px: 4 }}>Filter</Button>
                    <a href="/createJob">
                        <Button variant="contained" sx={{ m: 4, backgroundColor: '#5bbc2e', borderRadius: 0, px: 4 }}><i class="fas fa-plus-circle plus-icon"></i>  Create Jobs</Button>
                    </a>
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
                            <TableCell align="left">Vacancies</TableCell>
                            <TableCell align="left">Shift</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Salary</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recentJobs.map((job) => (
                            <TableRow
                                key={job.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {job.jobTitle}
                                </TableCell>
                                <TableCell align="left">{job.vacancy}</TableCell>
                                <TableCell align="left">{job.shift}</TableCell>
                                <TableCell align="left">{job.type}</TableCell>
                                <TableCell align="left">{job.salary}</TableCell>
                                <TableCell align="left">{job.status}</TableCell>
                                <TableCell align="center"><i class="fas fa-pencil-alt edit-icon"></i> <i class="fas fa-trash-alt delete-icon"></i> <Link to={`/home/${job._id}`}><Button><i class="far fa-eye view-job"></i></Button></Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container >
    );
};

export default Home;