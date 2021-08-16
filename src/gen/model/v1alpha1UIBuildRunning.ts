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
* UIBuildRunning respresents an in-progress build/update in the user interface.
*/
export class V1alpha1UIBuildRunning {
    /**
    * The log span where the build logs are stored in the logstore.
    */
    'spanID'?: string;
    /**
    * The time when the build started.
    */
    'startTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "spanID",
            "baseName": "spanID",
            "type": "string"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1UIBuildRunning.attributeTypeMap;
    }
}

