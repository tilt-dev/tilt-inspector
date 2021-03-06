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
* TiltfileStateTerminated is a terminated state of a tiltfile execution.
*/
export class V1alpha1TiltfileStateTerminated {
    /**
    * Error message if this tiltfile execution failed.
    */
    'error'?: string;
    /**
    * Time at which the command last terminated.
    */
    'finishedAt'?: Date;
    /**
    * The reasons why this tiltfile was built. May contain more than one reason.
    */
    'reasons'?: Array<string>;
    /**
    * Time at which previous execution of the command started.
    */
    'startedAt'?: Date;
    /**
    * Number of warnings generated by this Tiltfile. (brief) reason the process is terminated
    */
    'warningCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "finishedAt",
            "baseName": "finishedAt",
            "type": "Date"
        },
        {
            "name": "reasons",
            "baseName": "reasons",
            "type": "Array<string>"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        },
        {
            "name": "warningCount",
            "baseName": "warningCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1TiltfileStateTerminated.attributeTypeMap;
    }
}

