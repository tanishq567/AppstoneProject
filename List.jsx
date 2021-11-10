import React, { useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import Details from '../Details/Details'
import useStyles from './style'

const List = ({ places, childClicked,type,setType,rating,setRating,isLoading }) => {
    const classe = useStyles();
    
    const [elRefs, setElRefs] = useState([])


    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);
    console.log({ childClicked })
    return (
        <div className={classe.container}>
            <Typography variant='h5' >Resturant & Hotels Near You</Typography>
            <br />
            {isLoading ? (
                <div className={classe.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    <FormControl className={classe.formControl}>
                        <InputLabel id='type'>Type</InputLabel>
                        <br />
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value='restaurants'>Resturant</MenuItem>
                            <MenuItem value='hotels'>Hotels</MenuItem>
                            <MenuItem value='attractions'>Atterations</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classe.formControl}>
                        <InputLabel id="rating">Rating</InputLabel>
                        <br />
                        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value={0}>All</MenuItem>
                            
                            <MenuItem value={2}>Above2</MenuItem>
                            <MenuItem value={3}>Above3</MenuItem>
                            <MenuItem value={4.5}>Above4</MenuItem>
                            <MenuItem value={5}>Above</MenuItem>

                        </Select>
                    </FormControl>

                    <Grid container spacing={0} className={classe.list}>

                        {places?.map((place, i) => (
                            <Grid ref={elRefs[i]} key={i} item xs={12} >

                                <Details
                                    place={place}
                                    selected={Number(childClicked) === i}
                                    refProp={elRefs[i]} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    );
};

export default List;


