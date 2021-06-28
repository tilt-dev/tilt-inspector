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
* StartOnSpec indicates the set of objects that can trigger a start/restart of this object.
*/
export class V1alpha1StartOnSpec {
    /**
    * Any events that predate this time will be ignored.
    */
    'startAfter'?: Date;
    /**
    * A list of ui buttons that can trigger a run.
    */
    'uiButtons': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startAfter",
            "baseName": "startAfter",
            "type": "Date"
        },
        {
            "name": "uiButtons",
            "baseName": "uiButtons",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1StartOnSpec.attributeTypeMap;
    }
}
