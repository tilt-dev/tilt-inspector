/**
 * tilt
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.19.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1alpha1TargetStateActive } from './v1alpha1TargetStateActive';
import { V1alpha1TargetStateTerminated } from './v1alpha1TargetStateTerminated';
import { V1alpha1TargetStateWaiting } from './v1alpha1TargetStateWaiting';

/**
* TargetState describes the current execution status for a target.  Either EXACTLY one of Waiting, Active, or Terminated will be populated or NONE of them will be. In the event that all states are null, the target is currently inactive or disabled and should not be expected to execute.
*/
export class V1alpha1TargetState {
    'active'?: V1alpha1TargetStateActive;
    'terminated'?: V1alpha1TargetStateTerminated;
    'waiting'?: V1alpha1TargetStateWaiting;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "V1alpha1TargetStateActive"
        },
        {
            "name": "terminated",
            "baseName": "terminated",
            "type": "V1alpha1TargetStateTerminated"
        },
        {
            "name": "waiting",
            "baseName": "waiting",
            "type": "V1alpha1TargetStateWaiting"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1TargetState.attributeTypeMap;
    }
}
