export const filterData = (datas, searchKeyword) => (
  datas.filter(data => data.url.toLowerCase().includes(searchKeyword.toLowerCase()))
)
