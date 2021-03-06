import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'Moe','If music be the food of love, play on.','William shakespeare ', new Date(2020,11,2),0,0),
    new Quote (2,'Missy','If you can dream it, you can do it. ','Walt Disney',new Date(2020,11,2),0,0),
    new Quote (3,'Olivia','Start by doing what is necessary then do what is possible; and suddenly you are doing the impossible.','Francis of Assisi',new Date(2020,10,31),0,0),
    new Quote (4,'Magic','What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.','Ralph Waldo Emerson',new Date(2020,11,2),0,0),
    new Quote (5,'Zeek','We know what we are, but know not what we may be.','William shakespeare',new Date(2020,11,2),0,0),
    new Quote (6,'Orny','If opportunity does not knock, build a door.','Milton Berle',new Date(2020,11,2),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index: string | number){
    this.quotes[index].showDets = !this.quotes[index].showDets;
  }
  constructor() { }

  ngOnInit(){
  }

}
