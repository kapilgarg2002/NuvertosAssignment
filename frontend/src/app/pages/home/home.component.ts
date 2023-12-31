import { Component } from '@angular/core';
import {CompoundService} from '../../service/compound.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title='pagination';
  POSTS:any;
  page:number=1;
  count:number=0;
  tableSize: number=3;
  tableSizes: any=[5,10,15,20];

  constructor(private compoundService:CompoundService){}

  ngOnInit():void{
    this.postLIST();
  }

  postLIST():void{
    this.compoundService.getCompounds().subscribe((response)=>{
      this.POSTS=response;
      console.log(this.POSTS);
      
    })
  }
  onTableDataChange(event: any){
    this.page=event;
    this.postLIST();
  }
  onTableSizeChange(event: any):void{
    this.tableSize=event.target.value;
    this.page=1;
    this.postLIST();
  }
}
