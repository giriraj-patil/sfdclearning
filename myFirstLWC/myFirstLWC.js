import { LightningElement, api, track } from 'lwc';

export default class MyFirstLWC extends LightningElement {
    @api name = 'Giriraj Patil';
    @track title = 'Salesforce Developer';
    phone = '7411391678';
}