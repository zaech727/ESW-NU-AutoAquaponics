import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../CSS/pages.css"

const esw = require("../Lib/esw.png");
const wildIdeas = require("../Lib/wild-ideas.png");
const msab = require("../Lib/msab.png");

const AboutSection = ({ image_left, title, text, images, contact }) => {
    if (contact) {
        return (
            <div className="App">
                <div className="pages">
                    <Card sx={{ maxWidth: 2000, minHeight: 300, paddingLeft: '20px', paddingRight: '20px' }}>
                        <CardContent>
                            <Grid
                                container
                                columns={5}
                                alignItems='center'
                                columnSpacing={5}
                            >
                                <Grid item xs={2} size='contain'>
                                    <img src={images[0]} style={{width: '100%', height: '100%'}}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="h2">{title}</Typography>
                                    <br/>
                                    <Typography className="about-text" variant="h6">
                                        Email: <button onClick={() => window.location = 'mailto:nu.urbanagriculture@gmail.com'}>nu.urbanagriculture@gmail.com</button>
                                        <br/>
                                        Website: <a target='_blank' href='https://esw-nu.github.io/'>esw-nu.github.io</a>
                                        <br/>
                                        Blog: <a target='_blank' href='https://eswprojects.planio.com/projects/autoaquaponics'>eswprojects.planio.com/projects/autoaquaponics</a>
                                        <br/><br/>
                                        This project was founded under Engineers for a Sustainable World @<a className='NU' target='_blank' href='https://www.northwestern.edu/'>Northwestern</a>
                                        <br/><br/>
                                        <i>Made possible with the support of:</i>
                                    </Typography>
                                    <Grid
                                        container
                                        columns={4}
                                        alignItems='center'
                                        justifyContent='space-evenly'
                                    >
                                        <Grid item xs={1} size='contain'>
                                            <img src={esw} style={{width: '90%', height: '90%'}}/>
                                        </Grid>
                                        <Grid item xs='auto' size='contain'>
                                            <img src={wildIdeas} style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                        </Grid>
                                        <Grid item xs='auto' size='contain'>
                                            <img src={msab} style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
    if (images.length > 1) {
        if (image_left) {
            return (
                <div className="App">
                    <div className="pages">
                        <Card sx={{ maxWidth: 2000, minHeight: 300, paddingLeft: '20px', paddingRight: '20px' }}>
                            <CardContent>
                                <Grid
                                    container
                                    columns={2}
                                    alignItems='center'
                                    columnSpacing={5}
                                >
                                    <Grid item xs={1} size='contain'>
                                        <Grid
                                            container
                                            columns={2}
                                            alignItems='center'
                                            columnSpacing={2}
                                        >
                                            <Grid item xs={1} size='contain'>
                                                <img src={images[0]} style={{width: '100%', height: '100%'}}/>
                                            </Grid>
                                            <Grid item xs={1} size='contain'>
                                                <img src={images[1]} style={{width: '100%', height: '100%'}}/>
                                            </Grid>
                                            <Grid item xs={1} size='contain'>
                                                <img src={images[2]} style={{width: '100%', height: '100%'}}/>
                                            </Grid>
                                            <Grid item xs={1} size='contain'>
                                                <img src={images[3]} style={{width: '100%', height: '100%'}}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Typography variant="h2">{title}</Typography>
                                        <br></br>
                                        <Typography className="about-text" variant="h6">{text}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <div className="pages">
                        <Card sx={{ maxWidth: 2000, minHeight: 300, paddingLeft: '20px', paddingRight: '20px' }}>
                            <CardContent>
                                <Grid
                                    container
                                    columns={2}
                                    alignItems='center'
                                    columnSpacing={5}
                                >
                                    <Grid item xs={1}>
                                        <Typography variant="h2">{title}</Typography>
                                        <br></br>
                                        <Typography className="about-text" variant="h6">{text}</Typography>
                                    </Grid>
                                    <Grid item xs={1} size='contain'>
                                        <Grid
                                            container
                                            columns={2}
                                            alignItems='center'
                                            columnSpacing={2}
                                        >
                                            <Grid item xs={1} size='contain'>
                                                <img src={images[0]} style={{width: '100%', height: '100%'}}/>
                                            </Grid>
                                            <Grid item xs={1} size='contain'>
                                                <img src={images[1]} style={{width: '100%', height: '100%'}}/>
                                            </Grid>
                                            <Grid item xs={1} size='contain'>
                                                <img src={images[2]} style={{width: '100%', height: '100%'}}/>
                                            </Grid>
                                            <Grid item xs={1} size='contain'>
                                                <img src={images[3]} style={{width: '100%', height: '100%'}}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )
        }
    } else {
        if (image_left) {
            return (
                <div className="App">
                    <div className="pages">
                        <Card sx={{ maxWidth: 2000, minHeight: 300, paddingLeft: '20px', paddingRight: '20px' }}>
                            <CardContent>
                                <Grid
                                    container
                                    columns={5}
                                    alignItems='center'
                                    columnSpacing={5}
                                >
                                    <Grid item xs={2} size='contain'>
                                        <img src={images[0]} style={{width: '100%', height: '100%'}}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="h2">{title}</Typography>
                                        <br></br>
                                        <Typography className="about-text" variant="h6">{text}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <div className="pages">
                        <Card sx={{ maxWidth: 2000, minHeight: 300, paddingLeft: '20px', paddingRight: '20px' }}>
                            <CardContent>
                                <Grid
                                    container
                                    columns={5}
                                    alignItems='center'
                                    columnSpacing={5}
                                >
                                    <Grid item xs={3}>
                                        <Typography variant="h2">{title}</Typography>
                                        <br></br>
                                        <Typography className="about-text" variant="h6">{text}</Typography>
                                    </Grid>
                                    <Grid item xs={2} size='contain'>
                                        <img src={images[0]} style={{width: '100%', height: '100%'}}/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )
        }
    }
};

export default AboutSection;