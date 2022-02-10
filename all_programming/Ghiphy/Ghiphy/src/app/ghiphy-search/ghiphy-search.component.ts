import { Component, OnInit } from '@angular/core';
import { Ngifi } from '../ngifi';
import {HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ghiphy-search',
  templateUrl: './ghiphy-search.component.html',
  styleUrls: ['./ghiphy-search.component.css']
})
export class GhiphySearchComponent implements OnInit {

  ngifiUrl:Ngifi

  constructor(private http:HttpClient) { 
  }

    ngOnInit() {

      interface ApiResponse{
        url: string;
      }
  
      this.http.get<ApiResponse>(`https://api.giphy.com/v1/gifs/search?api_key=tgq8Z8CyHTbdEQC4LmZex3kNGo9Ul8N7&q=${this.ngifi.ngifiUrl}&limit=25&offset=0&rating=g&lang=en`
     ).subscribe(data=>{
  
        this.ngifiUrl = new Ngifi(data.url)
      })
    }
  }

