import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import * as moment from "moment";

@Component({
  selector: "app-reprocessing-form",
  templateUrl: "./reprocessing-form.component.html",
  styleUrls: ["./reprocessing-form.component.scss"],
})
export class ReprocessingFormComponent implements OnInit {
  form: FormGroup;

  @Output("onSubmit") submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      date: [
        {
          value: moment(new Date()).format("YYYY-MM-DD"),
          disabled: true,
        },
      ],
      productId: ["", Validators.required],
      lotId: ["", Validators.required],
      weight: ["", Validators.required],
      allergen: ["", Validators.required],
      area: ["", Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
