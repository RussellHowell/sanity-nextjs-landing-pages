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
                  buildHookId: '5fc7daa1404c1ac71caf37e6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-has4vv8z',
                  apiId: '02687254-9696-405c-92cd-40c42f810365'
                },
                {
                  buildHookId: '5fc7daa1639961e83ee5c772',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c67pasqr',
                  apiId: 'c70998a4-e169-4533-86c5-8892ef7952da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RussellHowell/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c67pasqr.netlify.app', category: 'apps'}
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
