---
layout: post
title: "jekyll安装"
date: 2015-03-05 12:27:01 -0700
comments: true
tags: [test, sample,基础]
---

#jekyll 运行环境教程
##简介
飞

##第一步：安装 Ruby

因为jekyll是基于Ruby写的，所以要先安装Ruby环境

1、在官网 <a href="http://rubyinstaller.org/downloads/" target="_blank">http://rubyinstaller.org/downloads/</a> 下载Ruby

2、安装下载的安装包
> 注意：两者的安装目录，不得出现空格，比如Program Files这种目录是不能有的，建议是装在盘的根目录
> 
> 勾选"Add Ruby executables to your PATH"，自动添加到path，不然就得你自己手动去添加
>  
> 如果你手动添加配置安装环境的话。先环境变量中新增环境变量名 RUBY_HOME ，变量值为 你的Ruby安装目录（我的是D:\Ruby21-x64）,然后在path中加入 "%RUBY_HOME%\bin"）；

![](http://7u2sny.com1.z0.glb.clouddn.com/jekyll_steup_1.png)

3、安装完成之后，打开一个命令提示行并输入以下命令来检测 Ruby 是否成功安装，输出示例

![](http://7u2sny.com1.z0.glb.clouddn.com/jekyll_steup_2.png)

##第二步：安装DevKit

DevKit 是一个在 Windows 上帮助简化安装及使用 Ruby C/C++ 扩展如 RDiscount 和 RedCloth 的工具箱。 详细的安装指南可以在程序的<a href="https://github.com/oneclick/rubyinstaller/wiki/Development-Kit#installation-instructions">wiki 页面 </a> 阅读


 1、在官网  <a href="http://rubyinstaller.org/downloads/" target="_blank">http://rubyinstaller.org/downloads/</a> 下载同系统及 Ruby 版本相对应的 DevKit 安装包
对应Devkit版本选择列举

> Ruby 1.8.6 to 1.9.3: DevKit tdm-32-4.5.2
> 
> Ruby 2.0.0: DevKit mingw64-32-4.7.2
> 
> Ruby 2.0.0 x64: DevKit mingw64-64-4.7.2

2、运行安装包至某文件夹，这里为了方便操作，解压到Ruby同级目录：如：D:\Devkit

3、初始化创建config.yml文件，打开命令行(dos)，输入以下命令

    cd “D:\DevKit”
    
    ruby dk.rb init
    
    notepad config.yml


注：config.yml文件在D:\Devkit根目录下

4、在打开的记事本里面，末尾新加一行" - D:\Ruby21-x64 " ，保存，退出

![](http://7u2sny.com1.z0.glb.clouddn.com/jekyll_steup_3.png)

5、在命令行窗口，审查(非必须)，并安装

    ruby dk.rb review

    ruby dk.rb install