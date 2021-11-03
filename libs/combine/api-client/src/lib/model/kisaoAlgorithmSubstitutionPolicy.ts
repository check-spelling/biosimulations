/**
 * BioSimulations COMBINE API
 * Endpoints for working with models (e.g., [CellML](http://cellml.org/), [SBML](http://sbml.org/)), simulation experiments (e.g., [Simulation Experiment Description Language (SED-ML)](http://sed-ml.org/)), metadata ([OMEX Metadata](https://sys-bio.github.io/libOmexMeta/)), and simulation projects ([COMBINE/OMEX archives](https://combinearchive.org/)).  Note, this API may change significantly in the future.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: info@biosimulations.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Algorithm substitution policy, the degree to switch algorithms can be substituted for each other.
 */
export interface KisaoAlgorithmSubstitutionPolicy {
  /**
   * Id of the policy
   */
  id: KisaoAlgorithmSubstitutionPolicyId;
  /**
   * Level of the policy (0: most restrictive to 9: least restrictive)
   */
  level: number;
  /**
   * Name of the policy
   */
  name: KisaoAlgorithmSubstitutionPolicyName;
  /**
   * Type
   */
  _type: KisaoAlgorithmSubstitutionPolicyType;
}
export enum KisaoAlgorithmSubstitutionPolicyId {
  None = 'NONE',
  SameMethod = 'SAME_METHOD',
  SameMath = 'SAME_MATH',
  SimilarApproximations = 'SIMILAR_APPROXIMATIONS',
  DistinctApproximations = 'DISTINCT_APPROXIMATIONS',
  DistinctScales = 'DISTINCT_SCALES',
  SameVariables = 'SAME_VARIABLES',
  SimilarVariables = 'SIMILAR_VARIABLES',
  SameFramework = 'SAME_FRAMEWORK',
  Any = 'ANY',
}
export enum KisaoAlgorithmSubstitutionPolicyName {
  None = 'None',
  SameMethod = 'Same method',
  SameMath = 'Same math',
  SimilarApproximations = 'Similar approximations',
  DistinctApproximations = 'Distinct approximations',
  DistinctScales = 'Distinct scales',
  SameVariables = 'Same variables',
  SimilarVariables = 'Similar variables',
  SameFramework = 'Same framework',
  Any = 'Any',
}
export enum KisaoAlgorithmSubstitutionPolicyType {
  KisaoAlgorithmSubstitutionPolicy = 'KisaoAlgorithmSubstitutionPolicy',
}
