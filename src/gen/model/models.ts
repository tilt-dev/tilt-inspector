export * from './v1APIGroup';
export * from './v1APIGroupList';
export * from './v1APIResource';
export * from './v1APIResourceList';
export * from './v1DeleteOptions';
export * from './v1GroupVersionForDiscovery';
export * from './v1LabelSelector';
export * from './v1LabelSelectorRequirement';
export * from './v1ListMeta';
export * from './v1ManagedFieldsEntry';
export * from './v1ObjectMeta';
export * from './v1OwnerReference';
export * from './v1Preconditions';
export * from './v1ServerAddressByClientCIDR';
export * from './v1Status';
export * from './v1StatusCause';
export * from './v1StatusDetails';
export * from './v1WatchEvent';
export * from './v1alpha1Cmd';
export * from './v1alpha1CmdList';
export * from './v1alpha1CmdSpec';
export * from './v1alpha1CmdStateRunning';
export * from './v1alpha1CmdStateTerminated';
export * from './v1alpha1CmdStateWaiting';
export * from './v1alpha1CmdStatus';
export * from './v1alpha1ConfigMap';
export * from './v1alpha1ConfigMapList';
export * from './v1alpha1Container';
export * from './v1alpha1ContainerLogStreamStatus';
export * from './v1alpha1ContainerState';
export * from './v1alpha1ContainerStateRunning';
export * from './v1alpha1ContainerStateTerminated';
export * from './v1alpha1ContainerStateWaiting';
export * from './v1alpha1ExecAction';
export * from './v1alpha1Extension';
export * from './v1alpha1ExtensionList';
export * from './v1alpha1ExtensionRepo';
export * from './v1alpha1ExtensionRepoList';
export * from './v1alpha1ExtensionRepoSpec';
export * from './v1alpha1ExtensionRepoStatus';
export * from './v1alpha1ExtensionSpec';
export * from './v1alpha1ExtensionStatus';
export * from './v1alpha1FileEvent';
export * from './v1alpha1FileWatch';
export * from './v1alpha1FileWatchList';
export * from './v1alpha1FileWatchSpec';
export * from './v1alpha1FileWatchStatus';
export * from './v1alpha1Forward';
export * from './v1alpha1ForwardStatus';
export * from './v1alpha1HTTPGetAction';
export * from './v1alpha1HTTPHeader';
export * from './v1alpha1IgnoreDef';
export * from './v1alpha1ImageMap';
export * from './v1alpha1ImageMapList';
export * from './v1alpha1ImageMapOverrideArgs';
export * from './v1alpha1ImageMapOverrideCommand';
export * from './v1alpha1ImageMapSpec';
export * from './v1alpha1ImageMapStatus';
export * from './v1alpha1KubernetesApply';
export * from './v1alpha1KubernetesApplyList';
export * from './v1alpha1KubernetesApplySpec';
export * from './v1alpha1KubernetesApplyStatus';
export * from './v1alpha1KubernetesDiscovery';
export * from './v1alpha1KubernetesDiscoveryList';
export * from './v1alpha1KubernetesDiscoverySpec';
export * from './v1alpha1KubernetesDiscoveryStatus';
export * from './v1alpha1KubernetesDiscoveryTemplateSpec';
export * from './v1alpha1KubernetesImageLocator';
export * from './v1alpha1KubernetesImageObjectDescriptor';
export * from './v1alpha1KubernetesWatchRef';
export * from './v1alpha1ObjectSelector';
export * from './v1alpha1Pod';
export * from './v1alpha1PodCondition';
export * from './v1alpha1PodLogStream';
export * from './v1alpha1PodLogStreamList';
export * from './v1alpha1PodLogStreamSpec';
export * from './v1alpha1PodLogStreamStatus';
export * from './v1alpha1PodLogStreamTemplateSpec';
export * from './v1alpha1PortForward';
export * from './v1alpha1PortForwardList';
export * from './v1alpha1PortForwardSpec';
export * from './v1alpha1PortForwardStatus';
export * from './v1alpha1PortForwardTemplateSpec';
export * from './v1alpha1Probe';
export * from './v1alpha1RestartOnSpec';
export * from './v1alpha1Session';
export * from './v1alpha1SessionList';
export * from './v1alpha1SessionSpec';
export * from './v1alpha1SessionStatus';
export * from './v1alpha1StartOnSpec';
export * from './v1alpha1TCPSocketAction';
export * from './v1alpha1Target';
export * from './v1alpha1TargetState';
export * from './v1alpha1TargetStateActive';
export * from './v1alpha1TargetStateTerminated';
export * from './v1alpha1TargetStateWaiting';
export * from './v1alpha1TiltBuild';
export * from './v1alpha1Tiltfile';
export * from './v1alpha1TiltfileList';
export * from './v1alpha1TiltfileSpec';
export * from './v1alpha1TiltfileStateRunning';
export * from './v1alpha1TiltfileStateTerminated';
export * from './v1alpha1TiltfileStateWaiting';
export * from './v1alpha1TiltfileStatus';
export * from './v1alpha1UIBuildRunning';
export * from './v1alpha1UIBuildTerminated';
export * from './v1alpha1UIButton';
export * from './v1alpha1UIButtonList';
export * from './v1alpha1UIButtonSpec';
export * from './v1alpha1UIButtonStatus';
export * from './v1alpha1UIComponentLocation';
export * from './v1alpha1UIFeatureFlag';
export * from './v1alpha1UIInputSpec';
export * from './v1alpha1UIInputStatus';
export * from './v1alpha1UIResource';
export * from './v1alpha1UIResourceKubernetes';
export * from './v1alpha1UIResourceLink';
export * from './v1alpha1UIResourceList';
export * from './v1alpha1UIResourceLocal';
export * from './v1alpha1UIResourceStatus';
export * from './v1alpha1UIResourceTargetSpec';
export * from './v1alpha1UISession';
export * from './v1alpha1UISessionList';
export * from './v1alpha1UISessionStatus';
export * from './v1alpha1UITextInputSpec';
export * from './v1alpha1UITextInputStatus';
export * from './v1alpha1VersionSettings';
export * from './versionInfo';

import localVarRequest from 'request';

import { V1APIGroup } from './v1APIGroup';
import { V1APIGroupList } from './v1APIGroupList';
import { V1APIResource } from './v1APIResource';
import { V1APIResourceList } from './v1APIResourceList';
import { V1DeleteOptions } from './v1DeleteOptions';
import { V1GroupVersionForDiscovery } from './v1GroupVersionForDiscovery';
import { V1LabelSelector } from './v1LabelSelector';
import { V1LabelSelectorRequirement } from './v1LabelSelectorRequirement';
import { V1ListMeta } from './v1ListMeta';
import { V1ManagedFieldsEntry } from './v1ManagedFieldsEntry';
import { V1ObjectMeta } from './v1ObjectMeta';
import { V1OwnerReference } from './v1OwnerReference';
import { V1Preconditions } from './v1Preconditions';
import { V1ServerAddressByClientCIDR } from './v1ServerAddressByClientCIDR';
import { V1Status } from './v1Status';
import { V1StatusCause } from './v1StatusCause';
import { V1StatusDetails } from './v1StatusDetails';
import { V1WatchEvent } from './v1WatchEvent';
import { V1alpha1Cmd } from './v1alpha1Cmd';
import { V1alpha1CmdList } from './v1alpha1CmdList';
import { V1alpha1CmdSpec } from './v1alpha1CmdSpec';
import { V1alpha1CmdStateRunning } from './v1alpha1CmdStateRunning';
import { V1alpha1CmdStateTerminated } from './v1alpha1CmdStateTerminated';
import { V1alpha1CmdStateWaiting } from './v1alpha1CmdStateWaiting';
import { V1alpha1CmdStatus } from './v1alpha1CmdStatus';
import { V1alpha1ConfigMap } from './v1alpha1ConfigMap';
import { V1alpha1ConfigMapList } from './v1alpha1ConfigMapList';
import { V1alpha1Container } from './v1alpha1Container';
import { V1alpha1ContainerLogStreamStatus } from './v1alpha1ContainerLogStreamStatus';
import { V1alpha1ContainerState } from './v1alpha1ContainerState';
import { V1alpha1ContainerStateRunning } from './v1alpha1ContainerStateRunning';
import { V1alpha1ContainerStateTerminated } from './v1alpha1ContainerStateTerminated';
import { V1alpha1ContainerStateWaiting } from './v1alpha1ContainerStateWaiting';
import { V1alpha1ExecAction } from './v1alpha1ExecAction';
import { V1alpha1Extension } from './v1alpha1Extension';
import { V1alpha1ExtensionList } from './v1alpha1ExtensionList';
import { V1alpha1ExtensionRepo } from './v1alpha1ExtensionRepo';
import { V1alpha1ExtensionRepoList } from './v1alpha1ExtensionRepoList';
import { V1alpha1ExtensionRepoSpec } from './v1alpha1ExtensionRepoSpec';
import { V1alpha1ExtensionRepoStatus } from './v1alpha1ExtensionRepoStatus';
import { V1alpha1ExtensionSpec } from './v1alpha1ExtensionSpec';
import { V1alpha1ExtensionStatus } from './v1alpha1ExtensionStatus';
import { V1alpha1FileEvent } from './v1alpha1FileEvent';
import { V1alpha1FileWatch } from './v1alpha1FileWatch';
import { V1alpha1FileWatchList } from './v1alpha1FileWatchList';
import { V1alpha1FileWatchSpec } from './v1alpha1FileWatchSpec';
import { V1alpha1FileWatchStatus } from './v1alpha1FileWatchStatus';
import { V1alpha1Forward } from './v1alpha1Forward';
import { V1alpha1ForwardStatus } from './v1alpha1ForwardStatus';
import { V1alpha1HTTPGetAction } from './v1alpha1HTTPGetAction';
import { V1alpha1HTTPHeader } from './v1alpha1HTTPHeader';
import { V1alpha1IgnoreDef } from './v1alpha1IgnoreDef';
import { V1alpha1ImageMap } from './v1alpha1ImageMap';
import { V1alpha1ImageMapList } from './v1alpha1ImageMapList';
import { V1alpha1ImageMapOverrideArgs } from './v1alpha1ImageMapOverrideArgs';
import { V1alpha1ImageMapOverrideCommand } from './v1alpha1ImageMapOverrideCommand';
import { V1alpha1ImageMapSpec } from './v1alpha1ImageMapSpec';
import { V1alpha1ImageMapStatus } from './v1alpha1ImageMapStatus';
import { V1alpha1KubernetesApply } from './v1alpha1KubernetesApply';
import { V1alpha1KubernetesApplyList } from './v1alpha1KubernetesApplyList';
import { V1alpha1KubernetesApplySpec } from './v1alpha1KubernetesApplySpec';
import { V1alpha1KubernetesApplyStatus } from './v1alpha1KubernetesApplyStatus';
import { V1alpha1KubernetesDiscovery } from './v1alpha1KubernetesDiscovery';
import { V1alpha1KubernetesDiscoveryList } from './v1alpha1KubernetesDiscoveryList';
import { V1alpha1KubernetesDiscoverySpec } from './v1alpha1KubernetesDiscoverySpec';
import { V1alpha1KubernetesDiscoveryStatus } from './v1alpha1KubernetesDiscoveryStatus';
import { V1alpha1KubernetesDiscoveryTemplateSpec } from './v1alpha1KubernetesDiscoveryTemplateSpec';
import { V1alpha1KubernetesImageLocator } from './v1alpha1KubernetesImageLocator';
import { V1alpha1KubernetesImageObjectDescriptor } from './v1alpha1KubernetesImageObjectDescriptor';
import { V1alpha1KubernetesWatchRef } from './v1alpha1KubernetesWatchRef';
import { V1alpha1ObjectSelector } from './v1alpha1ObjectSelector';
import { V1alpha1Pod } from './v1alpha1Pod';
import { V1alpha1PodCondition } from './v1alpha1PodCondition';
import { V1alpha1PodLogStream } from './v1alpha1PodLogStream';
import { V1alpha1PodLogStreamList } from './v1alpha1PodLogStreamList';
import { V1alpha1PodLogStreamSpec } from './v1alpha1PodLogStreamSpec';
import { V1alpha1PodLogStreamStatus } from './v1alpha1PodLogStreamStatus';
import { V1alpha1PodLogStreamTemplateSpec } from './v1alpha1PodLogStreamTemplateSpec';
import { V1alpha1PortForward } from './v1alpha1PortForward';
import { V1alpha1PortForwardList } from './v1alpha1PortForwardList';
import { V1alpha1PortForwardSpec } from './v1alpha1PortForwardSpec';
import { V1alpha1PortForwardStatus } from './v1alpha1PortForwardStatus';
import { V1alpha1PortForwardTemplateSpec } from './v1alpha1PortForwardTemplateSpec';
import { V1alpha1Probe } from './v1alpha1Probe';
import { V1alpha1RestartOnSpec } from './v1alpha1RestartOnSpec';
import { V1alpha1Session } from './v1alpha1Session';
import { V1alpha1SessionList } from './v1alpha1SessionList';
import { V1alpha1SessionSpec } from './v1alpha1SessionSpec';
import { V1alpha1SessionStatus } from './v1alpha1SessionStatus';
import { V1alpha1StartOnSpec } from './v1alpha1StartOnSpec';
import { V1alpha1TCPSocketAction } from './v1alpha1TCPSocketAction';
import { V1alpha1Target } from './v1alpha1Target';
import { V1alpha1TargetState } from './v1alpha1TargetState';
import { V1alpha1TargetStateActive } from './v1alpha1TargetStateActive';
import { V1alpha1TargetStateTerminated } from './v1alpha1TargetStateTerminated';
import { V1alpha1TargetStateWaiting } from './v1alpha1TargetStateWaiting';
import { V1alpha1TiltBuild } from './v1alpha1TiltBuild';
import { V1alpha1Tiltfile } from './v1alpha1Tiltfile';
import { V1alpha1TiltfileList } from './v1alpha1TiltfileList';
import { V1alpha1TiltfileSpec } from './v1alpha1TiltfileSpec';
import { V1alpha1TiltfileStateRunning } from './v1alpha1TiltfileStateRunning';
import { V1alpha1TiltfileStateTerminated } from './v1alpha1TiltfileStateTerminated';
import { V1alpha1TiltfileStateWaiting } from './v1alpha1TiltfileStateWaiting';
import { V1alpha1TiltfileStatus } from './v1alpha1TiltfileStatus';
import { V1alpha1UIBuildRunning } from './v1alpha1UIBuildRunning';
import { V1alpha1UIBuildTerminated } from './v1alpha1UIBuildTerminated';
import { V1alpha1UIButton } from './v1alpha1UIButton';
import { V1alpha1UIButtonList } from './v1alpha1UIButtonList';
import { V1alpha1UIButtonSpec } from './v1alpha1UIButtonSpec';
import { V1alpha1UIButtonStatus } from './v1alpha1UIButtonStatus';
import { V1alpha1UIComponentLocation } from './v1alpha1UIComponentLocation';
import { V1alpha1UIFeatureFlag } from './v1alpha1UIFeatureFlag';
import { V1alpha1UIInputSpec } from './v1alpha1UIInputSpec';
import { V1alpha1UIInputStatus } from './v1alpha1UIInputStatus';
import { V1alpha1UIResource } from './v1alpha1UIResource';
import { V1alpha1UIResourceKubernetes } from './v1alpha1UIResourceKubernetes';
import { V1alpha1UIResourceLink } from './v1alpha1UIResourceLink';
import { V1alpha1UIResourceList } from './v1alpha1UIResourceList';
import { V1alpha1UIResourceLocal } from './v1alpha1UIResourceLocal';
import { V1alpha1UIResourceStatus } from './v1alpha1UIResourceStatus';
import { V1alpha1UIResourceTargetSpec } from './v1alpha1UIResourceTargetSpec';
import { V1alpha1UISession } from './v1alpha1UISession';
import { V1alpha1UISessionList } from './v1alpha1UISessionList';
import { V1alpha1UISessionStatus } from './v1alpha1UISessionStatus';
import { V1alpha1UITextInputSpec } from './v1alpha1UITextInputSpec';
import { V1alpha1UITextInputStatus } from './v1alpha1UITextInputStatus';
import { V1alpha1VersionSettings } from './v1alpha1VersionSettings';
import { VersionInfo } from './versionInfo';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "V1APIGroup": V1APIGroup,
    "V1APIGroupList": V1APIGroupList,
    "V1APIResource": V1APIResource,
    "V1APIResourceList": V1APIResourceList,
    "V1DeleteOptions": V1DeleteOptions,
    "V1GroupVersionForDiscovery": V1GroupVersionForDiscovery,
    "V1LabelSelector": V1LabelSelector,
    "V1LabelSelectorRequirement": V1LabelSelectorRequirement,
    "V1ListMeta": V1ListMeta,
    "V1ManagedFieldsEntry": V1ManagedFieldsEntry,
    "V1ObjectMeta": V1ObjectMeta,
    "V1OwnerReference": V1OwnerReference,
    "V1Preconditions": V1Preconditions,
    "V1ServerAddressByClientCIDR": V1ServerAddressByClientCIDR,
    "V1Status": V1Status,
    "V1StatusCause": V1StatusCause,
    "V1StatusDetails": V1StatusDetails,
    "V1WatchEvent": V1WatchEvent,
    "V1alpha1Cmd": V1alpha1Cmd,
    "V1alpha1CmdList": V1alpha1CmdList,
    "V1alpha1CmdSpec": V1alpha1CmdSpec,
    "V1alpha1CmdStateRunning": V1alpha1CmdStateRunning,
    "V1alpha1CmdStateTerminated": V1alpha1CmdStateTerminated,
    "V1alpha1CmdStateWaiting": V1alpha1CmdStateWaiting,
    "V1alpha1CmdStatus": V1alpha1CmdStatus,
    "V1alpha1ConfigMap": V1alpha1ConfigMap,
    "V1alpha1ConfigMapList": V1alpha1ConfigMapList,
    "V1alpha1Container": V1alpha1Container,
    "V1alpha1ContainerLogStreamStatus": V1alpha1ContainerLogStreamStatus,
    "V1alpha1ContainerState": V1alpha1ContainerState,
    "V1alpha1ContainerStateRunning": V1alpha1ContainerStateRunning,
    "V1alpha1ContainerStateTerminated": V1alpha1ContainerStateTerminated,
    "V1alpha1ContainerStateWaiting": V1alpha1ContainerStateWaiting,
    "V1alpha1ExecAction": V1alpha1ExecAction,
    "V1alpha1Extension": V1alpha1Extension,
    "V1alpha1ExtensionList": V1alpha1ExtensionList,
    "V1alpha1ExtensionRepo": V1alpha1ExtensionRepo,
    "V1alpha1ExtensionRepoList": V1alpha1ExtensionRepoList,
    "V1alpha1ExtensionRepoSpec": V1alpha1ExtensionRepoSpec,
    "V1alpha1ExtensionRepoStatus": V1alpha1ExtensionRepoStatus,
    "V1alpha1ExtensionSpec": V1alpha1ExtensionSpec,
    "V1alpha1ExtensionStatus": V1alpha1ExtensionStatus,
    "V1alpha1FileEvent": V1alpha1FileEvent,
    "V1alpha1FileWatch": V1alpha1FileWatch,
    "V1alpha1FileWatchList": V1alpha1FileWatchList,
    "V1alpha1FileWatchSpec": V1alpha1FileWatchSpec,
    "V1alpha1FileWatchStatus": V1alpha1FileWatchStatus,
    "V1alpha1Forward": V1alpha1Forward,
    "V1alpha1ForwardStatus": V1alpha1ForwardStatus,
    "V1alpha1HTTPGetAction": V1alpha1HTTPGetAction,
    "V1alpha1HTTPHeader": V1alpha1HTTPHeader,
    "V1alpha1IgnoreDef": V1alpha1IgnoreDef,
    "V1alpha1ImageMap": V1alpha1ImageMap,
    "V1alpha1ImageMapList": V1alpha1ImageMapList,
    "V1alpha1ImageMapOverrideArgs": V1alpha1ImageMapOverrideArgs,
    "V1alpha1ImageMapOverrideCommand": V1alpha1ImageMapOverrideCommand,
    "V1alpha1ImageMapSpec": V1alpha1ImageMapSpec,
    "V1alpha1ImageMapStatus": V1alpha1ImageMapStatus,
    "V1alpha1KubernetesApply": V1alpha1KubernetesApply,
    "V1alpha1KubernetesApplyList": V1alpha1KubernetesApplyList,
    "V1alpha1KubernetesApplySpec": V1alpha1KubernetesApplySpec,
    "V1alpha1KubernetesApplyStatus": V1alpha1KubernetesApplyStatus,
    "V1alpha1KubernetesDiscovery": V1alpha1KubernetesDiscovery,
    "V1alpha1KubernetesDiscoveryList": V1alpha1KubernetesDiscoveryList,
    "V1alpha1KubernetesDiscoverySpec": V1alpha1KubernetesDiscoverySpec,
    "V1alpha1KubernetesDiscoveryStatus": V1alpha1KubernetesDiscoveryStatus,
    "V1alpha1KubernetesDiscoveryTemplateSpec": V1alpha1KubernetesDiscoveryTemplateSpec,
    "V1alpha1KubernetesImageLocator": V1alpha1KubernetesImageLocator,
    "V1alpha1KubernetesImageObjectDescriptor": V1alpha1KubernetesImageObjectDescriptor,
    "V1alpha1KubernetesWatchRef": V1alpha1KubernetesWatchRef,
    "V1alpha1ObjectSelector": V1alpha1ObjectSelector,
    "V1alpha1Pod": V1alpha1Pod,
    "V1alpha1PodCondition": V1alpha1PodCondition,
    "V1alpha1PodLogStream": V1alpha1PodLogStream,
    "V1alpha1PodLogStreamList": V1alpha1PodLogStreamList,
    "V1alpha1PodLogStreamSpec": V1alpha1PodLogStreamSpec,
    "V1alpha1PodLogStreamStatus": V1alpha1PodLogStreamStatus,
    "V1alpha1PodLogStreamTemplateSpec": V1alpha1PodLogStreamTemplateSpec,
    "V1alpha1PortForward": V1alpha1PortForward,
    "V1alpha1PortForwardList": V1alpha1PortForwardList,
    "V1alpha1PortForwardSpec": V1alpha1PortForwardSpec,
    "V1alpha1PortForwardStatus": V1alpha1PortForwardStatus,
    "V1alpha1PortForwardTemplateSpec": V1alpha1PortForwardTemplateSpec,
    "V1alpha1Probe": V1alpha1Probe,
    "V1alpha1RestartOnSpec": V1alpha1RestartOnSpec,
    "V1alpha1Session": V1alpha1Session,
    "V1alpha1SessionList": V1alpha1SessionList,
    "V1alpha1SessionSpec": V1alpha1SessionSpec,
    "V1alpha1SessionStatus": V1alpha1SessionStatus,
    "V1alpha1StartOnSpec": V1alpha1StartOnSpec,
    "V1alpha1TCPSocketAction": V1alpha1TCPSocketAction,
    "V1alpha1Target": V1alpha1Target,
    "V1alpha1TargetState": V1alpha1TargetState,
    "V1alpha1TargetStateActive": V1alpha1TargetStateActive,
    "V1alpha1TargetStateTerminated": V1alpha1TargetStateTerminated,
    "V1alpha1TargetStateWaiting": V1alpha1TargetStateWaiting,
    "V1alpha1TiltBuild": V1alpha1TiltBuild,
    "V1alpha1Tiltfile": V1alpha1Tiltfile,
    "V1alpha1TiltfileList": V1alpha1TiltfileList,
    "V1alpha1TiltfileSpec": V1alpha1TiltfileSpec,
    "V1alpha1TiltfileStateRunning": V1alpha1TiltfileStateRunning,
    "V1alpha1TiltfileStateTerminated": V1alpha1TiltfileStateTerminated,
    "V1alpha1TiltfileStateWaiting": V1alpha1TiltfileStateWaiting,
    "V1alpha1TiltfileStatus": V1alpha1TiltfileStatus,
    "V1alpha1UIBuildRunning": V1alpha1UIBuildRunning,
    "V1alpha1UIBuildTerminated": V1alpha1UIBuildTerminated,
    "V1alpha1UIButton": V1alpha1UIButton,
    "V1alpha1UIButtonList": V1alpha1UIButtonList,
    "V1alpha1UIButtonSpec": V1alpha1UIButtonSpec,
    "V1alpha1UIButtonStatus": V1alpha1UIButtonStatus,
    "V1alpha1UIComponentLocation": V1alpha1UIComponentLocation,
    "V1alpha1UIFeatureFlag": V1alpha1UIFeatureFlag,
    "V1alpha1UIInputSpec": V1alpha1UIInputSpec,
    "V1alpha1UIInputStatus": V1alpha1UIInputStatus,
    "V1alpha1UIResource": V1alpha1UIResource,
    "V1alpha1UIResourceKubernetes": V1alpha1UIResourceKubernetes,
    "V1alpha1UIResourceLink": V1alpha1UIResourceLink,
    "V1alpha1UIResourceList": V1alpha1UIResourceList,
    "V1alpha1UIResourceLocal": V1alpha1UIResourceLocal,
    "V1alpha1UIResourceStatus": V1alpha1UIResourceStatus,
    "V1alpha1UIResourceTargetSpec": V1alpha1UIResourceTargetSpec,
    "V1alpha1UISession": V1alpha1UISession,
    "V1alpha1UISessionList": V1alpha1UISessionList,
    "V1alpha1UISessionStatus": V1alpha1UISessionStatus,
    "V1alpha1UITextInputSpec": V1alpha1UITextInputSpec,
    "V1alpha1UITextInputStatus": V1alpha1UITextInputStatus,
    "V1alpha1VersionSettings": V1alpha1VersionSettings,
    "VersionInfo": VersionInfo,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
