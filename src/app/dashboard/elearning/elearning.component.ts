import { Component } from '@angular/core';
import { TotalSalesComponent } from './total-sales/total-sales.component';
import { SupervisedCoursesComponent } from '../lms/supervised-courses/supervised-courses.component';
import { TotalStudentsComponent } from '../lms/total-students/total-students.component';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { TotalAttendanceComponent } from '../lms/total-attendance/total-attendance.component';
import { TopSellingProductsComponent } from './top-selling-products/top-selling-products.component';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { TopSellersComponent } from './top-sellers/top-sellers.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RevenueComponent } from './revenue/revenue.component';
import { TopSalesLocationsComponent } from './top-sales-locations/top-sales-locations.component';
import { AverageDailySalesComponent } from './average-daily-sales/average-daily-sales.component';
import { ProfitComponent } from './profit/profit.component';
import { BestSellerOfTheMonthComponent } from './best-seller-of-the-month/best-seller-of-the-month.component';
import { NewCustomersThisMonthComponent } from './new-customers-this-month/new-customers-this-month.component';
import { RouterLink } from '@angular/router';
import { ProjectsOverviewComponent } from "../project-management/projects-overview/projects-overview.component";
import { TicketsOpenComponent } from "../help-desk/tickets-open/tickets-open.component";
import { TicketsInProgressComponent } from "../help-desk/tickets-in-progress/tickets-in-progress.component";
import { TicketsResolvedComponent } from "../help-desk/tickets-resolved/tickets-resolved.component";
import { TicketsClosedComponent } from "../help-desk/tickets-closed/tickets-closed.component";
import { AccreditedStudentsComponent } from "../lms/accredited-students/accredited-students.component";
import { CardsComponent } from '../../ui-elements/cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { Cta1Component } from "./cta1/cta1.component";
import { WelcomeComponent } from "../lms/welcome/welcome.component";
import { ActiveCoursesComponent } from "../lms/active-courses/active-courses.component";
import { EnrolledStudentsComponent } from "../lms/enrolled-students/enrolled-students.component";
import { CompletionStatusComponent } from "../lms/completion-status/completion-status.component";

@Component({
    selector: 'app-elearning',
    standalone: true,
    templateUrl: './elearning.component.html',
    styleUrl: './elearning.component.scss',
    imports: [MatCardModule, CardsComponent, TotalSalesComponent, SupervisedCoursesComponent, TotalAttendanceComponent, TotalStudentsComponent, SalesOverviewComponent, TopSellingProductsComponent, TransactionsHistoryComponent, RecentOrdersComponent, TopSellersComponent, OrderSummaryComponent, RevenueComponent, TopSalesLocationsComponent, AverageDailySalesComponent, ProfitComponent, BestSellerOfTheMonthComponent, NewCustomersThisMonthComponent, RouterLink, ProjectsOverviewComponent, TicketsOpenComponent, TicketsInProgressComponent, TicketsResolvedComponent, TicketsClosedComponent, AccreditedStudentsComponent, Cta1Component, WelcomeComponent, ActiveCoursesComponent, EnrolledStudentsComponent, CompletionStatusComponent]
})
export class EcommerceComponent {}