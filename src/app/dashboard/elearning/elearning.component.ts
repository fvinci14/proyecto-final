import { Component } from '@angular/core';
import { TotalSalesComponent } from './total-sales/total-sales.component';
import { TotalRevenueComponent } from './total-revenue/total-revenue.component';
import { TotalStudentsComponent } from './total-students/total-students.component';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { TotalAttendanceComponent } from './total-attendance/total-attendance.component';
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

@Component({
    selector: 'app-elearning',
    standalone: true,
    imports: [TotalSalesComponent, TotalRevenueComponent, TotalAttendanceComponent, TotalStudentsComponent, SalesOverviewComponent, TopSellingProductsComponent, TransactionsHistoryComponent, RecentOrdersComponent, TopSellersComponent, OrderSummaryComponent, RevenueComponent, TopSalesLocationsComponent, AverageDailySalesComponent, ProfitComponent, BestSellerOfTheMonthComponent, NewCustomersThisMonthComponent, RouterLink],
    templateUrl: './elearning.component.html',
    styleUrl: './elearning.component.scss'
})
export class EcommerceComponent {}