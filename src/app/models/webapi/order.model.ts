/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */
import { Validators, FormControl, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { minValueValidator, maxValueValidator, enumValidator } from './validators';
import { BaseModel } from './base-model';

import { status } from './enums';

export interface IOrder {
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: Date;
    status?: status;
    complete?: boolean;
}


export class Order extends BaseModel implements IOrder {
    id: number;
    petId: number;
    quantity: number;
    shipDate: Date;
    /** Order Status */
    status: status;
    complete: boolean;

    /**
     * constructor
     * @param values Can be used to set a webapi response to this newly constructed model
    */
    constructor(values?: any) {
        super();
        if (values) {
            this.setValues(values);
        }
    }

    /**
     * set the values.
     * @param values Can be used to set a webapi response to this newly constructed model
    */
    setValues(values: any): void {
        if (values) {
            this.id = values.id;
            this.petId = values.petId;
            this.quantity = values.quantity;
            this.shipDate = values.shipDate;
            this.status = values.status;
            this.complete = values.complete;
        }
    }

    protected getFormGroup(): FormGroup {
        if (!this._formGroup) {
            this._formGroup = new FormGroup({
                id: new FormControl(this.id),
                petId: new FormControl(this.petId),
                quantity: new FormControl(this.quantity),
                shipDate: new FormControl(this.shipDate),
                status: new FormControl(this.status, [enumValidator(status), ]),
                complete: new FormControl(this.complete),
            });
        }
        return this._formGroup;
    }

    setFormGroupValues() {
        if (this._formGroup) {
            this._formGroup.controls['id'].setValue(this.id);
            this._formGroup.controls['petId'].setValue(this.petId);
            this._formGroup.controls['quantity'].setValue(this.quantity);
            this._formGroup.controls['shipDate'].setValue(this.shipDate);
            this._formGroup.controls['status'].setValue(this.status);
            this._formGroup.controls['complete'].setValue(this.complete);
        }
    }
}

