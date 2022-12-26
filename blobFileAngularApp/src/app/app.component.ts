import { Component } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { Document, Packer, Paragraph, TextRun } from 'docx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fileSaver: FileSaverService) {}

  generateWord(): void {

    const fileName = "manfredCV";

    // Usando la libreria docx, creamos un documento simple 'Hello World'
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun('Hello World'),
              ],
            }),
          ],
        },
      ],
    });


    // Por medio de docx, transformamos el documento a formato blob y
    // lo descargamos con la libreria ngx-filesaver
    Packer.toBlob(doc).then((blob) => {
      this.fileSaver.save(blob, fileName);
    });
  }
}
