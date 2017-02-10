import {Component} from "@angular/core";

import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
    selector : 'fill-cart',
    templateUrl : './fill-cart.component.html'  
})

export class FillCartComponent{
    settings = {
                    columns: {
                        item_id: {
                            title: 'Item ID'
                        },
                        item_name: {
                            title: 'Item Name'
                        },
                        item_price: {
                            title: 'Price'
                        },
                        item_qty: {
                            title: 'Quantity'
                        }
                    },
                    delete : {
                        deleteButtonContent:"<span class='red-text'>Delete</span>"
                    },
                    hideSubHeader: true
                };
    
    data = [
                {
                    item_id: 1,
                    item_name: "Soap",
                    item_price: "50.00",
                    item_qty: 2
                },
                {
                    item_id: 1,
                    item_name: "Tooth brush",
                    item_price: "70.00",
                    item_qty: 3
                },
                {
                    item_id: 1,
                    item_name: "Suger",
                    item_price: "90.00",
                    item_qty: 1
                }
            ];

}