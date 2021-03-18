import request from '@/utils/request'

export default{
    //1添加课程信息
    addCourseInfo(courseInfo){
        return request({
            url:`/eduservice/course/addCourseInfo`,
            method: 'post',
            data:courseInfo
          })
    },
    //2查询所有讲师
    getListTeacher(){
        return request({
            url:`/eduservice/teacher/findAll`,
            method: 'get'
          })
    },
    //根据课程id查询课程基本信息
    getCourseInfoId(id){
        return request({
            url:'/eduservice/course/getCourseInfo/'+id,
            method: 'get'
          })
    },
    //修改课程信息
    updateCourseInfo(courseInfo){
        return request({
            url:'/eduservice/course/updateCourseInfo',
            method: 'post',
            data:courseInfo
          })
    },
    //课程确认信息显示
    getPublishCourseInfo(id){
        return request({
            url:'/eduservice/course/getPublishCourseInfo/'+id,
            method: 'get'
          })
    },
     //课程最终发布
     PublishCourse(id){
        return request({
            url:'/eduservice/course/publicCourse/'+id,
            method: 'post'
          })
    },
    //TODO 课程列表
     //课程最终发布
     getListCourse(){
        return request({
            url:'/eduservice/course',
            method: 'get'
          })
    },
    //删除课程
     deleteListCourse(courseId){
      return request({
          url:'/eduservice/course/'+courseId,
          method: 'delete'
        })
  },
}
