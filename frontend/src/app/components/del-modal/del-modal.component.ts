import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CompoundService } from '../../service/compound.service';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrl: './del-modal.component.css'
})
export class DelModalComponent {
  id: string = '';
  
  constructor(private route: ActivatedRoute, private compoundService: CompoundService, private router: Router) { }
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeAlertModalFunc(){
    this.close.emit();
    
  }

  async deleteCompoundFunc(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    
    
    this.compoundService.deleteCompound(this.id).subscribe(() => {
      this.router.navigate(['/compounds']);
    }, error => console.log(error))
    this.closeAlertModalFunc();
  }
}
