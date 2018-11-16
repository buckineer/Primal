import {Component, Input, Host } from '@angular/core';
import { CheckboxGroupComponent } from './checkbox-group.component';
// <div (click)="toggleCheck()">
//     <input type="checkbox" [checked]="isChecked()" />
//     <ng-content></ng-content>
// </div>`
@Component({
    selector: 'checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css'],
    // template: `         
    //     <mat-checkbox (change)="changed($event)" [checked]="isChecked()" color="white" > </mat-checkbox>    
    //     <ng-content></ng-content>`
})
  
  
export class CheckboxComponent {
    @Input() value: any;

    constructor(@Host() private checkboxGroup: CheckboxGroupComponent) {
    }

    toggleCheck() {
        this.checkboxGroup.addOrRemove(this.value);
    }
    changed(event:any){
        if(event.checked){
            this.checkboxGroup.add(this.value);
        }else{
            this.checkboxGroup.remove(this.value);
        }
    }

    isChecked() {
        return this.checkboxGroup.contains(this.value);
    }
}
