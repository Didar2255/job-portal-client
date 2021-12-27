import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import './CreateJob.css'

const CreateJob = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Job Successfully Create')
                    reset()
                }
            })
    };
    return (
        <Container sx={{ margin: 5 }}>
            <Box>
                <Typography variant='h6'>
                    Create jobs
                </Typography>
            </Box>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)} className='added-jobs'>
                    <Box className='job-field'>
                        <label>Job Title</label>
                        <input {...register("jobTitle")} />
                    </Box>
                    <Box className='job-field'>
                        <label>Shift: </label>
                        <select {...register("shift")}>
                            <option value="Day">Day</option>
                            <option value="Night">Night</option>
                        </select>
                    </Box>
                    <Box className='job-field'>
                        <label>Department: </label>
                        <select {...register("department")}>
                            <option value="Development">Development</option>
                            <option value="Design">Design</option>
                            <option value="Problem Solving">Problem solving</option>
                        </select>
                    </Box>
                    <Box className='job-field'>
                        <label>Level: </label>
                        <select {...register("level")}>
                            <option value="Senior">Senior</option>
                            <option value="Junior">Junior</option>
                        </select>
                    </Box>
                    <Box className='job-field'>
                        <label>Vacancy: </label>
                        <input {...register("vacancy")} />
                    </Box>
                    <Box className='job-field'>
                        <label>Salary: </label>
                        <input {...register("salary")} />
                    </Box>
                    <Box className='job-field'>
                        <label>Filter Question: </label>
                        <input type="text" {...register('question')} />
                    </Box>
                    <Box className='job-field'>
                        <label>Job Description: </label>
                        <textarea {...register('jobDescription')}></textarea>
                    </Box>
                    <Box className='job-field'>
                        <Button type='submit' variant="contained" sx={{ width: '20%' }}>save</Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default CreateJob;