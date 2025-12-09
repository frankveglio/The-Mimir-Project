import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Mimir Project",
  base: '/The-Mimir-Project/',
  description: "Practical knowledge for building better systems and better work",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Project Management', link:'/project-management/the-basics.md' },
      { text: 'Process Management', link:'/process-management/the-basics.md' }
    ],


    sidebar: {
      '/project-management/':[
      {
        text: 'Project Management',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ] 
      }
    ],
      '/process-management/':[
            {
              text: 'Process Management',
              items: [
                { text: 'The basics', link: '/project-management/the-basics.md' },
                { text: 'Runtime API Examples', link: '/api-examples' }
              ] 
            }
          ],
},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
