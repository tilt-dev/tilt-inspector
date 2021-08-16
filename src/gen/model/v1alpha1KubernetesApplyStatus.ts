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
* KubernetesApplyStatus defines the observed state of KubernetesApply
*/
export class V1alpha1KubernetesApplyStatus {
    /**
    * A base64-encoded hash of all the inputs to the apply.  We added this so that more procedural code can determine whether their updates have been applied yet or not by the reconciler. But any code using it this way should note that the reconciler may \"skip\" an update (e.g., if two images get updated in quick succession before the reconciler injects them into the YAML), so a particular ApplieInputHash might never appear.
    */
    'appliedInputHash'?: string;
    /**
    * An error applying the YAML.  If there was an error, than ResultYAML should be empty (and vice versa).
    */
    'error'?: string;
    /**
    * The last time the controller tried to apply YAML.
    */
    'lastApplyTime'?: Date;
    /**
    * The result of applying the YAML to the cluster. This should contain UIDs for the applied resources.
    */
    'resultYAML'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appliedInputHash",
            "baseName": "appliedInputHash",
            "type": "string"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "lastApplyTime",
            "baseName": "lastApplyTime",
            "type": "Date"
        },
        {
            "name": "resultYAML",
            "baseName": "resultYAML",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1KubernetesApplyStatus.attributeTypeMap;
    }
}

