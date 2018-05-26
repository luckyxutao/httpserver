// 0 : '',
//     1 : ' process',
//         2 : ' succeed',
//             3 : ' error'
//所有流水线任务
module.exports = [{
    pipeId: 1000,
    name: '流水线1000',
    type:'主线',
    status:'red',
    operator : '王五',
    okTime: '2018-05-20 14:35:25',
    failTime : '2018-05-28 14:00:25',
    continual:'20分钟',
    statusStage:'finished',
    barometer:'sunny',
    finished : true,//执行完毕,
    followList : [
        {
            "stageId": "20171116112930714",
            "flowName": "提交验证",
            "state": '0',
            "cteate_time": "2017-11-16",
            "sortNumber": "1",
            "flowModeId": "f1663936-cee2-402c-ac74-4b93b102a9db",
            "stageURL": "/trigger/init.do",
            "flow_formId": null,
            "goals_Maven": null,
            "steps": [
                {
                    "stepId": "11",
                    "stepName": "测试好",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "state": 0,
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time" : 5000
                },
                {
                    "stepId": "22",
                    "stepName": "测试中",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "state": 0,
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                }
            ]
        },
        {
            "stageId": "20171116113136918",
            "flowName": "预处理",
            "cteate_time": "2017-11-16",
            "sortNumber": "2",
            "state": '0',
            "flowModeId": "f1663936-cee2-402c-ac74-4b93b102a9db",
            "stageURL": "/steps/main.do",
            "flow_formId": "CQOH171124165449,GMPM171127133116,ERSH171127133137,GIQF171127133146,WLPI171127163110",
            "goals_Maven": "compile&#10;-gs ${MAVEN_HOME}/conf/settings.xml&#10;-Dmaven.repo.local=${WORKSPACE}/.m2",
            "steps": [
                {
                    "stepId": "33",
                    "state": 0,
                    "stepName": "预处理111",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                },
                {
                    "stepId": "44",
                    "state": 0,//0未执行,-1出错，1成功
                    "stepName": "不处理222",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                },
                {
                    "stepId": "55",
                    "stepName": "333",
                    "state": 0,
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                }
            ]
        },
        {
            "stageId": "20171116113206384",
            "flowName": "代码扫描",
            "cteate_time": "2017-11-16",
            "sortNumber": "3",
            "flowModeId": "f1663936-cee2-402c-ac74-4b93b102a9db",
            "stageURL": "/steps/main.do",
            "flow_formId": "CQOH171124165449,GMPM171127133116,ERSH171127133137,GIQF171127133146,WATI171127133156,WLPI171127163110",
            "goals_Maven": "test -gs ${MAVEN_HOME}/conf/settings.xml",
            "steps": [
                {
                    "stepName": "扫描中",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "state": 0,
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    // "shouldFail": true,
                    "clearFinish": false,
                    "time": 5000
                },
                {
                    "stepName": "扫描完",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "state": 0,
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 8000
                }
            ]
        }
    ]
},
{
    pipeId: 1001,
    name: '流水线1001',
    type:'主线',
    status:'rain',
    operator : '战三',
    okTime: '2018-05-20 14:35:25',
    failTime : '2018-05-28 14:00:25',
    continual:'20分钟',
    statusStage:'finished',
    barometer:'sunny',
    finished : true,//执行完毕
    followList : [
        {
            "stageId": "20171116112930714",
            "flowName": "提交验证",
            "state": '0',
            "cteate_time": "2017-11-16",
            "sortNumber": "1",
            "flowModeId": "f1663936-cee2-402c-ac74-4b93b102a9db",
            "stageURL": "/trigger/init.do",
            "flow_formId": null,
            "goals_Maven": null,
            "steps": [
                {
                    "stepId": "11",
                    "stepName": "测试好",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "state": '0',
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time" : 5000
                },
                {
                    "stepId": "22",
                    "stepName": "测试中",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "state": '0',
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                }
            ]
        },
        {
            "stageId": "20171116113136918",
            "flowName": "预处理",
            "cteate_time": "2017-11-16",
            "sortNumber": "2",
            "state": '0',
            "flowModeId": "f1663936-cee2-402c-ac74-4b93b102a9db",
            "stageURL": "/steps/main.do",
            "flow_formId": "CQOH171124165449,GMPM171127133116,ERSH171127133137,GIQF171127133146,WLPI171127163110",
            "goals_Maven": "compile&#10;-gs ${MAVEN_HOME}/conf/settings.xml&#10;-Dmaven.repo.local=${WORKSPACE}/.m2",
            "steps": [
                {
                    "stepId": "33",
                    "state": '0',
                    "stepName": "预处理111",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                },
                {
                    "stepId": "44",
                    "state": '0',
                    "stepName": "不处理222",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                },
                {
                    "stepId": "55",
                    "stepName": "333",
                    "state": '0',
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                }
            ]
        },
        {
            "stageId": "20171116113206384",
            "flowName": "代码扫描",
            "cteate_time": "2017-11-16",
            "sortNumber": "3",
            "flowModeId": "f1663936-cee2-402c-ac74-4b93b102a9db",
            "stageURL": "/steps/main.do",
            "flow_formId": "CQOH171124165449,GMPM171127133116,ERSH171127133137,GIQF171127133146,WATI171127133156,WLPI171127163110",
            "goals_Maven": "test -gs ${MAVEN_HOME}/conf/settings.xml",
            "steps": [
                {
                    "stepName": "扫描中",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                },
                {
                    "stepName": "扫描完",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 8000
                }
            ]
        }
    ]
},
{
    pipeId: 1002,
    name: '流水线1002',
    type:'主线',
    status:'grey',
    operator : '战三',
    okTime: '2018-05-20 14:35:25',
    failTime : '2018-05-28 14:00:25',
    continual:'20分钟',
    statusStage:'finished',
    barometer:'cloudy',
    finished : true,//执行完毕
    followList : [
        {
            "stageId": "20171116112930714",
            "flowName": "提交验证",
            "state": '0',
            "cteate_time": "2017-11-16",
            "sortNumber": "1",
            "flowModeId": "f1663936-cee2-402c-ac74-4b93b102a9db",
            "stageURL": "/trigger/init.do",
            "flow_formId": null,
            "goals_Maven": null,
            "steps": [
                {
                    "stepId": "11",
                    "stepName": "测试好",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "state": '0',
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time" : 5000
                },
                {
                    "stepId": "22",
                    "stepName": "测试中",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "state": '0',
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                }
            ]
        },
        {
            "stageId": "20171116113136918",
            "flowName": "预处理",
            "cteate_time": "2017-11-16",
            "sortNumber": "2",
            "state": '0',
            "flowModeId": "f1663936-cee2-402c-ac74-4b93b102a9db",
            "stageURL": "/steps/main.do",
            "flow_formId": "CQOH171124165449,GMPM171127133116,ERSH171127133137,GIQF171127133146,WLPI171127163110",
            "goals_Maven": "compile&#10;-gs ${MAVEN_HOME}/conf/settings.xml&#10;-Dmaven.repo.local=${WORKSPACE}/.m2",
            "steps": [
                {
                    "stepId": "33",
                    "state": '0',
                    "stepName": "预处理111",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                },
                {
                    "stepId": "44",
                    "state": '0',
                    "stepName": "不处理222",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                },
                {
                    "stepId": "55",
                    "stepName": "333",
                    "state": '0',
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                }
            ]
        },
        {
            "stageId": "20171116113206384",
            "flowName": "代码扫描",
            "cteate_time": "2017-11-16",
            "sortNumber": "3",
            "flowModeId": "f1663936-cee2-402c-ac74-4b93b102a9db",
            "stageURL": "/steps/main.do",
            "flow_formId": "CQOH171124165449,GMPM171127133116,ERSH171127133137,GIQF171127133146,WATI171127133156,WLPI171127163110",
            "goals_Maven": "test -gs ${MAVEN_HOME}/conf/settings.xml",
            "steps": [
                {
                    "stepName": "扫描中",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 5000
                },
                {
                    "stepName": "扫描完",
                    "svnName": "北京开发中心代码仓库（svn://10.1.0.7）",
                    "appName": "HR",
                    "projectName": "OA二期",
                    "sVNcredentials": "0be054f1-0ab8-45b0-a250-e02dab4bccb0",
                    "directory": "测试（Test）",
                    "category": "Selenium",
                    "stageType": "测试",
                    "bootFile": "c:\\testfile.py",
                    "bootCommand": "ls -l",
                    "resportArchive": true,
                    "clearFinish": false,
                    "time": 8000
                }
            ]
        }
    ]
}

];