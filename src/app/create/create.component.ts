import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
  }
  insert(value){

this.bookService.createNew(value).subscribe(data =>{  
  this.router.navigate(['/']);
  });
  }
  
}
