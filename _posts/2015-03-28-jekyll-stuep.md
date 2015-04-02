---
layout: post
title: "win7下jekyll的安装"
date: 2015-03-28 09:29:01 -0700
comments: true
catalog : true
desc: jekyll是一个简单的免费的Blog生成工具，是一个生成静态网页的工具，不需要数据库支持，可以免费部署在Github上，而且可以绑定自己的域名。这里介绍如何在win7下安装jekyll环境，在本地执行网页程序；
tags: [资源, jekyll, github]
category: 资源
---

# 简介
## 什么是 jekyll
jekyll是一个简单的免费的Blog生成工具，类似WordPress。但是和WordPress又有很大的不同，原因是jekyll只是一个生成静态网页的工具，不需要数据库支持。但是可以配合第三方服务,例如评论系统可以用Disqus和多说。最关键的是jekyll可以免费部署在Github上，而且可以绑定自己的域名。

# 安装
大概说明：在windows下运行jekyll需要安装运行环境，要下载 `ruby` 和 `DevKit`
## 第一步：下载 Ruby 和 DevKit 
1、进入官网先下载 [http://rubyinstaller.org/downloads/][1] 

2、下载ruby
>* 注：下载`ruby`不能盲目的下载，`ruby`需要对应的`devkit`才能正确的搭建jekyll环境，配合下面 `devkit` 下载图例用红线框选的文字，你下载了什么版本的ruby版本，就要下载对应的`devit`，选择你要下载`ruby`版本

![图一][2]

3、下载devkit

![图二][3]


> * 安装注意事项
> * 1、先安装`ruby`再安装`devkit`
> * 2、两者的安装目录不得出现空格，例如`Program Files`这中目录是不行的，

## 第二步：安装 Ruby
1、安装ruby的时候勾选"Add Ruby executables to your PATH"，自动添加到path，不然就得你自己手动去添加
![此处输入图片的描述][4]
>* 如果你手动添加配置安装环境的话。先环境变量中新增环境变量名 RUBY_HOME ，变量值为 你的Ruby安装目录（比如D:\Ruby21-x64）,然后在path中加入 "%RUBY_HOME%\bin"）；

2、安装完成之后，打开一个命令提示行并输入 `ruby -v` 命令来检测 Ruby 是否成功安装，输出如下示例表示安装成功
> ruby 2.0.0p643 (2015-02-25) [i386-mingw32]

##第二步：安装DevKit
1、运行安装包至某文件夹，这里为了方便操作，解压到Ruby同级目录：如：D:\Devkit

2、初始化创建config.yml文件，打开命令行(dos)，输入以下命令
> cd “D:\DevKit”
> ruby dk.rb init
> notepad config.yml

3、在打开的记事本里面，末尾新加一行" - D:\Ruby21-x64 " ，然后保存，退出
4、在命令行窗口，审查(非必须)，然后安装

##第三步：安装 Jekyll
1、确保 gem 已经正确安装，输入命令`gem -v`
输出示例：
> 2.0.14

2、安装jekyll gem ，输入命令`gem install jekyll`

<span style="color:red;">注</span>：这里安装jekyll gem的时候有因为他访问的镜像是在国外的 `https://rubygems.org/`网站上，所以如果你在没有开代理的情况下，国内有可能访问不到，导致不能安装或者报错；

***解决方法***：依次运行以下命令
```java
    gem sources --remove https://rubygems.org/
    gem sources -a https://ruby.taobao.org/
    gem sources -l
    输出示例：
    *** CURRENT SOURCES ***
    https://ruby.taobao.org
```

确认只有`https://ruby.taobao.org`一个，如果还有其他的镜像来源，同上用`gem sources --remove 镜像网址`删除，保证只剩下`https://ruby.taobao.org`，万无一失之后再到命令行执行以下命令

    gem install jekyll

##第四步：安装 Pygments
Jekyll 里默认的语法高亮插件是 Pygments。 它需要安装 Python 并在网站的配置文件_config.yml 里将`highlighter`的值设置为`pygments`。更新信息[点此关注][5]
###安装 Python
1、前往 [http://www.python.org/download/][6]

2、下载合适的 Python windows 安装包，如 Python 2.7.6 Windows Installer。 请注意，Python 2 可能会更合适，因为暂时 Python 3 可能不会正常工作。

3、安装

4、添加安装路径 (如： C:\Python27) 至 PATH。

5、检验 Python 安装是否成功，输入命令
> python –V

注：这里的`python -V`的`v`是大写的
输出示例：
> Python 2.7.6

###安装 ‘Easy Install’
1、浏览 [https://pypi.python.org/pypi/setuptools#installation-instructions][7] 查看详细的安装指南。

2、对于 win7 的机器，下载 [ez_setup.py][8] 并保存，例如，至C:\。 然后从命令行使用 Python 运行此文件：
> python “C:\ez_setup.py”

3、添加 ‘Python Scripts’ 路径 (如： C:\Python27\Scripts) 至 PATH
###安装 Pygments
1、确保 `easy_install` 已经正确安装
> easy_install --version

输出：
> setuptools 14.3.1

2、使用`easy_install`来安装 Pygments
> easy_install Pygments

##最后一步，启动 Jekyll
> jekyll new myblog
cd myblog
jekyll serve

服务程序启动成功之后，可以用[localhost:4000][9]浏览网页


  [1]: http://rubyinstaller.org/downloads/
  [2]: {{ site.picurl }}/2015-03-28-jekyll-steup-1.png
  [3]: {{ site.picurl }}/2015-03-28-jekyll-steup-2.png
  [4]: {{ site.picurl }}/2015-03-28-jekyll-steup-3.png
  [5]: http://jekyllrb.com/docs/templates/#code_snippet_highlighting
  [6]: http://www.python.org/download/
  [7]: https://pypi.python.org/pypi/setuptools#installation-instructions
  [8]: https://bitbucket.org/pypa/setuptools/raw/bootstrap/ez_setup.py
  [9]: http://localhost:4000
