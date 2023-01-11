import React, { useState, useEffect } from 'react';
import {
  Box,
  Card, CardContent, Grid, TextField, Typography,
} from '@mui/material';
import Projects from '../JSON/Portfolio.json';

export default function Portfolio() {
  const [projects, setProjects] = useState(Projects?.portfolio || []);
  const [value, setValue] = useState('');
  const filtredProjects = projects
    .filter((project) => project.time.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  || project.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  || project.describe.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  useEffect(() => {
    setProjects(projects);
  }, []);
  return (
    <Box>
      <Box
        className="searchForm"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '55ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-search"
          label="Поиск"
          type="search"
          variant="standard"
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
      <Grid container spacing={2}>
        {filtredProjects?.map((project) => (
          <Grid item key={project?.id} md={6}>
            <Card sx={{
              mt: 2, maxWidth: 500, border: '#1976d2', borderStyle: 'solid',
            }}
            >
              <CardContent>
                <Typography sx={{ textDecoration: 'underline', textDecorationColor: '#1976d2' }} variant="h5" component="div">
                  {project?.title}
                </Typography>
                <Typography component="span" sx={{ mb: 1.5, marginTop: '5%' }}>
                  Краткое описание:
                  {' '}
                  {project.describe}
                </Typography>
                <Typography sx={{ mb: 1.5, marginTop: '2%' }}>
                  Роль в проекте:
                  {' '}
                  {project.role}
                </Typography>
                {project?.results?.map((el, i) => (
                  <p key={i?.toString()}>
                    -
                    {' '}
                    { el }
                  </p>
                ))}
                <Typography sx={{ mb: 1.5, marginTop: '5%' }} color="text.secondary">
                  {project?.time}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
