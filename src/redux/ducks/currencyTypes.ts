type Currency = {
  ccy: string;
  baseCcy: string;
  buy: string;
  sale: string;
};

export interface StateTypes {
  currency: Currency[];
  isLoadingCurrency: boolean;
  error: string | null;
}
