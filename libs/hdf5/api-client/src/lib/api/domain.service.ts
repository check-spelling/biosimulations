/**
 * BioSimulations Data Service
 * RESTful application programming interface documentation for the Biosimulations Data Service, based on the HDF Scalable Data Service (HSDS) from the HDF Group.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: info@biosimulations.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { HttpService, Inject, Injectable, Optional } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { InlineObject } from '../model/inlineObject';
import { InlineObject2 } from '../model/inlineObject2';
import { InlineObject6 } from '../model/inlineObject6';
import { InlineObject7 } from '../model/inlineObject7';
import { InlineResponse200 } from '../model/inlineResponse200';
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { InlineResponse20016 } from '../model/inlineResponse20016';
import { InlineResponse20017 } from '../model/inlineResponse20017';
import { InlineResponse2002 } from '../model/inlineResponse2002';
import { InlineResponse2006 } from '../model/inlineResponse2006';
import { InlineResponse201 } from '../model/inlineResponse201';
import { InlineResponse2011 } from '../model/inlineResponse2011';
import { InlineResponse2012 } from '../model/inlineResponse2012';
import { InlineResponse2014 } from '../model/inlineResponse2014';
import { Configuration } from '../configuration';

@Injectable()
export class DomainService {
  protected basePath = 'https://data.biosimulations.dev';
  public defaultHeaders: Record<string, string> = {};
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpService,
    @Optional() configuration: Configuration,
  ) {
    this.configuration = configuration || this.configuration;
    this.basePath = configuration?.basePath || this.basePath;
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    return consumes.includes(form);
  }

  /**
   * Get access lists on Domain.
   *
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public aclsGet(
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse20016>>;
  public aclsGet(domain?: string, authorization?: string): Observable<any> {
    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse20016>(`${this.basePath}/acls`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Get users\&#39;s access to a Domain.
   *
   * @param user User identifier/name.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public aclsUserGet(
    user: string,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse20017>>;
  public aclsUserGet(
    user: string,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (user === null || user === undefined) {
      throw new Error(
        'Required parameter user was null or undefined when calling aclsUserGet.',
      );
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse20017>(
      `${this.basePath}/acls/${encodeURIComponent(String(user))}`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Set user\&#39;s access to the Domain.
   *
   * @param user Identifier/name of a user.
   * @param inlineObject7
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public aclsUserPut(
    user: string,
    inlineObject7: InlineObject7,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse20017>>;
  public aclsUserPut(
    user: string,
    inlineObject7: InlineObject7,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (user === null || user === undefined) {
      throw new Error(
        'Required parameter user was null or undefined when calling aclsUserPut.',
      );
    }

    if (inlineObject7 === null || inlineObject7 === undefined) {
      throw new Error(
        'Required parameter inlineObject7 was null or undefined when calling aclsUserPut.',
      );
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.put<InlineResponse20017>(
      `${this.basePath}/acls/${encodeURIComponent(String(user))}`,
      inlineObject7,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * List Datasets.
   * Only includes Datasets that are part of the tree linked to the root  Group in the Domain.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsGet(
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2006>>;
  public datasetsGet(domain?: string, authorization?: string): Observable<any> {
    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse2006>(
      `${this.basePath}/datasets`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Create a Dataset.
   * Create a new Dataset object in the Domain. New object is not linked to or by any other object upon creation; will not appear in &#x60;datasets&#x60; listing until linked to tree originating at the Domain\&#39;s root Group.
   * @param inlineObject2
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsPost(
    inlineObject2: InlineObject2,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2012>>;
  public datasetsPost(
    inlineObject2: InlineObject2,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (inlineObject2 === null || inlineObject2 === undefined) {
      throw new Error(
        'Required parameter inlineObject2 was null or undefined when calling datasetsPost.',
      );
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.post<InlineResponse2012>(
      `${this.basePath}/datasets`,
      inlineObject2,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Commit a Datatype to the Domain.
   *
   * @param inlineObject6
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datatypesPost(
    inlineObject6: InlineObject6,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2014>>;
  public datatypesPost(
    inlineObject6: InlineObject6,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (inlineObject6 === null || inlineObject6 === undefined) {
      throw new Error(
        'Required parameter inlineObject6 was null or undefined when calling datatypesPost.',
      );
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.post<InlineResponse2014>(
      `${this.basePath}/datatypes`,
      inlineObject6,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Get UUIDs for all non-root Groups in Domain.
   * Listed Group(s) must be reachable via hard Link from root Group, either directly or indirectly. If Groups exist which are unlinked or not reachable by tree originating at root, they will not be included in the list. If there is any hard Link in the tree to a Group which has been deleted, the request will fail with error 410 (GONE).
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsGet(
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2002>>;
  public groupsGet(domain?: string, authorization?: string): Observable<any> {
    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse2002>(`${this.basePath}/groups`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Create a new Group.
   * Create a new Group in the given Domain. By default, the new Group it not attached to any other object in the Domain; it is left to the user or application to appropriately attach the new Group, i.e., Link to. A link description may be supplied in the request body as structured JSON, which will immediately link the new Group. If supplying link info, the header &#x60;Content-Type: application/json&#x60; should also be supplied as a matter of course. Note that this link will be a hard link -- it refers directly to the object.
   * @param domain
   * @param authorization
   * @param inlineObject
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsPost(
    domain?: string,
    authorization?: string,
    inlineObject?: InlineObject,
  ): Observable<AxiosResponse<InlineResponse2011>>;
  public groupsPost(
    domain?: string,
    authorization?: string,
    inlineObject?: InlineObject,
  ): Observable<any> {
    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.post<InlineResponse2011>(
      `${this.basePath}/groups`,
      inlineObject,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Delete the specified Domain or Folder.
   * Delete the domain and all associated groups, datasets, attributes, etc. Note: if there are Domains which are children of this Domain (e.g., deleting &#x60;somedir&#x60; from &#x60;/home/user/project/somedir/data.h5&#x60;), those children directories will _not_ be deleted. (TODO: abandoned children is incorrect behavior?)
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public rootDelete(
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2001>>;
  public rootDelete(domain?: string, authorization?: string): Observable<any> {
    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.delete<InlineResponse2001>(`${this.basePath}/`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Get information about the requested domain.
   * If the domain is of class \&#39;folder\&#39;, &#x60;root&#x60; is absent from returned JSON object. If no domain query parameter is provided, returns: &#x60;{\&quot;domains\&quot;: [], \&quot;href\&quot;: []}&#x60;
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public rootGet(
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse200>>;
  public rootGet(domain?: string, authorization?: string): Observable<any> {
    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse200>(`${this.basePath}/`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Create a new Domain on the service.
   * Domains represent dataspaces analogous to hdf5 files. Folders are \&#39;placeholder\&#39; domains which lack a root Group. Their main use is to manage top-level directories (outside of user space) and to fill out a user\&#39;s directory paths if required. E.g., &#x60;/home/user/project/missingdir/data.h5&#x60; Note: Initially, the only object in a Domain is the root group. Use other &#x60;put&#x60; and &#x60;post&#x60; operations to create new objects in the domain. Note: Domains (and Folders) may only be created as direct children of existing Domains. e.g., &#x60;/home/user/project/missingdir&#x60; _must_ exist prior to the creation of Domain &#x60;/home/user/project/missingdir/data.h5&#x60;. Note: The operation will fail if the domain already exists (Error 409).
   * @param domain
   * @param folder If present and &#x60;1&#x60;, creates a Folder instead of a Domain.
   * @param authorization
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public rootPut(
    domain?: string,
    folder?: number,
    authorization?: string,
    body?: object,
  ): Observable<AxiosResponse<InlineResponse201>>;
  public rootPut(
    domain?: string,
    folder?: number,
    authorization?: string,
    body?: object,
  ): Observable<any> {
    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }
    if (folder !== undefined && folder !== null) {
      queryParameters['folder'] = <any>folder;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.put<InlineResponse201>(`${this.basePath}/`, body, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
}
