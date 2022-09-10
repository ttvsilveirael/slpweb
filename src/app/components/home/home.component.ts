import { Component } from '@angular/core';
import { Module } from 'src/app/models/Module';
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
    console.log(list)
  }

  modules: Module[] = [
    {
      title: 'Desenvolvimento Web com Angular',
      description: 'Estudando desenvolvimento web, falando sobre a htmls, css, javascript, typescript, frameworks e aplicando Angular.',
      content: 'https://www.youtube.com/embed/videoseries?list=PLDsQmT-Sg0HhrtQyld_gwJBA80sbEzYfA',
      id: 1
    }, {
      title: 'Desenvolvimento Web API com Node',
      description: 'Estudando banco de dados e backend implementando algumas libraries em node.',
      content: 'https://www.youtube.com/embed/videoseries?list=PLDsQmT-Sg0HhcP8OXP6_6xz0i7XTRsFGN',
      id: 2
    },
  ]

}

