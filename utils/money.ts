export const roundMoney = (value: number, decimals = 2): number => {
    const factor = Math.pow(10, decimals);
    return Math.round(Number(value) * factor) / factor;
};

export const roundQuantity = (value: number, decimals = 3): number => {
    const factor = Math.pow(10, decimals);
    return Math.round(Number(value) * factor) / factor;
};

export const sumMoney = (values: number[]): number => {
    return values.reduce((acc, value) => roundMoney(acc + Number(value)), 0);
};

export const isFullyPaid = (total: number, paid: number): boolean => {
    return roundMoney(paid) >= roundMoney(total);
};

export const moneyDecimal = (value: string | number, decimals = 2): string => {
    return roundMoney(Number(value), decimals).toFixed(decimals);
};

export const formatQuantityWithUnit = (quantity: number, unitTypeId: string): string => {
    return `${roundQuantity(Number(quantity))} ${unitTypeId}`;
};
