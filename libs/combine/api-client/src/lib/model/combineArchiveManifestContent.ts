/**
 * BioSimulations COMBINE service
 * Endpoints for working with COMBINE/OMEX archives and model (e.g., SBML) and simulation (e.g., SED-ML) files that they typically contain.  Note, this API may change significantly in the future.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: info@biosimulations.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CombineArchiveManifestLocation } from './combineArchiveManifestLocation';


/**
 * Content item of a COMBINE/OMEX archive.
 */
export interface CombineArchiveManifestContent { 
    location: CombineArchiveManifestLocation;
    /**
     * URI for a format.
     */
    format: string;
    master: boolean;
    /**
     * Type.
     */
    _type: CombineArchiveManifestContentType;
}
export enum CombineArchiveManifestContentType {
    CombineArchiveManifestContent = 'CombineArchiveManifestContent'
};



