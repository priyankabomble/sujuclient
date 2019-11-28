import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public helper:HttpClient) { }

  select()
  {
    return this.helper.get("http://52.66.211.61:8888/emps");
  }
  SelectByNo(No)
  {
    return this.helper.get("http://52.66.211.61:8888/emps/" +No);
  }
  Update(empobj)
  {
    return this.helper.put("http://52.66.211.61:8888/emps/"+ empobj.No,empobj);
  }
  Delete(No)
  {
    return this.helper.delete("http://52.66.211.61:8888/emps/" + No);
  }
  Insert(empobj)
  {
    return this.helper.post("http://52.66.211.61:8888/emps" ,empobj);
  }
}
