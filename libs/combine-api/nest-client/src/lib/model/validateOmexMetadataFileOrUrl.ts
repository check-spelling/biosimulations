/**
 * BioSimulations COMBINE API
 * Endpoints for working with models (e.g., [CellML](https://cellml.org/), [SBML](http://sbml.org/)), simulation experiments (e.g., [Simulation Experiment Description Language (SED-ML)](https://sed-ml.org/)), metadata ([OMEX Metadata](https://sys-bio.github.io/libOmexMeta/)), and simulation projects ([COMBINE/OMEX archives](https://combinearchive.org/)).  Note, this API may change significantly in the future.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: info@biosimulations.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * File or a URL for validating an OMEX Metadata document.
 */
export interface ValidateOmexMetadataFileOrUrl {
  /**
   * The two files uploaded in creating a combine archive
   */
  file?: Blob;
  /**
   * URL
   */
  url?: string;
  /**
   * Format of the document
   */
  format: ValidateOmexMetadataFileOrUrlFormat;
  /**
   * Schema for validating OMEX Metadata files. The RDF schema, allows all semantic triples. The [BioSimulations schema](https://biosimulators.org/conventions/metadata) imposes additional requirements for minimal metadata about simulation projects. The BioSimulations schema is required for publishing projects to BioSimulations.
   */
  schema: ValidateOmexMetadataFileOrUrlSchema;
}
export enum ValidateOmexMetadataFileOrUrlFormat {
  Ntriples = 'ntriples',
  Nquads = 'nquads',
  Rdfa = 'rdfa',
  Rdfxml = 'rdfxml',
  Turtle = 'turtle',
}
export enum ValidateOmexMetadataFileOrUrlSchema {
  RdfTriples = 'rdf_triples',
  BioSimulations = 'BioSimulations',
}