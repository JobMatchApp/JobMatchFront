import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  route: any;
  public moduleName = ""
  public unviversName = ""
  constructor(
    route: ActivatedRoute,

  ) { }
  lienActif = ''
  ngOnInit(): void {
    this.lienActif = document.location.pathname;
    console.log("ModuleName :", this.moduleName)
  }



  // ==========Tooggle Resize =========
  @Input()
  public set_toggle: boolean = true;

  public resizeNavBar() {
    if (this.set_toggle) {
      return ''
    }
    else {
      return 'close'
    }
  }
// ===================================



}
