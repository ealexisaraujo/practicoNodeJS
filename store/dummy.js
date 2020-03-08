const db = {
  user: [{ id: 1, name: 'Alexis' }]
};

const list = async tabla => {
  const result = await db[tabla];
  return result;
};

const get = async (tabla, id) => {
  let col = list(tabla);
  const result = (await col.find(item => item.id == id)) || null;
  return result;
};

const upsert = async (tabla, data) => {
  const datainsert = await db[tabla].push(data);
  return datainsert;
};

// eslint-disable-next-line no-unused-vars
const remove = (tabla, id) => {
  return true;
};

module.exports = {
  list: list,
  get: get,
  upsert: upsert,
  remove: remove
};
