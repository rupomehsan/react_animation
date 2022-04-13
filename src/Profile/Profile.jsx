import React from 'react'
import Common   from '../Common/Common'
function Profile() {
  return (
    <>
    <Common 
        heading={'Profile'}
        btn={'Contact'}
        visit={'/Contact'}
        image={"https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg"}
        desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere enim ea eligendi provident accusantium inventore necessitatibus ab corrupti ad dignissimos.'}
      />
    
    </>
  )
}

export default Profile
