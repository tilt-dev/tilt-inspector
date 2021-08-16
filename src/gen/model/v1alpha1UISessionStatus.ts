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
import { V1alpha1TiltBuild } from './v1alpha1TiltBuild';
import { V1alpha1UIFeatureFlag } from './v1alpha1UIFeatureFlag';
import { V1alpha1VersionSettings } from './v1alpha1VersionSettings';

/**
* UISessionStatus defines the observed state of UISession
*/
export class V1alpha1UISessionStatus {
    /**
    * A FatalError is an error that forces Tilt to stop its control loop. The API server will stay up and continue to serve the UI, but no further builds will happen.
    */
    'fatalError'?: string;
    /**
    * FeatureFlags reports a list of experimental features that have been enabled.
    */
    'featureFlags'?: Array<V1alpha1UIFeatureFlag>;
    /**
    * NeedsAnalyticsNudge reports whether the UI hasn\'t opted in or out of analytics, and the UI should nudge them to do so.
    */
    'needsAnalyticsNudge'?: boolean;
    'runningTiltBuild'?: V1alpha1TiltBuild;
    /**
    * SuggestedTiltVersion tells the UI the recommended version for this user. If the version is different than what\'s running, the UI may display a prompt to upgrade.
    */
    'suggestedTiltVersion'?: string;
    /**
    * TiltCloudSchemeHost reports the base URL of the Tilt Cloud instance associated with this Tilt process. Usually https://cloud.tilt.dev
    */
    'tiltCloudSchemeHost'?: string;
    /**
    * TiltCloudTeamID reports the unique team id if the user is signed into TiltCloud and the Tiltfile declares a team.
    */
    'tiltCloudTeamID'?: string;
    /**
    * TiltCloudUsername reports the human-readable team name if the user is signed into TiltCloud and the Tiltfile declares a team.
    */
    'tiltCloudTeamName'?: string;
    /**
    * TiltCloudUsername reports the username if the user is signed into TiltCloud.
    */
    'tiltCloudUsername'?: string;
    /**
    * The time that this instance of tilt started. Clients can use this to determine if the API server has restarted and all the objects need to be refreshed.
    */
    'tiltStartTime'?: Date;
    /**
    * An identifier for the Tiltfile that is running. Clients can use this to store data associated with a particular project in LocalStorage or other persistent storage.
    */
    'tiltfileKey'?: string;
    'versionSettings'?: V1alpha1VersionSettings;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fatalError",
            "baseName": "fatalError",
            "type": "string"
        },
        {
            "name": "featureFlags",
            "baseName": "featureFlags",
            "type": "Array<V1alpha1UIFeatureFlag>"
        },
        {
            "name": "needsAnalyticsNudge",
            "baseName": "needsAnalyticsNudge",
            "type": "boolean"
        },
        {
            "name": "runningTiltBuild",
            "baseName": "runningTiltBuild",
            "type": "V1alpha1TiltBuild"
        },
        {
            "name": "suggestedTiltVersion",
            "baseName": "suggestedTiltVersion",
            "type": "string"
        },
        {
            "name": "tiltCloudSchemeHost",
            "baseName": "tiltCloudSchemeHost",
            "type": "string"
        },
        {
            "name": "tiltCloudTeamID",
            "baseName": "tiltCloudTeamID",
            "type": "string"
        },
        {
            "name": "tiltCloudTeamName",
            "baseName": "tiltCloudTeamName",
            "type": "string"
        },
        {
            "name": "tiltCloudUsername",
            "baseName": "tiltCloudUsername",
            "type": "string"
        },
        {
            "name": "tiltStartTime",
            "baseName": "tiltStartTime",
            "type": "Date"
        },
        {
            "name": "tiltfileKey",
            "baseName": "tiltfileKey",
            "type": "string"
        },
        {
            "name": "versionSettings",
            "baseName": "versionSettings",
            "type": "V1alpha1VersionSettings"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1UISessionStatus.attributeTypeMap;
    }
}

