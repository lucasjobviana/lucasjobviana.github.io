import React from 'react'
// import ProjectCard from './ProjectCard';
import { useSelector } from 'react-redux'; 
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material'

const ProjectConteiner = () => {
  const { user: { iconLinks } } = useSelector((store) => store);
  const { project: {projects} } = useSelector((store) => store);
  console.log(projects)
  console.log(iconLinks);
 
  return (
    <Container sx={{ py: 8 }} maxWidth="md">

  <Grid container spacing={4}>
    {projects.map((card) => (
      <Grid item key={card} xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image="https://source.unsplash.com/random?wallpapers"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              { card.title}
            </Typography>
            <Typography>
              { card.description }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" startIcon={<GitHub />} >Code</Button>
            <Button size="small" startIcon={<OpenInNew />}>Deploy</Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container> 
      // <div className='projects-container'>{
      //   projects.map((p,index)=>(
      //     <ProjectCard key={`project${index}`} project={p}  />
      //   ))
      // }
        
      // </div>
  )
}

export default ProjectConteiner;

// {iconLinks.map((a, index) => (
      //   <ProjectCard key={index} iconLink={iconLinks[index]} />
      // ))}