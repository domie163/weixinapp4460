const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm2khae/",
            name: "ssm2khae",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm2khae/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的电影交流平台"
        } 
    }
}
export default base
