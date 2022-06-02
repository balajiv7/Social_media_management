import { Injectable } from '@angular/core';
import { ToastrService} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ToastarService {

  constructor(private notifyService:ToastrService,private client : HttpClientModule) {
    
   }

  // showToasterSuccess(){
  //     this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
  //   }
    
  //   showToasterError(){
  //     this.notifyService.showError("Something is wrong", "tutsmake.com")
  //   }
    
  //   showToasterInfo(){
  //     this.notifyService.showInfo("This is info", "tutsmake.com")
  //   }
    
  //   showToasterWarning(){
  //     this.notifyService.showWarning("This is warning", "tutsmake.com")
  //   }
  showSuccess(message: string | undefined, title: string | undefined){
      this.notifyService.success(message, title)
     }
     
     showError(message: string | undefined, title: string | undefined){
      this.notifyService.error(message, title)
     }
     
     showInfo(message: string | undefined, title: string | undefined){
      this.notifyService.info(message, title)
     }
     
     showWarning(message: string | undefined, title: string | undefined) {
      this.notifyService.warning(message, title)
     }
    
    
    
}
