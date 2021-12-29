import { Button, Container, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [recentJobs, setRecentJobs] = useState([])
    const [isDelete, setIsDelete] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => setRecentJobs(data))
    }, [isDelete]);

    const handelDelete = (id) => {
        fetch(`http://localhost:5000/jobs/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are you sure delete jobs ?')
                    setIsDelete(true)
                }
                else {
                    setIsDelete(false)
                }
            })
    }
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
                    <Link to='/createJob'>
                        <Button variant="contained" sx={{ m: 4, backgroundColor: '#5bbc2e', borderRadius: 0, px: 4 }}><i class="fas fa-plus-circle plus-icon"></i>  Create Jobs</Button>
                    </Link>
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
                            <TableCell align="center">Post Name</TableCell>
                            <TableCell align="center">Vacancies</TableCell>
                            <TableCell align="center">Shift</TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell align="center">Salary</TableCell>
                            <TableCell align="center">Status</TableCell>
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
                                <TableCell align="center">{job.vacancy}</TableCell>
                                <TableCell align="center">{job.shift}</TableCell>
                                <TableCell align="center">{job.type}</TableCell>
                                <TableCell align="center">{job.salary}</TableCell>
                                <TableCell align="center"><Link to={`/update/${job._id}`}><Button variant='contained'>{job.status}</Button></Link></TableCell>
                                <TableCell align="center"><i class="fas fa-pencil-alt edit-icon"></i> <i class="fas fa-trash-alt delete-icon" onClick={() => handelDelete(`${job._id}`)}></i> <Link to={`/home/${job._id}`}><i class="far fa-eye view-job"></i></Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container >
    );
};

export default Home;