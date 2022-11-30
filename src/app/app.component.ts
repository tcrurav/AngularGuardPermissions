import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bicycles';

  constructor(private permissionsService: NgxPermissionsService) {}

  ngOnInit(): void {
    const perm: any[] = [];

    this.permissionsService.loadPermissions(perm);
    
    //  this.http.get('url').subscribe((permissions) => {
    //    //const perm = ["ADMIN", "EDITOR"]; example of permissions
    //    this.permissionsService.loadPermissions(permissions);
    // })
  }
}
