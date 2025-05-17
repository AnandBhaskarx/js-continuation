const course={
    price:999,
    courseName:"learn js",
    courseInstructor:"Anand"
}

// console.log(course.courseInstructor)

//if we want to acces courseInstructor mutiple times 
const {courseInstructor} =  course
//now we can acces without . 
// console.log(courseInstructor)
//we can also provide a name
const{courseInstructor:c} = course
// console.log(c)

//++++++++++++++++++ APIs +++++++++++

//json
// {
//     "name":"Anand",
//     "price":"free",
//     "let":true
// }


