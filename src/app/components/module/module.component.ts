import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Module } from 'src/app/models/Module';

@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  @Input('value')
  module!: Module;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  safeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.module.content.toString());
  }
}