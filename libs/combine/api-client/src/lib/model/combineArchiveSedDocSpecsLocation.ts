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
import { SedDocument } from './sedDocument';


/**
 * Location of an item in a COMBINE/OMEX archive and its value.
 */
export interface CombineArchiveSedDocSpecsLocation { 
    /**
     * Path within a COMBINE/OMEX archive.
     */
    path: string;
    value: SedDocument;
    /**
     * Type.
     */
    _type: CombineArchiveSedDocSpecsLocationType;
}
export enum CombineArchiveSedDocSpecsLocationType {
    CombineArchiveSedDocSpecsLocation = 'CombineArchiveSedDocSpecsLocation'
};



