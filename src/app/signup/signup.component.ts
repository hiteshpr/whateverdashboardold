import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	 public modalRef: BsModalRef;
	public name:string;

  constructor(private router: Router, private modalService: BsModalService) { }
   
   onSubmit(value: any,isValid: boolean,template){
		console.log(value);
		
		if(!isValid){
       alert('input invalid');
   }else{
   	this.name=value.mem_name;
   	this.openModal(template);
   	/*this.router.navigate(['./home']);*/
   }
	}
  ngOnInit() {
  }
 
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
