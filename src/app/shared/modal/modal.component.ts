import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  data: any;

  emailForm= new FormGroup({
    name: new FormControl('', [
      Validators.email
    ])
  });

  constructor(private apiService: ApiService) {}
  
  ngOnInit() {}
  displayStyle = "none";
  displayStyleProjects = "none";

  openProjectsPopup() {
    this.displayStyleProjects = "block";
  }
  
  closeProjectsPopup() {
    this.displayStyleProjects = "none";
  }

  openPopup() {
    this.displayStyle = "block";
  }
  
  closePopup() {
    this.displayStyle = "none";
  }

  onSubmit(){
    const email= this.emailForm.value;
    console.log(email);
    this.fetchData();
  }

  fetchData(){
    this.apiService.getData().subscribe( response =>{
      this.data  = response;
    });
  }
}