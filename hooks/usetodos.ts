import { async } from "@firebase/util"
import { useState } from "react"
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { db, storage } from '../config/firebase'

export default function usetodos()
{
    const[description,setdescription]=useState('   ')
    const[todos,settodos]=useState<any>([])
    const [attachmentImage, setAttachmentImage] = useState<any>({})
    const[url,geturll]=useState<any>()

    const submitHandler=async()=>
    {
        try {
            


const storageRef = ref(storage, `/todos/${description}${attachmentImage}`);
//const storageRef = ref(storage, 'some-child');

// 'file' comes from the Blob or File API
 const result=uploadBytes(storageRef, attachmentImage)
//  .then((snapshot) => {
//   console.log('Uploaded a blob or file!');
// })
    // const today=await getDownloadURL(result.ref)
    // geturll(today)
    


  
     const newdoc=
     {
       description,
       createdAt:new Date(),


     }
       const docRef=await addDoc(collection(db,"my"),newdoc)
    //  settodos([...todos,{...newdoc,id:docRef.id}])

    settodos([...todos,{...newdoc,id:docRef.id}])
        } catch (error) {
            console.error(error)
        }
      

    }

  

    const changemyfile=async(e:any)=>
    {
        setAttachmentImage(e.target.files[0])
    }
    const gettodos=async()=>
    {
        const querysnapshot=await getDocs(collection(db,"my"))
        let todolist:any[]=[]
        querysnapshot.forEach((doc)=>
        {
            todolist.push(
                {
                   // geturll: doc.data()?.get,
                    description: doc.data()?.description,
                    id: doc.id,
                    createdAt: doc.data()?.createdAt,
                    attachmentImage:doc.data()?.attachmentImage
                }
            )
        }

        )
        settodos(todolist)

       
    }
    return(
   {
        description,
        setdescription,
       // onFileChangeHandle ,
 todos,
 settodos,
 submitHandler,
 gettodos,
 changemyfile,
 attachmentImage,


   }
    )
}

//welcome chat gpt
