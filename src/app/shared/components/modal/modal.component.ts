///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {ImagesService} from "../../services/image.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  showModdal: boolean;
  constructor(private imageService: ImagesService) { }

  ngOnInit() {
    this.imageService.toggleGallery.subscribe((toggle) => {
       this.showModdal = toggle;
    })
  }

  close() {
    this.showModdal = false;
  }

}
