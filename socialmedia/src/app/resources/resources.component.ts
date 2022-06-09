import { Component} from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent  {
  john() {
    window.location.href=' https://in.linkedin.com/in/john-k-68a759186?trk=public_profile_samename-profile_profile-result-card_result-card_full-click&original_referer=https%3A%2F%2Fwww.google.com%2F'
   }
   joseph() {
    window.location.href='https://www.linkedin.com/in/johnfederico'
   }
   rithin() {
    window.location.href=' https://in.linkedin.com/in/rithin-kumar-26a12460?original_referer=https%3A%2F%2Fwww.google.com%2F'
   }

}
