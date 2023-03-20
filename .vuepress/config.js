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
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}]
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
    },
    themeConfig: {
        // repo: "realpdai/tech-arch-doc",
        docsRepo: "realpdai/tech-arch-doc",
        // logo: "/logo.png",
        editLinks: true,
        sidebarDepth:0,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                ],
                sidebar: {
                }
            }
        }
    }
};