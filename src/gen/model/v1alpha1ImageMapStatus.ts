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
* ImageMapStatus defines the observed state of ImageMap
*/
export class V1alpha1ImageMapStatus {
    /**
    * A fully-qualified image reference, including a name and an immutable tag.  The image will not necessarily have the same repo URL as the selector. Many Kubernetes clusters let you push to a local registry for local development.
    */
    'image': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ImageMapStatus.attributeTypeMap;
    }
}

