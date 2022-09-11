import { Injectable } from "@angular/core";

@Injectable()
export class VideoService {
  storageVideoItems: videoItems = new videoItems();

  setVideoItem(values: any) {
    let items: videoModel[] = [];

    values.forEach((value: any) => {
      items.push({
        playlistId: value.playlistId,
        description: value.description,
        title: value.title,
        videoOwnerChannelTitle: value.videoOwnerChannelTitle,
        id: value.id
      } as videoModel);
    });

    let videos = new videoItems().set(items);
    this.storageVideoItems.set(videos);
  }

}

export class videoModel {
  playlistId!: any;
  title!: any;
  description!: any;
  id!: any;
  videoOwnerChannelTitle!: any;
}

export class videoItems {
  _tries = 0;
  _values?: videoModel[]
  get() {
    if (this._values == null && this._tries < 1) {
      let list = JSON.parse(localStorage.getItem(`vList`) as any);
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
      localStorage.setItem(`vList`, JSON.stringify(values))
    }
  }
}