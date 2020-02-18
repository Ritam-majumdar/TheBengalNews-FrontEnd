import { Component, OnInit, PipeTransform, Pipe, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class VideoDialogComponent implements OnInit {

  str: string ="";
  video: string = "";


  constructor(private dialogRef: MatDialogRef<VideoDialogComponent>,@Inject(MAT_DIALOG_DATA) data) { 
    this.str = data;
  }

  ngOnInit() {
    this.video = "https://www.youtube.com/embed/" + this.str;
    console.log(this.video);
  }

  close() {
    this.dialogRef.close();
}

}
