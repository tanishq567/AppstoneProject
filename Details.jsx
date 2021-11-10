
import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@material-ui/lab/Rating'
import useStyles from './style'
const Details = ({place,selected,refProp}) => {
    console.log(place)

    const classes = useStyles();
    if(selected)refProp?.current?.scrollIntoView({behavior :"smooth" ,block:'start'})
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 250 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}  
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box display="flex" justifyContent='space-between'my={2}>
                   <Rating  value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1">{place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent='space-between'>
                    <Typography variant='subtitle1'>Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box display='flex' justifyContent="space-between" my={1} alignItems="center">
                        <img src={award.images.small}/>
                        <Typography variant="subtitle2" color="textsecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="large" label={name} className={classes.Chip} />
                ))}
                {place?.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />{place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                        </Typography>
                )}
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url,'_blank')}>
                        Trip Guider 
                        </Button>

                        </CardActions>
        
        </Card>
    )
}

export default Details
