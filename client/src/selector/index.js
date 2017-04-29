export const filterPassword = (password, searchKeyword) => (
  password.filter(password => password.username.includes(searchKeyword))
);
