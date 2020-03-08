const db = {
  user: [
    { id: '1', name: 'Alexis' },
    { id: '2', name: 'Pamela' }
  ]
};

async function list(tabla) {
  return db[tabla] || [];
}

async function get(tabla, id) {
  const col = await list(tabla);
  return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
  if (!db[tabla]) {
    db[tabla] = [];
  }

  db[tabla].push(data);
  console.log(data);
}

async function remove(tabla, id) {
  const index = db[tabla].findIndex(item => item.id === id);
  if (index >= 0) {
    db[tabla].splice(index, 1);
  }
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove
};
