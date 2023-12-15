import React from 'react'
import {useForm} from 'react-hook-form'


function Registration() {
  const {register,handleSubmit,formState:{errors}}=useForm()

  const onSubmit=(data)=>{
    confirm("Registration Succesful")
    console.log(data)

  }

  return (
    <div className='body'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='First Name'{...register('FirstName',{required:'First Name is required'})}/>
        <p>{errors.FirstName?.message}</p>

        <input type="text" placeholder='Last Name'{...register('LastName',{required:'Last Name is required'})}/>
        <p>{errors.LastName?.message}</p>
        
        <input type="text" placeholder='Email Id'{...register('EmailId',{required:'EmailId is required' , pattern:{
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message:'Enter a valid EmailId'
        }})}/>
        <p>{errors.EmailId?.message}</p>

        <input type="text" placeholder='Passward'{...register('Passward',{required:"Passward is required", minLength:{
          value: 4,
          message:'Passward must be more than 4'},
          maxLength:{
            value: 20,
            message:"Passward must be less than 20"}
        })}/>
        <p>{errors.Passward?.message}</p>

        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Registration