# TS-安装运行环境   
1.安装全局的ts：npm i typescript -g  
2.进入资源文件夹，运行tsc --init ,生成tsconfig.json的配置  
3.修改配置  "outDir": "./js"  
4.在终端-运行任务-选择tsc:watch,就可以生成js文件，并且每次更新ts文件都会自动编译成js文件  