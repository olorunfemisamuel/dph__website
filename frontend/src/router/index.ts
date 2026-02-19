import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/services/authservice'

// existing imports...
import InvestNow from '@/views/InvestNow.vue'
import HomePage from '@/views/HomePage.vue'
import AboutUs from '@/views/AboutUs.vue'
import LeadershipPage from '@/views/LeadershipPage.vue'
import AssetManangementPage from '@/views/AssetManangementPage.vue'
import InvestmentBankingPage from '@/views/InvestmentBankingPage.vue'
import PrivateEquityPage from '@/views/PrivateEquityPage.vue'
import SecuritiesPage from '@/views/SecuritiesPage.vue'
import TrusteesPage from '@/views/TrusteesPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import CareerPage from '@/views/CareerPage.vue'
import InvestmentDashboardPage from '@/views/InvestmentDashboardPage.vue'
import ExchangeTradedFunds from '@/views/ExchangeTradedFunds.vue'
import MutualFunds from '@/views/MutualFunds.vue'
import AlternativeInvestment from '@/views/AlternativeInvestment.vue'
import SubsidiariesPage from '@/views/SubsidiariesPage.vue'
import Insightpage from '@/views/Insightpage.vue'
import InsightsExtendPage from '@/views/InsightsExtendPage.vue'
import MDMessagePage from '@/views/MDMessagePage.vue'
import GalleryPage from '@/views/GalleryPage.vue'
import MergerAcquisition from '@/views/MergerAcquisition.vue'
import CorporateFinance from '../views/CorporateFinance.vue'
import StructuredFinance from '../views/StructuredFinance.vue'
import ProjectFinance from '@/views/ProjectFinance.vue'
import FinancialAdvisory from '@/views/FinancialAdvisory.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'

// new imports
import LoginView from '@/views/loginview.vue'
import RegisterView from '@/views/registerview.vue'
import DashboardView from '@/views/dashboardview.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/invest-now', name: 'InvestNow', component: InvestNow },
    { path: '/about', name: 'AboutUs', component: AboutUs },
    { path: '/Leadership', name: 'LeadershipPage', component: LeadershipPage },
    { path: '/Asset-Management', name: 'AssetManagementPage', component: AssetManangementPage },
    { path: '/Investment-Banking', name: 'InvestmentBankingPage', component: InvestmentBankingPage },
    { path: '/Private-Equity', name: 'PrivateEquityPage', component: PrivateEquityPage },
    { path: '/Securities-Trading', name: 'SecuritiesPage', component: SecuritiesPage },
    { path: '/Trustees', name: 'TrusteesPage', component: TrusteesPage },
    { path: '/contact', name: 'ContactPage', component: ContactPage },
    { path: '/career', name: 'CareerPage', component: CareerPage },
    { path: '/news-insights', name: 'InsightsExtendPage', component: InsightsExtendPage },
    { path: '/Insight', name: 'InsightPage', component: Insightpage },
    { path: '/MDmessage', name: 'MDmessage', component: MDMessagePage },
    { path: '/gallery', name: 'gallery', component: GalleryPage },
    { path: '/investmentdashboard', name: 'investmentdashboard', component: InvestmentDashboardPage, meta: { requiresAuth: true } },
    { path: '/Exchange-Traded-Funds', name: 'ExchangeTradedFunds', component: ExchangeTradedFunds },
    { path: '/mutual-funds', name: 'mutualFunds', component: MutualFunds },
    { path: '/alternative-investment', name: 'alternativeInvestment', component: AlternativeInvestment },
    { path: '/subsidiaries', name: 'subsidiaries', component: SubsidiariesPage },
    { path: '/merger-acquisition', name: 'mergerAcquisition', component: MergerAcquisition },
    { path: '/corporate-finance', name: 'corporateFinance', component: CorporateFinance },
    { path: '/structured-finance', name: 'structuredFinance', component: StructuredFinance },
    { path: '/project-finance', name: 'projectFinance', component: ProjectFinance },
    { path: '/financial-advisory', name: 'financialAdvisory', component: FinancialAdvisory },
    {path: '/admin', name: 'Admin',component: AdminDashboard,meta: { requiresAuth: true }},

    // Auth routes
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/register', name: 'Register', component: RegisterView },
    { path: '/dashboard', name: 'Dashboard', component: DashboardView, meta: { requiresAuth: true } },
  ],

  scrollBehavior() {
    return { top: 0 }
  }
})

// Route guard for protected pages
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router