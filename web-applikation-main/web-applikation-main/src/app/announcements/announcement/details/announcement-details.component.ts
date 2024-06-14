import { Component, OnInit } from '@angular/core';
import { Announcement } from "../../announcements";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css'],
})
export class AnnouncementDetailsComponent implements OnInit {
  announcement!: Announcement;
  currentUrl!: string;
  protected readonly window = window;
  title = 'my-qr-code-app';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCurrentUrl();
  }

  getCurrentUrl(): void {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
  }

  getAnnouncementStateBackgroundColor() {
    if (this.announcement) {
      switch (this.announcement.state) {
        case 'Verfügbar':
          return '#08C51C';
        case 'In Bearbeitung':
          return '#ED6600';
        case 'Abgeschlossen':
          return '#808080';
      }
    }
    return 'white';
  }

  downloadQRCode(): void {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement; 
    const url = canvas.toDataURL('image/png'); 
    const a = document.createElement('a');
    a.href = url;
    a.download = 'QRCode-Anzeige.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
