export function maskCurrency(value: number): string {
  const formattedValue = formatValue(value.toFixed(2));
  return formattedValue;
}

function formatValue(value: string): string {
  let formattedValue = '';

  const parts = value.split('.');
  const decimalPart = parts[1];
  const integerPart = parts[0];

  formattedValue += integerPart.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
  formattedValue += ',' + decimalPart;

  return formattedValue;
}
