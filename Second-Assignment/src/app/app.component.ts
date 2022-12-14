import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Second-Assignment';
  message:string = "Message of the Day";
  todo:string = "Enter the message of the day";

  changeMessage(){
    this.message="Tip of the Day";
  }
  
}






/*changeMessageAgain(m1:string){
      alert(m1);
      // console.log(m1)
    }

    //emit(value:string){
    //  console.log(value);
   // }*/