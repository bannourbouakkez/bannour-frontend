import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { ClientRoutingModule } from './client-routing.module';
import { ReserverSessionComponent } from './reserver-session/reserver-session.component';
import { SessionsComponent } from './sessions/sessions.component';
import { MesSessionsComponent } from './mes-sessions/mes-sessions.component';


@NgModule({
  declarations: [ ReserverSessionComponent, SessionsComponent, MesSessionsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule

  ]
})
export class ClientModule { }
