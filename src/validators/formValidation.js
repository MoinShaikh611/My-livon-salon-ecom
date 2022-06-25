export const phoneValidation = (phone) => {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    return !(!phone || regex.test(phone) === false);
};
