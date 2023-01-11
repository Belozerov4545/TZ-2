import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function AboutMe() {
  return (
    <Stack direction="column" spacing={2}>
      <Box
        className="about"
        sx={{
          marginBlock: '2%', width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'row',
        }}
      >
        <Avatar
          alt="Антон Белозеров"
          src="https://img.hhcdn.ru/photo/710268555.jpeg?t=1673440172&h=TozK6hLpLpg8-thmbPKzyw"
          sx={{
            border: '#1976d2', borderStyle: 'solid', marginTop: '2%', width: '25%', height: '25%',
          }}
        />
        <Box className="aboutInfo" sx={{ marginLeft: '2%' }}>
          <Typography sx={{ marginTop: '2%' }} variant="h3" gutterBottom>
            Антон Белозеров
          </Typography>
          <Typography variant="h5" sx={{ textDecoration: 'underline', textDecorationColor: '#1976d2' }} gutterBottom>
            Немного обо мне
          </Typography>
          <Typography variant="body1" gutterBottom>
            В IT-индустрии более 2 лет.
            Люблю разрабатывать стильные и
            полезные вещи, а еще Java Script и
            React за их широкие возможности.
            Мои главные качества - это
            ответственность, упорство, а так же
            любовь к новым технологиям.
          </Typography>
        </Box>
      </Box>
      <Box
        className="otherInfo"
        sx={{
          marginBlock: '2%', width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'row',
        }}
      >
        <Box className="education">
          <Typography variant="h5" sx={{ textDecoration: 'underline', textDecorationColor: '#1976d2' }} gutterBottom>
            Мое образование
          </Typography>
          <Typography component="span" variant="body1" gutterBottom>
            <p>
              2022 | Российский университет транспорта
              (МИИТ)
            </p>
            <p>- Бакалавр</p>
            <p>
              2017 | Московский колледж транспорта (МКТ)
            </p>
            <p>- Техник</p>
          </Typography>
        </Box>
        <Box className="skills" sx={{ marginLeft: '5%' }}>
          <Typography variant="h5" sx={{ textDecoration: 'underline', textDecorationColor: '#1976d2' }} gutterBottom>
            Мои навыки
          </Typography>
          <Typography variant="h6" gutterBottom>
            Frontend:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Java Script (ES6), React,
            Redux, Saga, Thunk, HTML &
            CSS, Bootstrap, Material-UI
          </Typography>
          <Typography variant="h6" gutterBottom>
            Backend:
          </Typography>
          <Typography variant="body1" gutterBottom>
            NodeJS, Express
          </Typography>
          <Typography variant="h6" gutterBottom>
            Database:
          </Typography>
          <Typography variant="body1" gutterBottom>
            PostgreSQL, Sequelize ORM
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ textDecoration: 'underline', textDecorationColor: '#1976d2' }} gutterBottom>
        Контакты
      </Typography>
      <Box className="contacts" sx={{ display: 'flex', flexDirection: 'row' }}>
        <a href="https://www.linkedin.com/in/anton-belozerov/">
          <LinkedInIcon sx={{ fontSize: 35, color: '#1976d2' }} />
        </a>
        <EmailIcon sx={{ marginLeft: '1%', fontSize: 35, color: '#1976d2' }} />
        <Typography sx={{ marginLeft: '1%', fontSize: 20 }}>
          a.a.belozerov4545@mail.ru
        </Typography>
        <LocalPhoneIcon sx={{ marginLeft: '1%', fontSize: 35, color: '#1976d2' }} />
        <Typography sx={{ marginLeft: '1%', fontSize: 20 }}>
          +7 (916) 109-94-24
        </Typography>
      </Box>
    </Stack>
  );
}
