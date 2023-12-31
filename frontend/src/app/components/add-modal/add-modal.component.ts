import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import { CompoundService } from '../../service/compound.service';  

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css'
})


export class AddModalComponent implements OnInit{
  @Output() close: EventEmitter<void> = new EventEmitter<void>();    
  compoundForm: FormGroup = new FormGroup({})
  name:string="";
  image:string="";
  desc: string="";

  constructor(private route: ActivatedRoute, private compoundService: CompoundService, private router: Router) { } 
  ngOnInit(): void {
    this.compoundForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required)
    });
  }
  onSubmit(){
    if(this.name===""){
      alert('please add a name');
      return;
    }
    if(this.desc===""){
      alert('please add a description');
      return;
    }

    const newCompound={
      name: this.name,
      image:this.image,
      desc:this.desc
    };

    this.compoundService.addCompound(newCompound).subscribe(() => {       
      this.router.navigate(['/compounds']);       
      window.location.reload();     
    });

    this.desc='';
    this.name='';
    this.image='';
  }
}
