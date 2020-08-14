import React,{Component} from "react";

class ProfileHeader extends Component{
    render(){
        return(
            <div>
                <div className="container mx-auto">
                    <div style={{ backgroundImage : "url('cv.jpg')" }} className="h-64 bg-cover flex items-end justify-center relative">
                        
                        <div className="">
                            <img src="my.jpg" className="profile-img" />
                            <a href="" className="edit-profile-photo">
                                <i class="fa fa-camera"></i>
                            </a>
                        </div>
                        <a href="#" className="edit-cover-photo">
                            <i className="fas fa-camera" ></i>Edit Cover Photo
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileHeader;