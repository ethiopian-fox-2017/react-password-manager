export const filterList = (list, searchKeyword) => {
  return list.filter(item => item.url.toLowerCase().includes(searchKeyword.toLowerCase()))
};
