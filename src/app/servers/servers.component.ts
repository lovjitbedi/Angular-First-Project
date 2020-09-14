import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

    allowNewServer = false;
    createServer = "No Server was created!";
    serverName = "Test Name";

    constructor(){
       setTimeout(()=>{
           this.allowNewServer = true;
       }, 2000)
    }

    ngOnInit(){

    }

    onCreateServer(){
        this.createServer = "Server was created!";
    }

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    
}