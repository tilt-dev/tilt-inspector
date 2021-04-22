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

export class V1alpha1IgnoreDef {
    /**
    * BasePath is the base path for the patterns. It cannot be empty.  If no patterns are specified, everything under it will be recursively ignored.
    */
    'basePath': string;
    /**
    * Patterns are dockerignore style rules. Absolute-style patterns will be rooted to the BasePath.  See https://docs.docker.com/engine/reference/builder/#dockerignore-file.
    */
    'patterns'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "basePath",
            "baseName": "basePath",
            "type": "string"
        },
        {
            "name": "patterns",
            "baseName": "patterns",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1IgnoreDef.attributeTypeMap;
    }
}

