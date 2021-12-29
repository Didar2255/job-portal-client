import { Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateStatus = () => {
    const { id } = useParams()
    const [status, setStatus] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/jobs/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [id])
    return (
        <div>
            <Typography variant='h5' sx={{ m: 4 }}>
                Update Job Status
            </Typography>
            <form onSubmit={''} >
                <TextField color="success" focused />
                <Button variant="contained" type='submit' sx={{ m: 1 }}>Update</Button>
            </form>
        </div>
    );
};

export default UpdateStatus;