import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { YscComponent } from './ysc/ysc.component';
import { KnightComponent } from './knight/knight.component';
import { PawnComponent } from './pawn/pawn.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BoardMemberComponent } from './board-member/board-member.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YscComponent,
    KnightComponent,
    PawnComponent,
    TestimonialComponent,
    BoardMemberComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
