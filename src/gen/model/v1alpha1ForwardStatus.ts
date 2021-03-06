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

export class V1alpha1ForwardStatus {
    /**
    * Addresses that the forwarder is bound to.  For example, a `localhost` host will bind to 127.0.0.1 and [::1].
    */
    'addresses': Array<string>;
    /**
    * ContainerPort is the port in the container being forwarded.
    */
    'containerPort': number;
    /**
    * Error is a human-readable description if a problem was encountered while initializing the forward.
    */
    'error'?: string;
    /**
    * LocalPort is the port bound to on the system running Tilt.
    */
    'localPort': number;
    /**
    * StartedAt is the time at which the forward was initiated.  If the forwarder is not running yet, this will be zero/empty.
    */
    'startedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<string>"
        },
        {
            "name": "containerPort",
            "baseName": "containerPort",
            "type": "number"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "localPort",
            "baseName": "localPort",
            "type": "number"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ForwardStatus.attributeTypeMap;
    }
}

