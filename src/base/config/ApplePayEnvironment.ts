import { Endpoints } from "../../constants/Endpoints";

/**
 * Class {ApplePayEnvironment}
 */
export class ApplePayEnvironment {

    // Static variables
    /**
     * Field to store the public key.
     * @property {string}
     */
    static publicKey: string;

    /**
     * Field to store the secret key.
     * @property {string}
     */
    static secretKey: string;

    // Static variables
    /**
     * Field to store the apple pay merchant id.
     * @property {string}
     */
    static merchantId: string;

    /**
     * Field to store the domain name.
     * @property {string}
     */
    static domainName: string;

    /**
     * Field to store the display name.
     * @property {string}
     */
    static displayName: string;
    static pemCert: Buffer;
    static keyCert: Buffer;

    static environment: string;

    /**
     * Field to store the checkout api base url.
     * @property {string}
     */
    static baseUrl: string;

    static init(merchantId: string, domainName: string, displayName: string, pemCert: Buffer, keyCert: Buffer, useSandBox = true) {
        ApplePayEnvironment.merchantId = merchantId;
        ApplePayEnvironment.domainName = domainName;
        ApplePayEnvironment.displayName = displayName;
        ApplePayEnvironment.pemCert = pemCert;
        ApplePayEnvironment.keyCert = keyCert;

        if (useSandBox) {
            ApplePayEnvironment.baseUrl = Endpoints.Base.Api.SANDBOX_URL;
            ApplePayEnvironment.environment = "sandbox";
        } else {
            ApplePayEnvironment.baseUrl = Endpoints.Base.Api.PRODUCTION_URL;
            ApplePayEnvironment.environment = "production";
        }
        return this;
    }

    /**
     * Returns the merchant Id.
     * @return {string}
     */
    static getMerchantId(): string {
        return ApplePayEnvironment.merchantId;
    }

    /**
     * Returns the domain name.
     * @return {string}
     */
    static getDomainName(): string {
        return ApplePayEnvironment.domainName;
    }

    /**
     * Returns the display name.
     * @return {string}
     */
    static getDisplayName(): string {
        return ApplePayEnvironment.displayName;
    }

    static getPEMCert(): Buffer {
        return ApplePayEnvironment.pemCert;
    }

    static getKeyCert(): Buffer {
        return ApplePayEnvironment.keyCert;
    }

    static getEnvironment(): string {
        return ApplePayEnvironment.environment;
    }

    /**
     * Returns the base url.
     * @return {string}
     */
    static getBaseUrl(): string {
        return ApplePayEnvironment.baseUrl;
    }
}