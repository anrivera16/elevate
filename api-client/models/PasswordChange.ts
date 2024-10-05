/* tslint:disable */
/* eslint-disable */
/**
 * Josh Dowdy
 * Elevate Hormone Therapy
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PasswordChange
 */
export interface PasswordChange {
    /**
     * 
     * @type {string}
     * @memberof PasswordChange
     */
    newPassword1: string;
    /**
     * 
     * @type {string}
     * @memberof PasswordChange
     */
    newPassword2: string;
}

/**
 * Check if a given object implements the PasswordChange interface.
 */
export function instanceOfPasswordChange(value: object): boolean {
    if (!('newPassword1' in value)) return false;
    if (!('newPassword2' in value)) return false;
    return true;
}

export function PasswordChangeFromJSON(json: any): PasswordChange {
    return PasswordChangeFromJSONTyped(json, false);
}

export function PasswordChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasswordChange {
    if (json == null) {
        return json;
    }
    return {
        
        'newPassword1': json['new_password1'],
        'newPassword2': json['new_password2'],
    };
}

export function PasswordChangeToJSON(value?: PasswordChange | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'new_password1': value['newPassword1'],
        'new_password2': value['newPassword2'],
    };
}

