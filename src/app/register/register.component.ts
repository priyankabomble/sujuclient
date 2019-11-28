import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private service:DataService,
               private router:Router) { }

  ngOnInit() {
  }

  insert(myform)
  {
    let ObservableResult =this.service.Insert(myform.form.value);
    ObservableResult.subscribe((result)=>{
      console.log(result);
    });
  }

  goToHome()
  {
    this.router.navigate(['/home']);
  }
}
