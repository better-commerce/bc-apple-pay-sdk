// Package Imports
import https from 'https'

// Other Imports
import axios from '../base/api';
import { IPayment } from "../base/contracts/IPayment";
import { ApplePayEnvironment } from '../base/config/ApplePayEnvironment';

export class Payment implements IPayment {

    /**
     * Validates the payment session.
     * 
     * API Reference - https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/providing_merchant_validation
     * 
     * @param data 
     * @returns 
     */
    async validateSession(data: any): Promise<any> {
        const { validationUrl } = data
        try {
            const httpsAgent = new https.Agent({
                rejectUnauthorized: false,
                cert: ApplePayEnvironment.getPEMCert(),
                key: ApplePayEnvironment.getKeyCert(),
            })

            const { data: validateSessionResult } = await axios.post(validationUrl, {
                merchantIdentifier: ApplePayEnvironment.getMerchantId(),
                domainName: ApplePayEnvironment.getDomainName(),
                displayName: ApplePayEnvironment.getDisplayName(),
            }, {
                httpsAgent
            })

            return validateSessionResult
        } catch (error) {
            return { hasError: true, error: error };
        }
    }
}