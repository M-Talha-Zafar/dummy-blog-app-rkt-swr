import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { cacheKey, createPost } from "../../api/post-api";
import useSWR from "swr";
import { createPostOptions } from "../../api/post-mutation-options";
import { useSnackbar } from "../../contexts/SnackbarContext";

const AddPost = () => {
  const { mutate } = useSWR(cacheKey);
  const showMessage = useSnackbar();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (newTitle.length === 0) {
      setTitleError("Title is required");
    } else {
      setTitleError("");
    }
  };

  const handleBodyChange = (e) => {
    const newBody = e.target.value;
    setBody(newBody);
    if (newBody.length === 0) {
      setBodyError("Body is required");
    } else {
      setBodyError("");
    }
  };

  const handleAddPost = async () => {
    if (title.trim().length > 0 && body.trim().length > 0) {
      setTitleError("");
      setBodyError("");

      const newPost = {
        title: title.trim(),
        body: body.trim(),
      };

      try {
        await mutate(createPost(newPost), createPostOptions(newPost));
        showMessage("Post created successfully");
        setTitle("");
        setBody("");
      } catch (ex) {
        showMessage("Error creating post!", "error");
        console.error(ex);
      }
    } else {
      setTitleError(title.trim().length === 0 ? "Title is required" : "");
      setBodyError(body.trim().length === 0 ? "Body is required" : "");
    }
  };

  return (
    <Box p={5}>
      <Typography variant="h4" mb={3}>
        Add Post
      </Typography>
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={handleTitleChange}
        error={!!titleError}
        helperText={titleError}
      />
      <TextField
        sx={{ mt: 2 }}
        id="body"
        label="Body"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={body}
        onChange={handleBodyChange}
        error={!!bodyError}
        helperText={bodyError}
      />
      <Button
        sx={{ mt: 2 }}
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleAddPost}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddPost;
