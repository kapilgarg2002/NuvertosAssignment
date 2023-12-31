import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Compound } from '../../constants/type';
import { CompoundService } from '../../service/compound.service';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {

  id:string = '';
  compound: Compound = {
    id: 0,
    name: '',
    desc: '',
    image: ''
  }


  constructor(private activatedRoute:ActivatedRoute,private service: CompoundService,private router: Router ){}
  closeDelModalFunc(){
    const modaldiv = document.getElementById('delcomp');
    if(modaldiv!=null){
      modaldiv.addEventListener('hide.bs.modal',event=>{})
    }
  };
  ngOnInit():void{
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getCompound(this.id).subscribe((compound) => (this.compound = compound), (error) => this.router.navigate(['/404']));
  }

}
