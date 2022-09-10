import { Component } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showList = false;

  constructor(private youtube: YoutubeService) {
    this.youtube.getPlaylistsForChanel('UCbbZFqUl4tS2W4yN78mmsyQ', 20).subscribe(
      ev => {
        this.playlists = (ev as any).items;
      },
      err => {
        console.log(err)
      }
    )
  }

  videos!: any;
  _playlists!: any;
  set playlists(value: any) {
    this._playlists = value;
    this.selectedPlaylist = value[0];
  }

  get playlists() {
    return this._playlists;
  }

  _selectedPlaylist!: any;
  set selectedPlaylist(value: any) {
    this._selectedPlaylist = value;
    this.youtube.getVideosForPlaylists(value.id.playlistId).subscribe(
      ev => {
        this.videos = (ev as any).items;
      },
      err => {
        console.log(err)
      }
    )
  }

  get selectedPlaylist() {
    return this._selectedPlaylist;
  }

  selectItem(list: any) {
    this.selectedPlaylist = list;
    this.showList = false;
  }

}

