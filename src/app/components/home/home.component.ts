import { Component } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showList = false;

  constructor(private youtube: YoutubeService,) {
    this.youtube.playlists.subscribe(
      (lists: any) =>
        this.playlists = lists
    );
    this.youtube.videos.subscribe(
      (lists: any) =>
        this.videos = lists
    );
    this.youtube.getPlaylistsForChanel('UCbbZFqUl4tS2W4yN78mmsyQ', 20);

  }

  videos!: any;

  _playlists!: any;
  get playlists() {
    return this._playlists;
  }
  set playlists(value: any) {
    if (value != undefined && value.length > 0) {
      this.setSelectedPlaylist(value[0]);
      this._playlists = value;
    }
  }

  _selectedPlaylist!: any;
  get selectedPlaylist() {
    return this._selectedPlaylist;
  }

  setSelectedPlaylist(value: any, force = false) {
    this._selectedPlaylist = value;
    this.youtube.getVideosForPlaylists(value.id, { force: force });
  }

  selectItem(list: any) {
    this.setSelectedPlaylist(list, true);
    this.showList = false;
  }

}

