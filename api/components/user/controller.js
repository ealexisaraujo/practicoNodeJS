const TABLA = 'user';

class UserController {
  constructor(store) {
    this.store = store || require('../../../store/dummy');
  }
  list() {
    return this.store.list(TABLA);
  }
  get({ id }) {
    return this.store.get(TABLA, id);
  }

  upsert({ id = null, name = null }) {
    if (!id || !name) {
      return Promise.reject('No se indico el nombre del usuario');
    }
    const user = {
      id,
      name
    };
    return this.store.upsert(TABLA, user);
  }

  remove(id) {
    if (!id) {
      return Promise.reject('No se indico el id del usuario');
    }
    return this.store.remove(TABLA, id);
  }
}

module.exports = UserController;
