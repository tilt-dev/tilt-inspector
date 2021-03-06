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
import { V1alpha1ContainerLogStreamStatus } from './v1alpha1ContainerLogStreamStatus';

/**
* PodLogStreamStatus defines the observed state of PodLogStream
*/
export class V1alpha1PodLogStreamStatus {
    /**
    * A list of containers being watched.
    */
    'containerStatuses'?: Array<V1alpha1ContainerLogStreamStatus>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "containerStatuses",
            "baseName": "containerStatuses",
            "type": "Array<V1alpha1ContainerLogStreamStatus>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1PodLogStreamStatus.attributeTypeMap;
    }
}

