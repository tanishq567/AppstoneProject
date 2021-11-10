import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating'
import useStyles from './style'
import { Place } from '@mui/icons-material';

const Map = ({ setCoords, setBounds, places, setChildClicked,coords}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)')
  //  const [childClicked,setChildClicked] =useState(null)
    //const coords = { lat: 26.4499, lng: 80.3399 }

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key:process.env.React_APP_GOOGLE_API_KEY}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={(e) => {
                    console.log(e);
                    setCoords({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={(child) =>setChildClicked(child)}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.makerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color='primary' fontSize='large' />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                                        {place.name} 
                                    </Typography>
                                    <img
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                    />
                                </Paper>
                            )

                        }
                    </div>
                ))}

            </GoogleMapReact >
        </div >
    )
}
export default Map;