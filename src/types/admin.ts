import { Order as IndexOrder } from "./index";

export type RoiCycle = {
  cycle: number;
  payout_date: string;
  amount: number;
  status: string;
};

export type Order = {
  id: number;
  order_id: string;
  created_at: string;
  partner_name: string;
  vendor_address: string;
  vendor_picture: string;
  vendor_name: string;
  products: string[]; // You may want to define a Product type if structure is known
  product: string[]; // You may want to define a Product type if structure is known
  total_amount: number;
  status: string;
  amount: number;
  total_roi: number;
  roi_rate: number;
  amount_invested?: number;
  roi_cycles: RoiCycle[];
};

export type StatusData = {
  model_type: string;
  order_id: string;
  status: string;
};

export type Partner = {
  id: number;
  name: string;
  email: string;
  username: string;
  total_purchase: number;
  total_orders: number;
  balance: number;
  portfolio_balance: number;
  partner_id: number;
  address: string;
  phone: string;
  profile_picture: string;
};

export type PartnerDetails = {
  partner: Partner;
  orders: Order[];
  summary: {
    total_invested: number;
    total_orders: number;
    balance: number;
  };
  transactions: Transaction[];
};

export type AdminReport = {
  total_partners: number;
  total_investment: number;
  partners: Partner[];
  all_orders: IndexOrder[];
  pending_withdrawals: number;
};

export type DataBaseType = {
  count: number;
  next: number | null;
  previous: number | null;
};

export type Vendor = {
  id: number;
  name: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  vendor_id: string;
  store_name: string;
  store_email: string;
  store_phone: string;
  store_address: string;
  username: string;
  password: string;
  profile_picture: string | null;
  created_at: string;
  total_remittance: number;
  today_remittance: number;
  recent_orders?: Order[];
  investments?: Order[];
  transactions?: RemittanceHistory[];
  remittances?: RemittanceHistory[];
  // Fields for saved vendor beneficiaries
  vendor_name?: string;
  vendor_email?: string;
  vendor_phone?: string;
};

export type Vendors = {
  total_vendors: number;
  total_remittance: number;
  today_remittance: number;
  today_purchase: number;
  total_purchase: number;
  vendors: Vendor[];
};

export type Transaction = {
  id: number;
  amount: string;
  available_balance_at_time: string;
  created_at: string;
  from_user: string;
  order_id: string;
  partner_name: string;
  payment_method: string;
  reference: string;
  status: string;
  to: string;
  transaction_type: string;
  user: number;
};

export type Transactions = DataBaseType & {
  results: Transaction[];
};

export type Orders = DataBaseType & {
  results: Order[];
};

export type WithdrawalData = {
  amount: number;
  balance: number;
  from_user: string;
  partner_name: string;
  profile_pic: null;
  requested_at: "2025-08-09T13:54:58.479478Z";
  to: string;
  withdraw_id: string;
};

export type RemittanceHistory = {
  remittance_id: string;
  vendor_name: string;
  amount: number;
  status: string;
  created_at: string;
};

export type Overview = {
  pending_withdrawals: number;
  total_balance: number;
  todays_remittance: number;
  recent_orders: Order[];
  withdrawal_request: WithdrawalData[];
  remittance_history: RemittanceHistory[];
};

export type VendorDetails = {
  total_remittance: number;
  today_remittance: number;
  vendor_details: Vendor;
  remittance_history: RemittanceHistory[];
};

export type Notification = {
  id: number;
  event_type: string;
  title: string;
  message: string;
  created_at: string;
  is_read: boolean;
  user: number;
  from_user: string;
  to_user: string;
  account_name: string;
  account_number: string;
  bank_name: string;
  payment_method: string;
  available_balance_at_time: string;
  type: string;
}

export type ApproveData = {
  action: string;
  note: string;
}