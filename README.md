# Sample project of monorepo

## TODOs：
1. Investigate docker build failure on Windows
2. Setup lint rule to prevent some packages be imported by given packages, for example, `partners` should not import `client` or `server`

## thoughts
1. 不需要多个package独立build的能力，因为目前所有的package都是分别为client和server打包的，所以不需要这个能力
2. 暂时不需要引入nx帮助我们管理monorepo，目前的项目结构比较简单，引入nx反而会增加复杂度，目前手动管理可以增加对项目结构和build过程的理解
