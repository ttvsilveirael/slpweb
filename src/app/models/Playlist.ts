import { Injectable } from "@angular/core";

@Injectable()
export class PlaylistService {
  storageMenuItems: menuItems = new menuItems();

  setMenuItem(values: any) {
    let items: menuitem[] = [];

    values.forEach((value: any) => {
      items.push({ title: value.title, id: value.id });
    });

    let menu = new menuItems().set(items);
    this.storageMenuItems.set(menu);
  }

}

export class menuItems {
  _tries = 0;
  _values?: menuitem[]
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

export class menuitem {
  title!: string;
  id!: string;
}