/**
 * Enum {OrderIntent} represents the intent of the order.
 * @ordinal {string} CAPTURE - The merchant intends to capture payment immediately after the customer makes a payment.
 * @ordinal {string} AUTHORIZE - The merchant intends to authorize a payment and place funds on hold after the customer makes a payment.
 * Authorised payments are best captured within three days of authorization but are available to capture for up to 29 days.
 * After the three-day honor period, the original authorized payment expires and you must re-authorize the payment.
 * You must capture authorized payments within 29 days of authorization.
 */
export enum OrderIntent {

    // The merchant intends to capture payment immediately after the customer makes a payment.
    CAPTURE = "CAPTURE",

    // The merchant intends to authorize a payment and place funds on hold after the customer makes a payment. Authorized payments are best captured within three days of authorization but are available to capture for up to 29 days. After the three-day honor period, the original authorized payment expires and you must re-authorize the payment. You must make a separate request to capture payments on demand. This intent is not supported when you have more than one purchase_unit within your order.
    AUTHORIZE = "AUTHORIZE",
}