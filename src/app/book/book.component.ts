import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BookService } from '../service/book-service.service';
import { Observable } from "rxjs";  
import { Book } from '../model/Book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  posts;
  books: Book[];
  constructor(private bookService:BookService) { }
  
  ngOnInit(): void {
    
  }

  onDelete(value){
    this.bookService.onDelete(value).subscribe();
  }
}
