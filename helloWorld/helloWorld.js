import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'Patil';

    changeHandler(event){
        this.greeting = event.target.value;
    }
}