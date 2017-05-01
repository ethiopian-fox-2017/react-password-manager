export const filterPassword = (passwords, searchKeyword) => (
  passwords.filter(password => password.url.includes(searchKeyword))
)
