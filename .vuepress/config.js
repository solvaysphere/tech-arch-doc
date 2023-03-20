module.exports = {
    port: "3000",
    dest: "docs",
    ga: "UA-xxxxx-1",
    base: "/",
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Java 全栈知识体系",            
            description: "包含: Java 基础, Java 部分源码, JVM, Spring, Spring Boot, Spring Cloud, 数据库原理, MySQL, ElasticSearch, MongoDB, Docker, k8s, CI&CD, Linux, DevOps, 分布式, 中间件, 开发工具, Git, IDE, 源码阅读，读书笔记, 开源项目..."
        }
    },
    head: [
        // ico
        ["link", {rel: "icon", href: `/favicon.ico`}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "solvay"}],
        ["meta", {name: "keywords", content: "Java 全栈知识体系, java体系, java知识体系, java框架,java详解,java学习路线,java spring, java面试, 知识体系, java技术体系, java编程, java编程指南,java开发体系, java开发,java教程,java,java数据结构, 算法, 开发基础"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        // baidu statstic
        ["script", {src: "https://hm.baidu.com/hm.js?xxxxxxxxx"}]
    ],
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/medium-zoom': {
            selector: 'img.zoom-custom-imgs',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github',
        
            // 其他的 Vssue 配置
            owner: 'solvaysphere',
            repo: 'tech-arch-doc',
            clientId: '1b728ced9beb9f81f15b',
            clientSecret: 'ecbf16ab744fb7b0d0915eceb810d8b9d80dabfd',
        },
        'copyright': {
            // disable the plugin by default
            // you can activate the plugin in frontmatter
            // disabled: true,
            // texts will be unselectable
            // noSelect: true,
            noCopy: false, // 允许复制内容
            minLength: 100, // 如果长度超过 100 个字符
            authorName: "Lanternfish",
            // clipboardComponent: "请注明文章出处, [Java 全栈知识体系]()"
        },
        'sitemap': {
            hostname: 'https://pake.web.id'
        },
        'vuepress-plugin-baidu-autopush':{},
        'vuepress-plugin-code-copy': {},
        '@vuepress/active-header-links': {},
        'vuepress-plugin-auto-sidebar': {},
        '@vuepress/search': {
            searchMaxSuggestions: 10
        },
        'vuepress-plugin-toolbar': {
            'pageNav': {
                name: '导航'
            },
            opts: [
            {
                icon: '',
                name: '二维码',
                link: '',
                popover: {
                    title: '使用 Base64 来作为图片源',
                    type: 'image',
                    imageUrl: 'data:image/png;base64,这里是 Base64图片编码代码作为图片源',
                    more: {
                        newWindow: false,
                        link: '/vuepress-plugin/vuepress-plugin-toolbar/',
                        name: '了解更多'
                    }
                }
            }, {
                icon: '',
                name: '纯展示'
            },
            {
                icon: '',
                name: '文本',
                popover: {
                    type: 'text',
                    title: '纯文本说明',
                    text: '这是一个纯文本的内容展示，就是一段话'
                }
            },
            {
                icon: '',
                name: 'html 支持',
                popover: {
                    type: 'html',
                    title: '使用简单的 HTML 显示',
                    html: '<h1>使用简单的 HTML</h1> 进行展示 <a href="http://www.baidu.com"> 链接到百度 </a>'
                }
            }, {
                icon: '',
                name: '网络图片',
                link: '',
                popover: {
                    title: '使用 网络图片 来作为图片源',
                    type: 'image',
                    imageUrl: 'http://img.bjtata.com/img/5c5de63193ea53a4.jpg',
                }
            }
            ]
        },
    },
    themeConfig: {
        // repo: "solvaysphere/tech-arch-doc",
        docsRepo: "solvaysphere/tech-arch-doc",
        // logo: "/logo.png",
        editLinks: false,
        sidebarDepth:0,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    { 
                        text: 'Home', link: '/' 
                    },
                    { 
                        text: 'Guide', link: '/guide/' 
                    },
                    { 
                        text: 'External', link: 'https://google.com' 
                    },
                    {
                        text: '关于', link: '/md/about/me/about-me.md'
                    }
                ],
                sidebar: {
                    "/md/about/": genSidebar4About()
                }
            }
        },
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }
};

// About page
function genSidebar4About(){
    return [
        {
            title: "关于",
            collapsable: false,
            sidebarDepth: 0, 
            children: [
                "me/about-me.md",
                "me/about-content.md",
                "me/about-content-style.md",
                "me/about-arch.md",
                "me/about-motivation.md"
            ]
        },
        {
            title: "关于 - 本文档的搭建",
            collapsable: false,
            sidebarDepth: 0, 
            children: [
                "blog/blog-build-vuepress.md", 
                "blog/blog-build-ci.md",
                "blog/blog-build-cd.md",
                "blog/blog-build-ssl.md"
            ]
        }
    ];
}