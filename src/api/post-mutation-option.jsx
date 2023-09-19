export const createPostOptions = (newPost) => {
  return {
    optimisticData: (posts) => [...posts, newPost],
    rollbackOnError: true,
    populateCache: (added, posts) => [...posts, added],
    revalidate: false,
  };
};
