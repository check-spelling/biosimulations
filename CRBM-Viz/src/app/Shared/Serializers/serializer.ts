import { RemoteFile } from '../Models/remote-file';
import { License } from '../Enums/license';
import { AccessLevel } from '../Enums/access-level';
import { Person } from '../Models/person';
import { JournalReference } from '../Models/journal-reference';
import { TopLevelResource } from '../Models/top-level-resource';

export class Serializer<T extends TopLevelResource> {
  fromJson(json: any): T {
    const topLevelResource = new TopLevelResource();
    topLevelResource.id = json.id;
    // Simple, one to one corresponding feilds
    topLevelResource.id = json.id;
    topLevelResource.name = json.name;
    const image = json.image;
    if (image) {
      topLevelResource.image = new RemoteFile(
        (json.name as string) + 'Thumbnail',
        'png',
        image,
        null
      );
    }

    topLevelResource.description = json.description;
    topLevelResource.accessToken = json.accessToken;
    topLevelResource.tags = json.tags;
    topLevelResource.created = new Date(Date.parse(json.created));
    topLevelResource.updated = new Date(Date.parse(json.updated));
    topLevelResource.license = json.license as License;
    topLevelResource.identifiers = [];
    topLevelResource.OWNER = json.owner;
    // Boolean
    if (json.private) {
      topLevelResource.access = AccessLevel.private;
    } else {
      topLevelResource.access = AccessLevel.public;
    }

    if (json.authors) {
      topLevelResource.authors = [];
      for (const author of json.authors) {
        topLevelResource.authors.push(
          new Person(author.firstName, author.middleName, author.lastName)
        );
      }
    }
    topLevelResource.refs = [];
    if (json.references) {
      for (const refrence of json.references) {
        topLevelResource.refs.push(
          new JournalReference(
            refrence.authors,
            refrence.title,
            refrence.journal,
            refrence.volume,
            refrence.number,
            refrence.pages,
            refrence.year,
            refrence.doi
          )
        );
      }
    }
    const resource = topLevelResource as T;
    return resource;
  }
  toJson(resource: TopLevelResource): any {}
}
