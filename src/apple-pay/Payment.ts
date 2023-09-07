// Package Imports
import https from 'https'

// Other Imports
import axios from '../base/api';
import { IPayment } from "../base/contracts/IPayment";
import { ApplePayEnvironment } from '../base/config/ApplePayEnvironment';
import { RequestMethod } from '../constants/enums/RequestMethod';

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
                //rejectUnauthorized: false,
                cert: ApplePayEnvironment.getPEMCert(),
                key: ApplePayEnvironment.getKeyCert(),
            })
            const config = {
                url: validationUrl,
                method: RequestMethod.POST,
                data: {
                    merchantIdentifier: ApplePayEnvironment.getMerchantId(),
                    displayName: ApplePayEnvironment.getDisplayName(),
                    initiative: "web",
                    initiativeContext: ApplePayEnvironment.getDomainName(),
                },
                httpsAgent: httpsAgent,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            const { data: validateSessionResult } = await axios(config)
            return validateSessionResult
        } catch (error) {
            return { hasError: true, error: error };
        }
    }
}