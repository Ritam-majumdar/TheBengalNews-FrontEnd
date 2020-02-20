import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  uploadedFiles: Array<File>;
  articleImage: string = "";
  responseMessage: any = null;
  uploaded: boolean = false;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onFileSelected(element) {
    console.log(element);
    this.uploadedFiles = element.target.files;
  }

  onUpload() {

    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('http://172.105.125.158:3000/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
        this.responseMessage = response;
        this.articleImage = this.responseMessage.message;
        console.log("Response:" + this.responseMessage);
        this.uploaded = true;

      })
      



  }
  onSave() {
    this.messageEvent.emit(this.articleImage)
  }

}
