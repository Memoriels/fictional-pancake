import {Component, OnInit} from '@angular/core';
import {Announcement} from "../../announcements";
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css'],
})
export class AnnouncementDetailsComponent {
  announcement!: Announcement;
  currentUrl!: string;

  

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

  protected readonly window = window;

  

  title = 'my-qr-code-app';
}


