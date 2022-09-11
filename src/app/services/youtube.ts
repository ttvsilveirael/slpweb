import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { videoModel, VideoService } from "../models/Video";
import { easyService, menuitem } from "./easy";

@Injectable()
export class YoutubeService {
  _playlists: any = new BehaviorSubject<any>(undefined);
  get playlists(): Observable<any> { return this._playlists.asObservable() }

  _videos: any = new BehaviorSubject<any>(undefined);
  get videos(): Observable<any> { return this._videos.asObservable() }

  constructor(private http: HttpClient, private easy: easyService, private video: VideoService) { }
  get apiKey() { return environment.apiKey }
  getVideosForPlaylists(playlist: any, { maxResults = 3, force = false }) {
    if (!force) {
      try {
        let strMen = this.video.storageVideoItems.get();
        if (strMen != null && strMen.length > 0) {
          this._videos.next(strMen);
          return;
        }
      } catch (err) {
        console.log(`Error retrieving from videos storage`);
      }
    }
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist}&key=${this.apiKey}&part=snippet&maxResults=${maxResults}`
    this.http.get(url).subscribe(ev => {
      let nList: videoModel[] = [];
      (ev as any).items.forEach((item: any) => {
        nList.push({
          playlistId: item?.snippet?.playlistId,
          description: item?.snippet?.description,
          title: item?.snippet?.title,
          videoOwnerChannelTitle: item?.snippet?.videoOwnerChannelTitle,
          id: item?.snippet?.resourceId?.videoId,
        })
      });
      this.video.setVideoItem(nList);
      this._videos.next(nList)
    });
  }

  getPlaylistsForChanel(channel: any, maxResults = 3) {
    try {
      let strMen = this.easy.storageMenuItems.get();
      if (strMen != null && strMen.length > 0) {
        this._playlists.next(strMen);
        return;
      }
    } catch (err) {
      console.log(`Error retrieving playlists from storage`);
    }

    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet&type=playlist,id&maxResults=' + maxResults
    this.http.get(url).subscribe(ev => {
      let nList: menuitem[] = [];
      (ev as any).items.forEach((item: any) => {
        nList.push({
          title: item?.snippet?.title,
          id: item?.id?.playlistId
        })
      });
      this.easy.setMenuItem(nList);
      this._playlists.next(nList)
    });
  }

  getVideoById(id: any) {
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
