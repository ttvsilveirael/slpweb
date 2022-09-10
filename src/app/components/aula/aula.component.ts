import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeService } from 'src/app/services/youtube';

@Component({
  selector: 'aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.scss']
})
export class AulaComponent {

  @Input(`value`)
  set aula(ev: any) {
    this.youtube.getVideoById(ev.snippet.resourceId.videoId).subscribe(
      video => { 
        this.video = video; 
      }
    )
    this._aula = ev;
  }
  get aula() { return this._aula }
  _aula: any;
  video: any;

  constructor(private sanitizer: DomSanitizer, private youtube: YoutubeService) {

  }


  safeSrc() {
    if (this.video == undefined) { return; }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.video.items[0].id}`);
  }

}