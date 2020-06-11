import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductFormComponent } from "../../components/forms/product-form/product-form.component";

import * as moment from "moment";

@Component({
  selector: "app-add-register",
  templateUrl: "./add-register.page.html",
  styleUrls: ["./add-register.page.scss"],
})
export class AddRegisterPage implements OnInit {
  @ViewChild(ProductFormComponent, { static: false })
  productForm: ProductFormComponent;

  productRegister;

  constructor() {}

  ngOnInit() {}

  onSubmit(evt) {
    const product = {
      ...evt,
      registerDate: moment(new Date()).format("YYYY-MM-DD"),
    };
    console.log("Product Registrado: ", product);
  }

  nextPresentation() {
    this.productForm.onSubmit();
  }
}
