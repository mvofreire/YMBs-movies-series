import Storage from "utils/storage";

class FavoritesManager {
  favorites = [];
  constructor() {
    this.favorites = Storage.get("favorites") || [];
  }

  add(id) {
    if (!this.isFavorite(id)) {
      this.favorites.push(id);
      this.save();
      return true;
    }
  }

  remove(id) {
    if (this.isFavorite(id)) {
      const index = this.favorites.indexOf(id);
      this.favorites.splice(index, 1);
      this.save();
    }
    return true;
  }

  toggle(id) {
    try {
      if (!this.isFavorite(id)) {
        this.add(id);
      } else {
        this.remove(id);
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  isFavorite(id) {
    return this.favorites.indexOf(id) > -1;
  }

  save() {
    Storage.set("favorites", this.favorites);
  }

  getList() {
    return this.favorites;
  }
}

export default FavoritesManager;
