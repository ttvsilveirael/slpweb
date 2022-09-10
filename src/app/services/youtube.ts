import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const apiKey = '';

@Injectable()
export class YoutubeService {

  constructor(private http: HttpClient) { }

  getVideosForChanel(channel: any, maxResults = 20) {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&channelId=' + channel + '&order=date&part=snippet&type=video,id&maxResults=' + maxResults
    return this.http.get(url);
  }
  getPlaylistsForChanel(channel: any, maxResults = 20) {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&channelId=' + channel + '&order=date&part=snippet&type=playlist,id&maxResults=' + maxResults
    return this.http.get(url);
  }
  getVideosForPlaylists(playlist: any, maxResults = 20) {
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist}&key=${apiKey}&part=snippet&maxResults=15`
    return this.http.get(url);
  }
  getVideoById(id:any){
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${apiKey}&maxResults=15`;
    return this.http.get(url);
  }
}
// 'https://youtube.googleapis.com/youtube/v3/playlists?id=PLDsQmT-Sg0HhrtQyld_gwJBA80sbEzYfA&key=[YOUR_API_KEY]' \
