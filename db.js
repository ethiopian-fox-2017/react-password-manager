module.exports = () => {
  const data = { users: [] };
  // Create 1000 users
  data.users.push({
    id: 1,
    username: 'admin',
    password: 'admin',
    url: 'www.gog.com',
    createdAt: new Date(),
    updatedAt: '',
  });
  data.users.push({
    id: 2,
    username: 'juan',
    password: '12345',
    url: 'www.gogcuk.com',
    createdAt: new Date(),
    updatedAt: '',
  });

  return data;
};
