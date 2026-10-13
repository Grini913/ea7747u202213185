import { Component } from '@angular/core';
import {FooterContent} from '../footer-content/footer-content';

@Component({
  imports: [
    FooterContent
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {}
