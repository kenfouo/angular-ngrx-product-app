import { Injectable } from "@angular/core";
import { never, Subject } from "rxjs";
import { ActionEvent } from "./product.state";

@Injectable({providedIn:'root'})
export class EventDriverService {
    readonly sourceEventSubject:Subject<ActionEvent> = new Subject<ActionEvent>(); //---Declarer un subject
    readonly sourceEventSubjectObservable = this.sourceEventSubject.asObservable(); //---tous les composants de l'application qui veullent ecouter les evenements publiés par le ubject feron un subscribe avec sourceEventSubjectObservablex...
    
    publishEvent(event:ActionEvent){
        this.sourceEventSubject.next(event); //---publier un evenement de type actionEvent
    } 
}