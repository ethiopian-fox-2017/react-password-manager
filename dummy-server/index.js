
module.exports = () => {
  const data = { users: [] }
  data.users.push({
    id: 1,
    username: 'usertest',
    password: 'asQW1@',
    url: 'http://www.google.com',
    createdAt: new Date(),
    updatedAt: ''
  })
  data.users.push({
    id: 2,
    username: 'userdum',
    password: 'ewQS!2',
    url: 'http://www.facebook.com',
    createdAt: new Date(),
    updatedAt: ''
  })
  return data
}