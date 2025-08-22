import { apiVersion, previewSecretId } from 'lib/sanity.api'
import PagePreviewPane from 'plugins/previewPane/PagePreviewPane'
import { EditIcon, EyeOpenIcon } from '@sanity/icons'
import { StructureBuilder } from 'sanity/desk'

export const standardViews = (S: StructureBuilder) => {
  return [
    S.view.form().icon(EditIcon),
    S.view
      .component(({ document }) => (
        <PagePreviewPane
          slug={document.displayed.slug?.current}
          locale={document.displayed.__i18n_lang}
          apiVersion={apiVersion}
          previewSecretId={previewSecretId}
          type={document.displayed._type}
        />
      ))
      .icon(EyeOpenIcon)
      .title('Preview'),
  ]
}
