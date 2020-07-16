import { LoginEffects } from "src/app/features/landing/store/login/login.effects";
import { PackagingEffects } from "src/app/features/packaged/store/packaging/packaging.effects";
import { ProductsEffects } from "src/app/features/packaged/store/products/products.effects";

export const effects = [LoginEffects, PackagingEffects, ProductsEffects];
