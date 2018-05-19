import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactListComponent} from './contacts/contact-list/contact-list.component';
import {ContactFilterComponent} from './contacts/contact-filter/contact-filter.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TasksComponent} from './tasks/tasks.component';
import {CompaniesComponent} from './companies/companies.component';
import {SalesComponent} from './sales/sales.component';
import {ContactSubheaderComponent} from './contacts/contact-subheader/contact-subheader.component';
import {ContactDetailComponent} from './contacts/contact-detail/contact-detail.component';
import {ContactListItemComponent} from './contacts/contact-list/contact-list-item/contact-list-item.component';
import {Configuration} from './app.configuration';
import {HttpClientModule} from '@angular/common/http';
import {AppRouterModule} from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TasksComponent,
    CompaniesComponent,
    SalesComponent,
    ContactsComponent,
    ContactListComponent,
    ContactFilterComponent,
    ContactSubheaderComponent,
    ContactDetailComponent,
    ContactListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [Configuration],
  bootstrap: [AppComponent]
})
export class AppModule {
}
