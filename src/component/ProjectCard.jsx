import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';
 
const ProjectCard = ({
  project: { title , description, urlProject, urlRepository, urlImage}
  }) =>  {

  return (  
    <Grid item key={`${title}`} xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image={urlImage}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              { title}
            </Typography>
            <Typography>
              { description }
            </Typography>
          </CardContent>
          <CardActions>
        
            <Button size="small" startIcon={<GitHub />} href={urlRepository} target='_blank' >Code</Button>
            <Button size="small" startIcon={<OpenInNew />} href={urlProject} target='_blank' >Deploy</Button>
            
          </CardActions>
        </Card>
    </Grid> 
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    urlProject: PropTypes.string,
    urlImage: PropTypes.string,
    urlRepository: PropTypes.string
  }).isRequired
}
export default ProjectCard;


{/* <a href= { to } >
      <img src={ urlIcon } alt={ altText } className={ className } />
    </a>  */}

{/* <div className='project-card'>
      <div className='project-card-header'>
      <h3>{title}</h3>
      <h4>{description}</h4>
        </div>
      
       
      <img src={urlImage} alt={`imagem do projeto ${title} `} />
      <div className='links-containner'>
      <a href={urlProject}><img src={externalIcon} alt="Link para o projeto no github." /></a>
      <a href={urlRepository}><img src={githubIcon} alt="Link para o projeto no github." /></a>

      </div>
     
     
     </div> */}