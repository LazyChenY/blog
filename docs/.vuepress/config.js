module.exports = {
    title: "Welcome to Lazymr's blog",
    dest: './dist',
    base: '/blog/',
    description: 'Frontend JavaScript CSS',
    repo: 'git@github.com:LazyChenY/blog.git',
    port: 9995,
    themeConfig: {
        nav: [{
            text: 'Blog',
            link: '/'
        }, {
            text: 'Project',
            link: '/CSS/adaptive'
        }, {
            text: 'Resume',
            link: '/JavaScript/webpack/webpack-s1'
        }],
        sidebar: [{
            title: 'JavaScript',
            collapsable: true,
            children: [
                 '/JavaScript/reconstruction/reconstruction',
                 '/JavaScript/webpack/webpack-s1',
                 '/JavaScript/webpack/webpack-s2'
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