import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

    allowNewServer = false;
    createServer = "No Server was created!";
    serverName = "";
    isServerCreated = false;
    servers = [];

    constructor(){
       setTimeout(()=>{
           this.allowNewServer = true;
       }, 2000)
    }

    ngOnInit(){

    }

    onCreateServer(){
        this.isServerCreated = true;
        this.servers.push(this.serverName)
        this.createServer = "Server was created! Name is : " + this.serverName;
    }

    // onUpdateServerName(event: Event){
    //     this.serverName = "Server created with name : " + (<HTMLInputElement>event.target).value;
    // }
    
}