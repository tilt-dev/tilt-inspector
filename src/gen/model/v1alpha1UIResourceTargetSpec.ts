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

/**
* UIResourceTargetSpec represents the spec of a build or deploy that a resource summarizes.
*/
export class V1alpha1UIResourceTargetSpec {
    /**
    * Whether the target has a live update assocated with it.
    */
    'hasLiveUpdate'?: boolean;
    /**
    * The ID of the target.
    */
    'id'?: string;
    /**
    * The type of the target.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hasLiveUpdate",
            "baseName": "hasLiveUpdate",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1UIResourceTargetSpec.attributeTypeMap;
    }
}

