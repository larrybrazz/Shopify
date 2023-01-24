 
import Swal from "sweetalert2";
import {toast} from 'react-toastify';

const swalCall= (swalTitle, isRegistered,setIsSignedUp)=>{

    Swal.fire({
        title:swalTitle,
        showConfirmButton:true,
        confirmButtonText:"OK",
        showCancelButton: isRegistered? true : false,
        cancelButtonText: "Cancel",
        icon: isRegistered? "info":"success" 
    }).then(result=>{
        if (!isRegistered)
        {
            setIsSignedUp(true)
        }else{         
            if (result.isDismissed)
                setIsSignedUp(true);                
        }
    })
}

export const signUpUser = (userInfo, setIsSignedUp) => {

    if (!localStorage.getItem('users')) {
            
        localStorage.setItem('users',JSON.stringify([]))
    }

    const usersArray= JSON.parse(localStorage.getItem('users'))

    const isRegistered= usersArray.find(user=> user.email === userInfo.email)

    if (!isRegistered) {
       
        localStorage.setItem('users',JSON.stringify([...usersArray,userInfo]));
        
        sessionStorage.setItem('userLogin','yes');

        swalCall('You have been registered', isRegistered, setIsSignedUp);

    } else swalCall('The email had been selected.Try another?.', isRegistered, setIsSignedUp);
}

export const signInUser = (userDetails,setPersonLoggedIn,setUserDetails)=>{

    const usersArray= JSON.parse(localStorage.getItem('users'))

    const person = usersArray.find(user=>{
        return  user.email === userDetails.email && user.password === userDetails.password
    })

    if(person)
    {
        setPersonLoggedIn(person);
    }else{
        toast.info("Ensure your name and password are correctly entered")
        setUserDetails({
            email:'',
            password:''
          })
    }
        
}