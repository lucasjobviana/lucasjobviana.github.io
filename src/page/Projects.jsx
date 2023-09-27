import React from 'react';
import ProjectContainer from '../component/ProjectConteiner';
// import '../style/Projects.css';
import { AppBar, Avatar, Box, Button,   Container, CssBaseline, IconButton, Link, Stack, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
// import { CameraswitchOutlined, AccountCircle } from '@mui/icons-material';
import { DarkTheme, LightTheme } from '../themes';
import a from '../img/lucas-job-viana.jpg';
import { Email, GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
// import { ContactConteiner } from '../component/ContactConteiner'
import ContactConteiner from '../component/ContactConteiner';

const theme = DarkTheme;
const defaultTheme = createTheme();

const Projects = () => {

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.linkedin.com/in/lucasjobviana/">
          Lucas Job Viana
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <ThemeProvider className='Projects page' theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
         <Avatar sx={{mr:2}} src={a} />
          <Typography variant="h6" color={theme.palette.primary.main} noWrap>
            Lucas Job Viana
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Projetos
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              Hello  visitante. Bem-vindo à seção 'Meus Projetos'! Nesta página você encontrará uma lista com meus
              principais projetos, tanto pessoais quanto acadêmicos.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={1.4}
              justifyContent="center"
            >
              <ContactConteiner />
              {/* <Button variant='contained' size="small" startIcon={<WhatsApp />} href="https://github.com/muhimasri" target='_blank' >Whatsapp</Button>
              <Button variant='outlined' size="small" startIcon={<LinkedIn />} href="https://github.com/muhimasri" target='_blank' >Linkedin</Button>
              <Button variant='outlined' size="small" startIcon={<Email />} href="https://github.com/muhimasri" target='_blank' >Email</Button> */}
            </Stack>
          </Container>
        </Box>

        {/* container */}
        <ProjectContainer />

        {Copyright()}

    
      </main>
    </ThemeProvider>
  );
}

export default Projects;
