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
            link: '/article/JavaScript/clipboard'
        }, {
            text: 'Project',
            link: '/project/flex/flex'
        }, {
            text: 'Resume',
            link: '/aboutMe'
        }],
        sidebarDepth: 3,
        sidebar: {
            '/article/': [
                'JavaScript/Q&A-daily',
                'JavaScript/clipboard',
                'JavaScript/screen/screen',
                'JavaScript/extension',
                'JavaScript/browser',
                'JavaScript/webpack/webpack-s1',
                'JavaScript/webpack/webpack-s2',
                'JavaScript/reconstruction/reconstruction',
                // 'JavaScript/promise',
                // 'JavaScript/spa-mpa',
                // 'JavaScript/ui-components-lib',
                // 'JavaScript/engineering',
                // 'CSS/adaptive',
                'JavaScript/api-rules',
                'JavaScript/token',
                'JavaScript/iview-render',
                'JavaScript/dev-build',
                'JavaScript/ssh-key',
                'JavaScript/ssh-login',
                'JavaScript/js-tricks',
                'JavaScript/pdf-review/pdf',
                'JavaScript/event-bus',
                'JavaScript/vue-cli3',
                'JavaScript/yarn-vs-npm',
                'JavaScript/micro-fe',
                'Other/vue-cli3-optimise',
                'Typescript/first-explore'
            ],
            '/project/': [
                'flex/flex',
                'flappyBird/flappyBird'
            ]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@img': 'images'
            }
        }
    }
}