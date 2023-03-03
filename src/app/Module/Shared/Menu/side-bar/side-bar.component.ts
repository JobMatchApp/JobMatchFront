import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  // ======== BTN SIDEBAR css=> open/close ==========

  iconToggle = "";
  public toggle: boolean = true;

  public togggle() {
    this.toggle = !this.toggle;
  }
  public toggleNav(): string {
    if (this.toggle) {
      this.iconToggle = "fiber_manual_record"
      return ""
    }
    else {
      this.iconToggle = ""
      return "close"
    }
  }

// ============================================

  ngAfterViewInit() {
    document.querySelectorAll('.index-arrow').forEach((arrowEl: { addEventListener: (arg0: string, arg1: (e: any) => void) => void; }, i: any) => {
      arrowEl.addEventListener('click', (e) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
      });
    });
  }

  //

}
