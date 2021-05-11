/**
 * tilt
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* CmdStateWaiting is a waiting state of a local command.
*/
export class V1alpha1CmdStateWaiting {
    /**
    * (brief) reason the process is not yet running.
    */
    'reason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1CmdStateWaiting.attributeTypeMap;
    }
}

