import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
  path: 'native-img-catalog',
  loadChildren: () =>
    import('./native-img-catalog/native-img-catalog.module').then(
      (m) => m.NativeImgCatalogModule
    )
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
