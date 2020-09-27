import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-assignment3',
    templateUrl: './assignment3.component.html',
    styles: [`
    .online1{
        color: white;
    }
    `]
})
export class Assignment3Component implements OnInit{

    isHidden = false;
    logClicks = [];
    currentCount = 0;

    ngOnInit(){

    }

    onDisplayDetails(){
        this.isHidden = !this.isHidden;
        this.currentCount = this.currentCount + 1;
        this.logClicks.push(this.currentCount);
    }

    getColor(){
        if(this.currentCount >= 5){
            return "blue";
        }
        return "white";
    }
    
}