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

/**
* ServicePort contains information on service\'s port.
*/
export class IoK8sApiCoreV1ServicePort {
    /**
    * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.
    */
    'appProtocol'?: string;
    /**
    * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the \'name\' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
    */
    'name'?: string;
    /**
    * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
    */
    'nodePort'?: number;
    /**
    * The port that will be exposed by this service.
    */
    'port': number;
    /**
    * The IP protocol for this port. Supports \"TCP\", \"UDP\", and \"SCTP\". Default is TCP.  Possible enum values:  - `\"SCTP\"` is the SCTP protocol.  - `\"TCP\"` is the TCP protocol.  - `\"UDP\"` is the UDP protocol.
    */
    'protocol'?: IoK8sApiCoreV1ServicePort.ProtocolEnum;
    'targetPort'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appProtocol",
            "baseName": "appProtocol",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nodePort",
            "baseName": "nodePort",
            "type": "number"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "IoK8sApiCoreV1ServicePort.ProtocolEnum"
        },
        {
            "name": "targetPort",
            "baseName": "targetPort",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ServicePort.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1ServicePort {
    export enum ProtocolEnum {
        Sctp = <any> 'SCTP',
        Tcp = <any> 'TCP',
        Udp = <any> 'UDP'
    }
}