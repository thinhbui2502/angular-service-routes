import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {YoutubeService} from "../youtube.service";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit, OnDestroy {
  song: any
  sub: Subscription;

  constructor(
    private  youtubeService: YoutubeService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.youtubeService.find(id);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
