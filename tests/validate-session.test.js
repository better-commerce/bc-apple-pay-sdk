const { ApplePayEnvironment, Payment } = require("../dist");

ApplePayEnvironment.init("merchant.com.commerce.ffx", "ffx.bettercommerce.tech", "FFX", "", "", false)

const data = {
    validationUrl: "",
}
new Payment().validateSession(data)