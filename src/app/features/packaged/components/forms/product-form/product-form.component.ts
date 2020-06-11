import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import * as moment from "moment";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;

  @Output("onSubmit") submit = new EventEmitter();

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      registerDate: [
        {
          value: moment(new Date()).format("YYYY-MM-DD"),
          disabled: true,
        },
      ],
      productId: ["", Validators.required],
      lotId: ["", Validators.required],
      expiration: ["", Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
