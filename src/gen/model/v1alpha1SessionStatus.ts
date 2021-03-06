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
import { V1alpha1Target } from './v1alpha1Target';

/**
* SessionStatus defines the observed state of Session
*/
export class V1alpha1SessionStatus {
    /**
    * Done indicates whether this Session has completed its work and is ready to exit.
    */
    'done': boolean;
    /**
    * Error is a non-empty string when the Session is Done but encountered a failure as defined by the ExitCondition from the SessionSpec.
    */
    'error'?: string;
    /**
    * PID is the process identifier for this instance of Tilt.
    */
    'pid': number;
    /**
    * StartTime is when the Tilt engine was first started.
    */
    'startTime': Date;
    /**
    * Targets are normalized representations of the servers/jobs managed by this Session.  A resource from a Tiltfile might produce one or more targets. A target can also be shared across multiple resources (e.g. an image referenced by multiple K8s pods).
    */
    'targets': Array<V1alpha1Target>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "done",
            "baseName": "done",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "pid",
            "baseName": "pid",
            "type": "number"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date"
        },
        {
            "name": "targets",
            "baseName": "targets",
            "type": "Array<V1alpha1Target>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1SessionStatus.attributeTypeMap;
    }
}

