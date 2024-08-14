import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { PasswordRulesComponent } from './password-rules/password-rules.component';
import { SuccessAnimationComponent } from './success-animation/success-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    PasswordRulesComponent,
    SuccessAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
