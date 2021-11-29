import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  count = 0;
  users = [
    {
      id: 1,
      name: "Paul",
      country: "United States",
      age: "23",
      msg: "Hello, how are you?",
      date: "12.5.2018",
      time: "11:13",
      like: 3,
      click: false
    },
    {
      id: 2,
      name: "Alex",
      country: "United Kingdom",
      age: "20",
      msg: "Normally, am learning",
      date: "12.5.2018",
      time: "11:57",
      like: 5,
      click: false
    },
    {
      id: 3,
      name: "Max",
      country: "France",
      age: "25",
      msg: "Hey, I haven`t seen you around here in a while.",
      date: "12.5.2018",
      time: "12:31",
      like: 7,
      click: false
    },
    {
      id: 4,
      name: "market",
      country: "USA",
      age: 18,
      msg: "Buy our product with 90% discount%",
      date: "3.3.2019",
      time: "0:00",
      like: 1,
      click: false
    }
  ];
  error = "";
  plus() {
    console.log("click");
    this.count++;
  }
}
