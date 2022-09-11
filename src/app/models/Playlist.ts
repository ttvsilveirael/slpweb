import { Injectable } from "@angular/core";

@Injectable()
export class PlaylistService {
  storagePlaylistItems: playlistItems = new playlistItems();

  setPlaylistItem(values: any) {
    let items: playlistitem[] = [];

    values.forEach((value: any) => {
      items.push({ title: value.title, id: value.id });
    });

    let playlist = new playlistItems().set(items);
    this.storagePlaylistItems.set(playlist);
  }

}

export class playlistItems {
  _tries = 0;
  _values?: playlistitem[]
  get() {
    if (this._values == null && this._tries < 1) {
      let list = JSON.parse(localStorage.getItem(`mList`) as any);
      if (list != null) {
        this._values = list;
      }
      this._tries++;
    }
    return this._values;
  }

  set(values: any) {
    if (this._values != values) {
      this._values = values;
      localStorage.setItem(`mList`, JSON.stringify(values))
    }
  }
}

export class playlistitem {
  title!: string;
  id!: string;
}