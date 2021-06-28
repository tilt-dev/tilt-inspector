/**
 * tilt
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.20.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1alpha1UIComponentLocation } from './v1alpha1UIComponentLocation';

/**
* UIButtonSpec defines the desired state of UIButton
*/
export class V1alpha1UIButtonSpec {
    'location': V1alpha1UIComponentLocation;
    /**
    * Text to appear on the button itself.
    */
    'text': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "location",
            "baseName": "location",
            "type": "V1alpha1UIComponentLocation"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1UIButtonSpec.attributeTypeMap;
    }
}

