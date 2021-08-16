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
* Configures Tilt to enable non-default features (e.g., experimental or deprecated).  The Tilt features controlled by this are generally in an unfinished state, and not yet documented.  As a Tilt user, you don’t need to worry about this unless something else directs you to (e.g., an experimental feature doc, or a conversation with a Tilt contributor).
*/
export class V1alpha1UIFeatureFlag {
    /**
    * The name of the flag.
    */
    'name'?: string;
    /**
    * The value of the flag.
    */
    'value'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1UIFeatureFlag.attributeTypeMap;
    }
}

