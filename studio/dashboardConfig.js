export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1a8a730b4b84642be49067',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f3xwyppn',
                  apiId: '048494d1-2ee7-4e71-b5d7-68a693005b67'
                },
                {
                  buildHookId: '5e1a8a7487a3d9c6a3a30157',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e3wkeb52',
                  apiId: 'cc88043e-b9c4-4f9d-b5f0-e88cc9fee610'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dust-gr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e3wkeb52.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
