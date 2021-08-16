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
* PodLogStreamTemplateSpec describes common attributes for PodLogStreams that can be shared across pods.
*/
export class V1alpha1PodLogStreamTemplateSpec {
    /**
    * The names of containers to exclude from the stream.  If `onlyContainers` and `ignoreContainers` are not set, will watch all containers in the pod.
    */
    'ignoreContainers'?: Array<string>;
    /**
    * The names of containers to include in the stream.  If `onlyContainers` and `ignoreContainers` are not set, will watch all containers in the pod.
    */
    'onlyContainers'?: Array<string>;
    /**
    * An RFC3339 timestamp from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned.  Translates directly to the underlying PodLogOptions.
    */
    'sinceTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ignoreContainers",
            "baseName": "ignoreContainers",
            "type": "Array<string>"
        },
        {
            "name": "onlyContainers",
            "baseName": "onlyContainers",
            "type": "Array<string>"
        },
        {
            "name": "sinceTime",
            "baseName": "sinceTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1PodLogStreamTemplateSpec.attributeTypeMap;
    }
}

