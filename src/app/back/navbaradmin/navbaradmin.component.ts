import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/front/service/token-storage.service';


@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {


  constructor(private tokenStorageService: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.tokenStorageService.signOut();
    //window.location.reload();
    this.router.navigate(['']);
  }

}
