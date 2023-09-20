export const createPostOptions = (newPost) => {
  return {
    optimisticData: (posts) => [newPost, ...posts],
    rollbackOnError: true,
    populateCache: (added, posts) => [added, ...posts],
    revalidate: false,
  };
};
