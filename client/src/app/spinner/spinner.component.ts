import { Component, OnInit } from '@angular/core';
import { BusyService } from '../_services/busy.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  constructor(private busy: BusyService) {}

  ngOnInit(): void {}

  getLoading() {
    return this.busy.getLoading();
  }
}
