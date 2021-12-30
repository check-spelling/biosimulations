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
 * A surface a 3D plot.
 */
export interface SedSurface {
  /**
   * Unique identifier within its parent SED-ML document.
   */
  id: string;
  /**
   * Brief description.
   */
  name?: string;
  /**
   * Identifier of the data generator for the x data of the surface.
   */
  xDataGenerator: string;
  /**
   * Identifier of the data generator for the y data of the surface.
   */
  yDataGenerator: string;
  /**
   * Identifier of the data generator for the z data of the surface.
   */
  zDataGenerator: string;
  /**
   * Type.
   */
  _type: SedSurfaceTypeEnum;
}
export enum SedSurfaceTypeEnum {
  SedSurface = 'SedSurface',
}
