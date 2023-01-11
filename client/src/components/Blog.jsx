import React from 'react';
import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import Posts from '../JSON/Blog.json';

export default function Blog() {
  return (
    <Grid container spacing={2}>
      {Posts?.posts.map((post) => (
        <Grid item key={post.id} md={4}>
          <Card sx={{
            mt: 2, maxWidth: 345, border: '#1976d2', borderStyle: 'solid',
          }}
          >
            <CardMedia
              sx={{ borderBottom: '#1976d2', borderBottomStyle: 'solid' }}
              component="img"
              alt="img"
              height="300"
              image={post?.img}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {post?.title}
              </Typography>
              <Typography sx={{ mb: 1.5, marginTop: '5%' }}>{post?.body}</Typography>
              <Typography sx={{ mb: 1.5, marginTop: '5%' }} color="text.secondary">
                {post?.data}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
