import { Component, OnInit } from '@angular/core';
import { User }    from './user';
@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
model = new User(18, 'User','',8086824175);
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  newUser() {
    this.model = new User(42, '',' ' , );
  }
  constructor() { }

  ngOnInit() {
  }

}
