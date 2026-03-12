 
export const state = () => ({
  blogData: null,
});

export const mutations = {
  setBlogData(state, blogData) {
    state.blogData = blogData;
  },
}; 
