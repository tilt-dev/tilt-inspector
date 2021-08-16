/**
 * tilt
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.22.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* Information about how the Tilt binary handles updates.
*/
export class V1alpha1VersionSettings {
    /**
    * Whether version updates have been enabled/disabled from the Tiltfile.
    */
    'checkUpdates'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkUpdates",
            "baseName": "checkUpdates",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1VersionSettings.attributeTypeMap;
    }
}

