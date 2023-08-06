import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.type';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: "CharGO",
      description: "CharGO is a mobile app that aims to revolutionize the way users find and reserve electric car chargers.With a user- friendly interface, CharGO simplifies the process of locating and booking charging stations, providing a seamless experience for electric vehicle owners.I developed the ability to construct and present innovative ideas effectively.",
      downloadFileLink: "",
      github: "https://github.com/mutenoic/CharGO",
      imageUrl: "https://camo.githubusercontent.com/b9b0ac02657b31fabe92e3240e8eb7278c7ade3879fdd7879eabdd16b345b42d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313039303434353336303835393732353836342f313131343439323333393932333230363135342f63686172676f5f6e6f5f62672e706e67",
      startToEnd: "06/2023"
    },
    {
      name: "CharGO",
      description: "CharGO is a mobile app that aims to revolutionize the way users find and reserve electric car chargers.With a user- friendly interface, CharGO simplifies the process of locating and booking charging stations, providing a seamless experience for electric vehicle owners.I developed the ability to construct and present innovative ideas effectively.",
      downloadFileLink: "",
      github: "https://github.com/mutenoic/CharGO",
      imageUrl: "https://camo.githubusercontent.com/b9b0ac02657b31fabe92e3240e8eb7278c7ade3879fdd7879eabdd16b345b42d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313039303434353336303835393732353836342f313131343439323333393932333230363135342f63686172676f5f6e6f5f62672e706e67",
      startToEnd: "06/2023"
    },
    {
      name: "CharGO",
      description: "CharGO is a mobile app that aims to revolutionize the way users find and reserve electric car chargers.With a user- friendly interface, CharGO simplifies the process of locating and booking charging stations, providing a seamless experience for electric vehicle owners.I developed the ability to construct and present innovative ideas effectively.",
      downloadFileLink: "",
      github: "https://github.com/mutenoic/CharGO",
      imageUrl: "https://camo.githubusercontent.com/b9b0ac02657b31fabe92e3240e8eb7278c7ade3879fdd7879eabdd16b345b42d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313039303434353336303835393732353836342f313131343439323333393932333230363135342f63686172676f5f6e6f5f62672e706e67",
      startToEnd: "06/2023"
    },
    {
      name: "CharGO",
      description: "CharGO is a mobile app that aims to revolutionize the way users find and reserve electric car chargers.With a user- friendly interface, CharGO simplifies the process of locating and booking charging stations, providing a seamless experience for electric vehicle owners.I developed the ability to construct and present innovative ideas effectively.",
      downloadFileLink: "",
      github: "https://github.com/mutenoic/CharGO",
      imageUrl: "https://camo.githubusercontent.com/b9b0ac02657b31fabe92e3240e8eb7278c7ade3879fdd7879eabdd16b345b42d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313039303434353336303835393732353836342f313131343439323333393932333230363135342f63686172676f5f6e6f5f62672e706e67",
      startToEnd: "06/2023"
    },
  ];
}
