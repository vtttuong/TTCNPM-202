export const formatMoney = (price) => {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};