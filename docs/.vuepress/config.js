module.exports = {
    title: "Lazymr's blog",
    dest: './dist',
    base: '/blog/',
    description: 'Frontend JavaScript CSS',
    repo: 'git@github.com:LazyChenY/blog.git',
    port: 9995,
    head: ['link', {rel: 'icon', href: '/avtor.jpeg'}],
    themeConfig: {
        nav: [{
            text: 'Blog',
            link: '/'
        }, {
            text: 'Project',
            link: '/CSS/adaptive'
        }, {
            text: 'Resume',
            link: '/JavaScript/reconstruction/reconstruction'
        }],
        sidebar: [{
            title: 'JavaScript',
            collapsable: true,
            children: [
                 '/JavaScript/reconstruction/reconstruction',
                 '/JavaScript/webpack/webpack-s1',
                 '/JavaScript/webpack/webpack-s2',
                 '/JavaScript/clipboard',
                 '/JavaScript/screen/screen',
                 '/JavaScript/browser'
            ]
        }, {
            title: 'CSS',
            collapsable: true,
            children: ['/CSS/adaptive']
        }]
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@img': 'images'
            }
        }
    }
}