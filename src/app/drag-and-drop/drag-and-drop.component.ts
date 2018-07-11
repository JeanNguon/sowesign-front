import { Component, EventEmitter, Output } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'drag-and-drop',
    templateUrl: './drag-and-drop.component.html',
    styleUrls: ['./drag-and-drop.component.css']
})
export class DragAnDropComponent {

    @Output() done = new EventEmitter<object>();
    public files: UploadFile[] = [];

    constructor(private http: HttpClient) { }

    public dropped(event: UploadEvent) {
        this.files = event.files;
    }

    public validate() {
        for (const droppedFile of this.files) {

            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {
                    // You could upload it like this:
                    const formData = new FormData()
                    formData.append('pdf_rds', file)
           
                    this.http.post('http://localhost:1337/pdf/upload', formData, { responseType: 'json' })
                    .subscribe(data => {
                        this.files = [];
                        this.done.emit(data);
                    })

                });
            } else {
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        }
    }

    public fileOver(event) {
        console.log(event);
    }

    public fileLeave(event) {
        console.log(event);
    }
}
