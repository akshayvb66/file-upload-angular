import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadService } from '../upload.service';
import { UploadEvent,UploadFile,FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  public files: UploadFile[] = [];
  // selectedFiles: FileList;
  currentFileUpload: File;
  showFile = false;
  fileUploads:Observable<string[]>;
  msg: string = null;

 
  constructor(private uploadService: UploadService) { }
 
  ngOnInit() {
  }
 
  selectFile(event:UploadEvent) {
    this.files = event.files;
    console.log(event);
  
  for (const droppedFile of event.files) {

    // Is it a file?
    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
    
    // }

  //  selectFile(event: UploadEvent) {
  //   this.selectedFiles = event.files;
  // }
 
  // upload() {
    

    // if (droppedFile.fileEntry.isFile) {
    //   const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
    //   fileEntry.file((file: File) => {

    // this.currentFileUpload = this.selectedFiles[0];
    
    this.uploadService.pushFileToStorage(file)
      .subscribe( File => {
        this.msg = 'successfully uploaded';
      },
      error => {
        this.msg='failed to upload file (file already exists or file is too large)';
      });
    })}
  }

}
  

  // showFiles(enable: boolean) {
  //   this.showFile = enable
  //   if (enable) {
  // this.fileUploads=this.uploadService.getFiles();
  // console.log("In showfiles")
  // }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }
  

}

