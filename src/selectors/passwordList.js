export const filterUrlsByKeywords = (state, keywords) => {
  return state.filter(item => item.url.toLowerCase().includes(keywords.toLowerCase()))
}
