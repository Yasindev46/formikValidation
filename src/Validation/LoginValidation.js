
export const validation=(values)=>{
 console.log("===>",values)
 let errors={}
 if(!values.email){
    errors.email="Please eneter email"
 }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email="Enter valid email"
 }

 if(!values.password){
    errors.password="Please eneter password"
 }else if(values.password.length<3 ){
    errors.password="Password must be min 3 characters"
 }else if(values.password.length>10){
    errors.password="Password max should be 10 characters"
 }
 return errors
}