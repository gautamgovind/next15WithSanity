import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('author').title('Author'),
      S.documentTypeListItem('myidea').title('Myideas'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['myidea', 'author'].includes(item.getId()!),
      ),
    ])
