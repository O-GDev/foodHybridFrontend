import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Register from "./pages/Auth/Register";
import AuthLanding from "./pages/Auth/AuthLanding";
import SiteLayout from "./layouts/SiteLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Portfolio from "./pages/PartnerDashboard/Portfolio";
import Shop from "./pages/PartnerDashboard/Shop";
import PortfolioDetail from "./pages/PartnerDashboard/PortfolioDetail";
import MyOrders from "./pages/PartnerDashboard/MyOrders";
import OrderDetails from "./pages/PartnerDashboard/Order/OrderDetails";
import OrderTransactionFlow from "./pages/PartnerDashboard/Order/OrderTransactionFlow";
import Wallet from "./pages/PartnerDashboard/Wallet";
import ShopItemDetails from "./pages/PartnerDashboard/ShopItemDetails";
import Profile from "./pages/PartnerDashboard/Profile/Profile";
import WithdrawalPin from "./pages/PartnerDashboard/Profile/WithdrawalPin/WithdrawalPin";
import CheckPin from "./pages/PartnerDashboard/Profile/WithdrawalPin/CheckPin";
import ChangePin from "./pages/PartnerDashboard/Profile/WithdrawalPin/ChangePin";
import Beneficiary from "./pages/PartnerDashboard/Profile/Beneficiary/Beneficiary";
import NewBeneficiary from "./pages/PartnerDashboard/Profile/Beneficiary/NewBeneficiary";
import ResetPassword from "./pages/PartnerDashboard/Profile/ResetPassword";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RewardLoyaltyProgram from "./pages/RewardLoyaltyProgram";
import Cart from "./pages/PartnerDashboard/Cart/Cart";
import DeliveryInformation from "./pages/PartnerDashboard/Cart/DeliveryInfo";
import Checkout from "./components/PartnerDashboard/Cart/Checkout";
import FAQ from "./pages/FAQ";
import MyRewards from "./pages/PartnerDashboard/MyRewards";
import AdminLayout from "./layouts/AdminLayout";
import Overview from "./pages/Admin/Overview";
import Orders from "./pages/Admin/Orders/Orders";
import AdminOrderDetails from "./pages/Admin/Orders/OrderDetails";
import Partners from "./pages/Admin/Partners/Partners";
import WithdrawalRequest from "./pages/Admin/Partners/WithdrawalRequest";
import PartnerDetails from "./pages/Admin/Partners/Partner/PartnerDetails";
import PartnerOrders from "./pages/Admin/Partners/Partner/Orders";
import PartnerTransactions from "./pages/Admin/Partners/Partner/Transactions";
import Vendors from "./pages/Admin/Vendors/Vendors";
import VendorDetails from "./pages/Admin/Vendors/Vendor/VendorDetails";
import VendorOrders from "./pages/Admin/Vendors/Vendor/Orders";
import VendorTransactions from "./pages/Admin/Vendors/Vendor/Transactions";
import Transactions from "./pages/Admin/Transactions";
import AdminProfile from "./pages/Admin/AdminProfile/AdminProfile";
import ManageProducts from "./pages/Admin/AdminProfile/ManageProducts";
import ProductInfo from "./pages/Admin/AdminProfile/ProductInfo";
import VendorsList from "./pages/Admin/AdminProfile/VendorsList";
import AdminWithdrawalPin from "./pages/Admin/AdminProfile/WithdrawalPin/WithdrawalPin";
import AdminCheckPin from "./pages/Admin/AdminProfile/WithdrawalPin/CheckPin";
import AdminChangePin from "./pages/Admin/AdminProfile/WithdrawalPin/ChangePin";
import Notifications from "./pages/Admin/Notifications";
import DeliveryLayout from "./layouts/ShopLayout";
import AdminLogin from "./pages/Admin/Login";
import AdminOrderTransactionFlow from "./pages/Admin/Orders/OrderTransactionFlow";
import Remittance from "./pages/RetailShops/Remittance";
import ShopDashboard from "./pages/RetailShops/ShopDashboard";
import VendorLogin from "./pages/RetailShops/Login";
import VendorRegister from "./pages/RetailShops/Register";
import RetailShopOrders from "./pages/RetailShops/Orders";
import RetailShopTransactions from "./pages/RetailShops/Transactions";
import ProtectedRoute from "./layouts/ProtectedRoute";
import DriversDeliveryForm from "./pages/Drivers/DeliveryForm";
import SavedVendors from "./pages/PartnerDashboard/Profile/SavedVendors";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/reward-loyalty-program"
            element={<RewardLoyaltyProgram />}
          />
          <Route path="/faq" element={<FAQ />} />
        </Route>

        <Route path="/" element={<LandingPage />} />

        <Route path="/partner" element={<AuthLayout />}>
          <Route index element={<AuthLanding />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route path="/retail-shop" element={<DeliveryLayout />}>
          <Route path="login" element={<VendorLogin />} />
          <Route path="register" element={<VendorRegister />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/retail-shop" element={<DeliveryLayout />}>
            <Route index element={<ShopDashboard />} />
            <Route path="orders" element={<RetailShopOrders />} />
            <Route path="transactions" element={<RetailShopTransactions />} />
            <Route path="remittance" element={<Remittance />} />
          </Route>
        </Route>

        {/* Drivers Routes - No Authentication Required */}
        <Route path="/drivers">
          <Route path="delivery-form" element={<DriversDeliveryForm />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<AdminOrderDetails />} />
          <Route
            path="orders/:id/transactions"
            element={<AdminOrderTransactionFlow />}
          />
          <Route path="partners">
            <Route index element={<Partners />} />
            <Route path="withdrawal-requests" element={<WithdrawalRequest />} />
            <Route path=":id" element={<PartnerDetails />} />
            <Route path=":id/orders" element={<PartnerOrders />} />
            <Route path=":id/transactions" element={<PartnerTransactions />} />
          </Route>
          <Route path="vendors">
            <Route index element={<Vendors />} />
            <Route path="withdrawal-requests" element={<WithdrawalRequest />} />
            <Route path=":id" element={<VendorDetails />} />
            <Route path=":id/orders" element={<VendorOrders />} />
            <Route path=":id/transactions" element={<VendorTransactions />} />
          </Route>
          <Route path="notifications" element={<Notifications />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="profile">
            <Route index element={<AdminProfile />} />
            <Route path="manage-products" element={<ManageProducts />} />
            <Route path="manage-products/:id" element={<ProductInfo />} />
            <Route path="vendors-list" element={<VendorsList />} />
            <Route path="withdrawal-pin">
              <Route index element={<AdminWithdrawalPin />} />
              <Route path="check-pin" element={<AdminCheckPin />} />
              <Route path="change-pin" element={<AdminChangePin />} />
            </Route>
          </Route>
        </Route>

        <Route path="/partner" element={<DashboardLayout />}>
          <Route path="portfolio">
            <Route index element={<Portfolio />} />
            <Route path="portfolio" element={<PortfolioDetail />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>

          <Route path="shop">
            <Route index element={<Shop />} />
            <Route path=":itemId" element={<ShopItemDetails />} />
          </Route>

          <Route path="my-orders">
            <Route index element={<MyOrders />} />
            <Route path=":id" element={<OrderDetails />} />
            <Route path=":id/transactions" element={<OrderTransactionFlow />} />
          </Route>

          <Route path="my-rewards" element={<MyRewards />} />

          <Route path="cart">
            <Route index element={<Cart />} />
            <Route
              path="delivery-information"
              element={<DeliveryInformation />}
            />
            <Route path="checkout" element={<Checkout />} />
          </Route>

          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="withdrawal-pin">
              <Route index element={<WithdrawalPin />} />
              <Route path="check-pin" element={<CheckPin />} />
              <Route path="change-pin" element={<ChangePin />} />
            </Route>
            <Route path="beneficiary">
              <Route index element={<Beneficiary />} />
              <Route path="new" element={<NewBeneficiary />} />
            </Route>
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>

          <Route path="profile/saved-vendors" element={<SavedVendors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
