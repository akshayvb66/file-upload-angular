import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  showFile = false;
  fileUploads:Observable<string[]>;
  msg: string = null;

 
  constructor(private uploadService: UploadService) { }
 
  ngOnInit() {
  }
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    
     this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload)
      .subscribe( File => {
        this.msg = 'successfully uploaded';
      },
      error => {
        this.msg='failed to upload file (file already exists or file is too large)';
      });
  }
  

  showFiles(enable: boolean) {
    this.showFile = enable
    if (enable) {
  this.fileUploads=this.uploadService.getFiles();
  console.log("In showfiles")
  }
  

}
}
