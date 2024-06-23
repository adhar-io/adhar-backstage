// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoK8sApiCoreV1NodeSelector } from './ioK8sApiCoreV1NodeSelector';
import { IoK8sApiCoreV1PreferredSchedulingTerm } from './ioK8sApiCoreV1PreferredSchedulingTerm';

/**
* Node affinity is a group of node affinity scheduling rules.
*/
export class IoK8sApiCoreV1NodeAffinity {
    /**
    * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
    */
    'preferredDuringSchedulingIgnoredDuringExecution'?: Array<IoK8sApiCoreV1PreferredSchedulingTerm>;
    'requiredDuringSchedulingIgnoredDuringExecution'?: IoK8sApiCoreV1NodeSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preferredDuringSchedulingIgnoredDuringExecution",
            "baseName": "preferredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<IoK8sApiCoreV1PreferredSchedulingTerm>"
        },
        {
            "name": "requiredDuringSchedulingIgnoredDuringExecution",
            "baseName": "requiredDuringSchedulingIgnoredDuringExecution",
            "type": "IoK8sApiCoreV1NodeSelector"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1NodeAffinity.attributeTypeMap;
    }
}
