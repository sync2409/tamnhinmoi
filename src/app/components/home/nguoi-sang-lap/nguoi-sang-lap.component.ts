import { Component, OnInit } from '@angular/core';
import { jsConfig } from 'src/app/config/jsConfig';

@Component({
  selector: 'app-nguoi-sang-lap',
  templateUrl: './nguoi-sang-lap.component.html',
  styleUrls: ['./nguoi-sang-lap.component.css']
})
export class NguoiSangLapComponent implements OnInit {
public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  constructor() { }

  ngOnInit() {
  }

}
