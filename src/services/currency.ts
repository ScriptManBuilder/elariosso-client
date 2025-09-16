// Currency service for automatic EUR/USD conversion
export type Currency = 'EUR' | 'USD';

interface CurrencyRates {
  EUR: number;
  USD: number;
}

class CurrencyService {
  private rates: CurrencyRates = {
    EUR: 1.0, // Base currency
    USD: 1.08 // Updated rate: 1 EUR = 1.08 USD (approximate)
  };

  private currentCurrency: Currency = 'EUR';

  // Set current currency
  setCurrency(currency: Currency): void {
    this.currentCurrency = currency;
    localStorage.setItem('selectedCurrency', currency);
  }

  // Get current currency
  getCurrency(): Currency {
    return this.currentCurrency;
  }

  // Initialize currency from localStorage
  initCurrency(): void {
    const saved = localStorage.getItem('selectedCurrency') as Currency;
    if (saved && (saved === 'EUR' || saved === 'USD')) {
      this.currentCurrency = saved;
    }
  }

  // Convert price from EUR to target currency
  convertPrice(priceInEUR: number, targetCurrency?: Currency): number {
    const currency = targetCurrency || this.currentCurrency;
    const rate = this.rates[currency];
    const convertedPrice = parseFloat((priceInEUR * rate).toFixed(2));
    
    return convertedPrice;
  }

  // Format price with currency symbol
  formatPrice(priceInEUR: number, targetCurrency?: Currency): string {
    const currency = targetCurrency || this.currentCurrency;
    const convertedPrice = this.convertPrice(priceInEUR, currency);
    
    const symbols = {
      EUR: '€',
      USD: '$'
    };

    const formatted = `${convertedPrice.toFixed(2)}${symbols[currency]}`;
    
    return formatted;
  }

  // Get currency symbol
  getCurrencySymbol(currency?: Currency): string {
    const curr = currency || this.currentCurrency;
    return curr === 'EUR' ? '€' : '$';
  }

  // Update exchange rates (could be called from an API)
  updateRates(newRates: Partial<CurrencyRates>): void {
    this.rates = { ...this.rates, ...newRates };
  }

  // Get all available currencies
  getAvailableCurrencies(): Currency[] {
    return ['EUR', 'USD'];
  }

  // Get current exchange rate
  getExchangeRate(fromCurrency: Currency = 'EUR', toCurrency?: Currency): number {
    const to = toCurrency || this.currentCurrency;
    return this.rates[to] / this.rates[fromCurrency];
  }
}

// Create singleton instance
export const currencyService = new CurrencyService();

// Initialize on import
currencyService.initCurrency();

// Export for use in components
export default currencyService;