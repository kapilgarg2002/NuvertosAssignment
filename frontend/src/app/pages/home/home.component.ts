import { Component } from '@angular/core';
import {CompoundService} from '../../service/compound.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Compound, CompoundResponse } from '../../constants/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title='pagination';
  compounds:Compound[]=[];
  page:number=1;
  count:number=0;
  totalCompounds: number=0;
  totalPages: number=0;
  pages:number[]=[];

  constructor(private compoundService:CompoundService, private route:ActivatedRoute,private router:Router){}

  ngOnInit():void{

    this.route.queryParams.subscribe(params => {
      if(params['page'] && isNaN(Number(params['page']))){
        this.router.navigate(['/404'])
        return;
      }

      if(params['page'] && Number(params['page']) < 1){
        this.router.navigate(['/404'])
        return;
      }

      if ((Object.keys(params).length === 1 && !params['page']) || Object.keys(params).length > 1 ) {
        this.router.navigate(['/404'])
        return;
      }
      
      this.page = Number(params['page']) || 1;
      this.compoundService.getCompounds(this.page).subscribe((res: CompoundResponse) => {
        console.log(res.rows);
        this.compounds = res.rows;
        this.totalCompounds = res.count;
        this.totalPages = Math.ceil(this.totalCompounds / 3);
        this.pages=Array(this.totalPages);
        console.log(this.pages);
        
        console.log(this.totalPages);
        console.log(this.totalCompounds);
      }, err => {
        this.router.navigate(['/404']);
      })
    });
    // this.postLIST();
  }

  // postLIST():void{
  //   this.compoundService.getCompounds(this.page).subscribe((response)=>{
  //     this.POSTS=response;
  //     console.log(this.POSTS);
      
  //   })
  // }
  // onTableDataChange(event: any){
  //   this.page=event;
  //   this.postLIST();
  // }
  // onTableSizeChange(event: any):void{
  //   this.tableSize=event.target.value;
  //   this.page=1;
  //   this.postLIST();
  // }
}
