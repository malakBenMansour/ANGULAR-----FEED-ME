import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/front/service/token-storage.service';
import * as Chart from 'chart.js';
import { ITypePercentage, ITypePercentage1 } from 'src/app/front/entity/stat';
import { TokenStorageService } from 'src/app/front/service/token-storage.service';
import { UserService } from 'src/app/front/service/user.service';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

 
  isLoggedIn = false;

 
  constructor(private userService: UserService) { }

  
  public barChartLabels: Label[] = [];
  public barChartData: SingleDataSet = [];
  public barChartType: ChartType = 'bar';
  public barChartColor: Color[] = [
    { backgroundColor: ['#6FA8DC', '#C27BA0', '#93C47D'] },
  ];
  public typeData1: Array<ITypePercentage> = [];


public barChartLegend = true;
  public barChartPlugins = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 90,
  };

///////



public doughnutChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    display: false,
  },
  cutoutPercentage: 80,
};


public doughnutChartLabels: Label[] = [];
public doughnutChartData: SingleDataSet = [];
public doughnutChartType: ChartType = 'doughnut';
public doughnutChartColor: Color[] = [
  { backgroundColor: ['#f68059', '#ffbf3a', '#4e3dc8'] },
];
public typeData: Array<ITypePercentage> = [];
  ngOnInit(): void {
   this.getTypePercentage();
   this.getTypePercentage1();
  
   
  
  }

  getTypePercentage() {

   
    
    


    this.barChartData = [];
    this.barChartLabels = [];
    this.userService.getTypePercentage1().subscribe(
      (d) => {
        // console.log(d);
        d.forEach((typeCount: ITypePercentage1) => {
          console.log(typeCount.count);
          console.log(typeCount.adresse);
          this.barChartData.push(typeCount.count);
          this.barChartLabels.push(typeCount.adresse);
        });
      },
      (error: any) => {
        console.error(error);
      }
    );

}


getTypePercentage1() {
  this.doughnutChartData = [];
  this.doughnutChartLabels = [];
  this.userService.getTypePercentage().subscribe(
    (d) => {
      // console.log(d);
      d.forEach((typeCount: ITypePercentage) => {
        console.log(typeCount.count);
        console.log(typeCount.stateuser);
        this.doughnutChartData.push(typeCount.count);
        this.doughnutChartLabels.push(typeCount.stateuser);
      });
    },
    (error: any) => {
      console.error(error);
    }
  );
}
}
