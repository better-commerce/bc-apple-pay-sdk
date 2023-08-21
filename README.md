# BetterCommerce Apple Pay NodeJS SDK

BetterCommerce's Apple Pay NodeJS SDK enables BC client applications to integrate with Apple merchant API system. It publishes an interface to interact with [Apple Pay API](https://developer.apple.com/documentation/apple_pay_on_the_web/choosing_an_api_for_implementing_apple_pay_on_your_website).

Use below command for package installation:

```
npm install @better-commerce/bc-apple-pay-sdk
```

## Architecture Diagram

![Architecture Diagram](/assets/app-architecture.png)

## SDK Initialization

**Use following snippet to initialize the SDK:**

```
ApplePayEnvironment.init("<merchant_id>", "<domain_name>", "<display_name>", "<pem_cert>", "<key_cert>", [useSandbox: boolean]);
```

## Usage Example

### Validate ApplePay Session


#### Response

