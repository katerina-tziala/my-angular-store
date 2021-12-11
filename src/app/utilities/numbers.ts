export function getNumberInBoundaries(
  value: number | undefined,
  min: number | undefined,
  max: number | undefined
): number | undefined {
  let validNumber = getValueCheckedOnMinBound(value, min);
  validNumber = getValueCheckedOnMaxBound(validNumber, max);
  return validNumber;
}

export function getValueCheckedOnMinBound(
  value: number | undefined,
  min: number | undefined
): number | undefined {
  if (!isValidNumber(min)) {
    return value;
  }
  return belowMin(value, min as number) ? min : value;
}

export function getValueCheckedOnMaxBound(
  value: number | undefined,
  max: number | undefined
): number | undefined {
  if (!isValidNumber(max)) {
    return value;
  }
  return aboveMax(value, max as number) ? max : value;
}

export function belowMin(value: number | undefined, min: number): boolean {
  return !isValidNumber(value) || (value as number) < min;
}
export function aboveMax(value: number | undefined, maxValue: number): boolean {
  return !isValidNumber(value) || (value as number) > maxValue;
}

export function isValidNumber(
  valueToCheck: number | undefined | null
): boolean {
  return (
    valueToCheck !== null && valueToCheck !== undefined && !isNaN(valueToCheck)
  );
}
