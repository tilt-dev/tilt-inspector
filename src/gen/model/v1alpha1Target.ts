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
import { V1alpha1TargetState } from './v1alpha1TargetState';

/**
* Target is a server or job whose execution is managed as part of this Session.
*/
export class V1alpha1Target {
    /**
    * Name is the name of the target; this is auto-generated from Tiltfile resources.
    */
    'name': string;
    /**
    * Resources are one or more Tiltfile resources that this target is associated with.
    */
    'resources': Array<string>;
    'state': V1alpha1TargetState;
    /**
    * Type is the execution profile for this resource.  Job targets run to completion (e.g. a build script or database migration script). Server targets run indefinitely (e.g. an HTTP server).
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Array<string>"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "V1alpha1TargetState"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1Target.attributeTypeMap;
    }
}

