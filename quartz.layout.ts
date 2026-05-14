import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 极简 Notion 风格布局：只有内容、目录和反向链接
export const defaultPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  afterBody: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  left: [],
  right: [],
}

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/caizoom/caizoom.github.io",
    },
  }),
}
