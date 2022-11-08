import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addPost,deletePost, updatePost } from '../redux/postsSlice';
const Posts = () => {
   const [title,setTitle]=useState("");
   const [desc,setDesc]=useState("");

   const [updatedtitle,setupdatedTitle]=useState("");
   const [updatedesc,setupdatedDesc]=useState("");

   const [edit,setEdit]=useState(false);
   const [id,setId]=useState(null)
   const posts=useSelector(state=>state.posts.items);
   const dispatch=useDispatch();
    return <div>
              <div className='form'>
                 <input type="text"
                  value={title}
                  placeholder="enter your title"
                  onChange={function(e) {setTitle(e.target.value)}}
                  />
                 <input type="text"
                  value={desc}
                  placeholder="enter your descr"
                  onChange={(e)=>setDesc(e.target.value)}
                  />
                 <button onClick={()=>{
                          if(title!==""&& desc!==""){
                          dispatch(addPost({id:posts.length+1,title,desc}))
                          }else{
                           alert("veuillez remplir le title et desc")
                          } 
                          setTitle("");
                          setDesc("");
                 }}>add post</button>
              </div>
              <div className='posts'>
                {posts.length >0 ? posts.map(post=><div key={post.id} className='post'>
                    <h2>{post.title}</h2>
                    <p>{post.desc}</p>
                    <button onClick={()=>{
                     setEdit(true)
                     setId(post.id)
                  }
                  
                  }>edit</button>
                    <button onClick={()=>{
                         dispatch(deletePost(post.id))
                    }}>delete</button>
                    <br/>
                    {edit && id===post.id &&
                    <>
                     <input type="text"
                      placeholder='updated title'
                      onChange={(e)=>setupdatedTitle(e.target.value)}
                     />
                     <input type="text" 
                     placeholder='updated descr'
                     onChange={(e)=>setupdatedDesc(e.target.value)}
                     />
                     <button onClick={()=>{
                        if(updatedtitle!==""&&updatedesc!==""){
                           dispatch(updatePost({id:post.id,title:updatedtitle,desc:updatedesc}))
                        }else{
                           alert("veuillez remplir les champs")
                        } 
                         setEdit(false);
                    }}>update</button>
                    </>
                    }
                 </div>):'there is no posts'}
              </div>
           </div>;
}
export default Posts;
