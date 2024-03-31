import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Study Box</span>,
  footer: {
    text: `© 2021-${new Date().getFullYear()} NobodyLocaler(localer)`,
  },
  editLink: {
    text: ""
  },
  feedback: {
    content: ""
  },
  themeSwitch: {
    useOptions: {
      dark: "ダークモード",
      light: "ライトモード",
      system: "システム(自動)"
    }
  },
  search: {
    placeholder: "検索"
  },
  useNextSeoProps: () => ({
    titleTemplate: "%s - Study Box",
    defaultTitle: "名前のないページ - Study Box"
  }),
  chat: {
    link: 'https://discord.gg/eaVvcDzWPe'
  },
}

export default config
