import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
emp;
  constructor(private service:DataService,
              private route :ActivatedRoute,
              private router : Router) { 
          this.emp={No : "",Name: "",Age:""};
              }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let No= result.get("No");
      let observavbleResult=this.service.SelectByNo(No);
      observavbleResult.subscribe((record)=>{
        console.log(record[0]);
      this.emp=record[0];
      });
    });
}

update()
{
  let observavbleResult=this.service.Update(this.emp);
  observavbleResult.subscribe((result)=>{
    this.router.navigate(['/home']);
  });
}
}

