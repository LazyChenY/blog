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
        sidebarDepth: 0,
        sidebar: [{
            title: 'JavaScript',
            collapsable: true,
            children: [
                 '/JavaScript/reconstruction/reconstruction',
                 '/JavaScript/clipboard',
                 '/JavaScript/screen/screen',
                 '/JavaScript/browser',
                 '/JavaScript/webpack/webpack-s1',
                 '/JavaScript/webpack/webpack-s2',
                 // '/JavaScript/webpack/webpack-s3',
                 // '/JavaScript/webpack/webpack-s4'
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