import React from 'react';
import useStyles from './style';
import {useSelector} from "react-redux";
import {CircularProgress, Grid} from "@material-ui/core";
import Post from "./Post/Post";

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state)=>state.posts)
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {
          posts.map((post)=>(
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))
        }
      </Grid>
    )
  );
};

export default Posts;
