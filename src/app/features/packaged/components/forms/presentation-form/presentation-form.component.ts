import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-presentation-form",
  templateUrl: "./presentation-form.component.html",
  styleUrls: ["./presentation-form.component.scss"],
})
export class PresentationFormComponent implements OnInit {
  form: FormGroup;

  @Output("onSubmit") submit = new EventEmitter();

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      presentationId: ["", Validators.required],
      pieces: ["", Validators.required],
      packs: ["", Validators.required],
      weight: ["", Validators.required],
      observations: [""],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
