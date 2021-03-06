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
* ExtensionStatus defines the observed state of Extension
*/
export class V1alpha1ExtensionStatus {
    /**
    * Contains information about any problems loading the extension.
    */
    'error'?: string;
    /**
    * The path to the extension on disk. This location should be shared and readable by all Tilt instances.
    */
    'path'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ExtensionStatus.attributeTypeMap;
    }
}

