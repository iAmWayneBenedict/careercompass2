export interface ParsedMetric {
  numericValue: number;
  suffix: string;
  prefix: string;
  originalValue: string;
}

/**
 * Parses different metric formats and extracts numeric values for counting
 * Supports: numbers, percentages, time units, currency, etc.
 */
export function parseMetric(value: string): ParsedMetric {
  const trimmedValue = value.trim();
  
  // Handle percentage (e.g., "17%")
  if (trimmedValue.includes('%')) {
    const numericPart = parseFloat(trimmedValue.replace('%', ''));
    return {
      numericValue: isNaN(numericPart) ? 0 : numericPart,
      suffix: '%',
      prefix: '',
      originalValue: trimmedValue
    };
  }
  
  // Handle time units (e.g., "5.2 days", "3 hours", "2.5 weeks")
  const timeUnitsRegex = /^([\d.]+)\s+(day|days|hour|hours|week|weeks|month|months|year|years|min|mins|minute|minutes|sec|secs|second|seconds)$/i;
  const timeMatch = trimmedValue.match(timeUnitsRegex);
  if (timeMatch) {
    const numericPart = parseFloat(timeMatch[1]);
    const unit = timeMatch[2];
    return {
      numericValue: isNaN(numericPart) ? 0 : numericPart,
      suffix: ` ${unit}`,
      prefix: '',
      originalValue: trimmedValue
    };
  }
  
  // Handle currency (e.g., "$1,234", "€500", "£99.99")
  const currencyRegex = /^([$€£¥₹₽¢])?([\d,]+\.?\d*)([kmb])?$/i;
  const currencyMatch = trimmedValue.match(currencyRegex);
  if (currencyMatch) {
    const prefix = currencyMatch[1] || '';
    const numericPart = parseFloat(currencyMatch[2].replace(/,/g, ''));
    const multiplier = currencyMatch[3];
    
    let finalValue = numericPart;
    let suffix = '';
    
    if (multiplier) {
      switch (multiplier.toLowerCase()) {
        case 'k':
          finalValue = numericPart;
          suffix = 'k';
          break;
        case 'm':
          finalValue = numericPart;
          suffix = 'm';
          break;
        case 'b':
          finalValue = numericPart;
          suffix = 'b';
          break;
      }
    }
    
    return {
      numericValue: isNaN(finalValue) ? 0 : finalValue,
      suffix,
      prefix,
      originalValue: trimmedValue
    };
  }
  
  // Handle plain numbers with commas (e.g., "1,234", "47")
  const plainNumberRegex = /^([\d,]+\.?\d*)$/;
  const plainMatch = trimmedValue.match(plainNumberRegex);
  if (plainMatch) {
    const numericPart = parseFloat(plainMatch[1].replace(/,/g, ''));
    return {
      numericValue: isNaN(numericPart) ? 0 : numericPart,
      suffix: '',
      prefix: '',
      originalValue: trimmedValue
    };
  }
  
  // Handle numbers with units (e.g., "25kg", "100m", "50°C")
  const unitRegex = /^([\d.]+)([a-zA-Z°]+)$/;
  const unitMatch = trimmedValue.match(unitRegex);
  if (unitMatch) {
    const numericPart = parseFloat(unitMatch[1]);
    const unit = unitMatch[2];
    return {
      numericValue: isNaN(numericPart) ? 0 : numericPart,
      suffix: unit,
      prefix: '',
      originalValue: trimmedValue
    };
  }
  
  // Fallback: try to extract any number from the string
  const fallbackRegex = /([\d.]+)/;
  const fallbackMatch = trimmedValue.match(fallbackRegex);
  if (fallbackMatch) {
    const numericPart = parseFloat(fallbackMatch[1]);
    return {
      numericValue: isNaN(numericPart) ? 0 : numericPart,
      suffix: '',
      prefix: '',
      originalValue: trimmedValue
    };
  }
  
  // If no number found, return 0
  return {
    numericValue: 0,
    suffix: '',
    prefix: '',
    originalValue: trimmedValue
  };
}

/**
 * Formats a number back to its original metric format during counting
 */
export function formatMetricValue(currentValue: number, parsedMetric: ParsedMetric): string {
  const { suffix, prefix } = parsedMetric;
  
  // Handle decimal places based on original value
  const hasDecimals = parsedMetric.originalValue.includes('.');
  const decimalPlaces = hasDecimals ? 
    (parsedMetric.originalValue.split('.')[1]?.replace(/[^\d]/g, '').length || 1) : 0;
  
  const formattedNumber = decimalPlaces > 0 ? 
    currentValue.toFixed(decimalPlaces) : 
    Math.round(currentValue).toString();
  
  return `${prefix}${formattedNumber}${suffix}`;
}