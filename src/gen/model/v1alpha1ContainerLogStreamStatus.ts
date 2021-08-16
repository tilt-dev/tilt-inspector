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
* ContainerLogStreamStatus defines the current status of each individual container log stream.
*/
export class V1alpha1ContainerLogStreamStatus {
    /**
    * True when the stream is set up and streaming logs properly.
    */
    'active'?: boolean;
    /**
    * The last error message encountered while streaming.  Empty when the stream is actively streaming or successfully terminated.
    */
    'error'?: string;
    /**
    * The name of the container.
    */
    'name'?: string;
    /**
    * True when the logs are done stream and the container is terminated.
    */
    'terminated'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "terminated",
            "baseName": "terminated",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ContainerLogStreamStatus.attributeTypeMap;
    }
}

