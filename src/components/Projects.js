import ProjectCard from "./projectCard";
import "../App.css"; // Components have to be starting with capital letter silly
import "../components/ProjectCard.css";
import Shield from "../components/shield";

function Projects() {
  return (
    <div className="projects-section" id="projects-section">
      <h1 className="name">
        <h1 className="purple-headers-generic">Projects</h1>
      </h1>

      <div className="project-layout2">
        <ProjectCard
          title="Flappy Bird"
          description="This flappy bird clone was developed using VHDL and deployed on a Cyclone 5 FPGA.   This project involved the design of a finite state machine, as well as components for VGA output and synchronization. 
          The game features different levels, power-ups, and custom character selection."
        >
          <Shield
            alt="VHDL"
            src="https://img.shields.io/badge/VHDL-f0f0f2?style=for-the-badge"
          />

          <Shield
            alt="Cyclone V FPGA"
            src="https://img.shields.io/badge/Cyclone_V_FPGA-0067a5?style=for-the-badge"
          />

          <Shield
            alt="Quartus"
            src="https://img.shields.io/badge/Quartus_Prime-00285A?style=for-the-badge"
          />
        </ProjectCard>

        <ProjectCard
          title="Interpreter"
          description="An ASL sign language interpreter built in Python using PyTorch and PyQt5 for the UI.

          An MVC design pattern was used to streamline the development. 
          
          The interpreter features three different AI models which can translate ASL. Users can also upload their own photos or use the camera feed within the app."
        >
          <Shield
            alt="Python"
            src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
          />
          <Shield
            alt="PyTorch"
            src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"
          />
          <Shield
            alt="PyQt"
            src="https://img.shields.io/badge/PYQT5-10c93e?style=for-the-badge&logo=qt&logoColor=white"
          />

          <Shield
            alt="Numpy"
            src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white"
          />

          <Shield
            alt="Pandas"
            src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"
          />
        </ProjectCard>

        <ProjectCard
          title="WatchList"
          description="WatchList is an Android application used for showcasing watches. 

          The app was built using Java and Android Studio and features search functionality, filtering by categories, and a favorites page. "
        >
          <Shield
            alt="Android Studio"
            src="https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white"
          />

          <Shield
            alt="Java"
            src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"
          />

          <Shield
            alt="Figma"
            src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
          />
        </ProjectCard>

        <ProjectCard
          title="Energy Monitor"
          description="An embedded system project that monitors the real-time energy usage of an inductive appliance. 

          This project features a custom circuit board for signal sensing and conditioning.
          
          The circuit board was paired with an ATmega328PB microprocessor running firmware for signal processing.     "
        >
          <Shield
            alt="C"
            src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
          />

          <Shield
            alt="Altium Designer"
            src="https://img.shields.io/badge/Altium_Designer-A5915F?style=for-the-badge&logo=altiumdesigner&logoColor=white"
          />

          <Shield
            alt="LT Spice"
            src="https://img.shields.io/badge/LTspice-8E0A26?style=for-the-badge"
          />

          <Shield
            alt="Microchip studio"
            src="https://img.shields.io/badge/Microchip_Studio-EE3233?style=for-the-badge"
          />

          <Shield
            alt="Proteus"
            src="https://img.shields.io/badge/Proteus-1C79B3?style=for-the-badge"
          />
          <Shield
            alt="ATmega328PB"
            src="https://img.shields.io/badge/ATmega328PB-ed1b2d?style=for-the-badge"
          />
        </ProjectCard>
      </div>

      <div></div>

      {/* <div className="projects-layout">
        <div className="project">
          <p className="project-title">Flappy Bird</p>

          <hr className="rounded"></hr>

          <p className="project-content">
            This flappy bird clone was developed using VHDL and deployed on a
            Cyclone 5 FPGA. This project involved the design of a finite state
            machine, as well as components for VGA output and synchronization.
            <br />
            <br />
            The game features different levels, power-ups, and custom character
            selection.
          </p>
        </div>
        <div className="project">
          <p className="project-title">Interpreter</p>

          <hr className="rounded"></hr>

          <p className="project-content">
            An American sign language interpreter built in Python using PyTorch
            and PyQt5 for the UI.
            <br />
            <br />
            An MVC design pattern was used to streamline the development.
            <br />
            <br />
            The interpreter features three different AI models which can
            translate ASL. Users can also upload their own photos or use the
            camera feed within the app.
          </p>
        </div>
        <div className="project">
          <p className="project-title">WatchList</p>

          <hr className="rounded"></hr>

          <p className="project-content">
            WatchList is an Android application used for showcasing watches.
            <br />
            <br />
            The app was built using Java and Android Studio and features search
            functionality, filtering by categories, and a favorites page.
          </p>
        </div>
        <div className="project">
          <p className="project-title">Energy Monitor</p>

          <hr className="rounded"></hr>

          <p className="project-content">
            An embedded system project that monitors the real-time energy usage
            of an inductive appliance.
            <br />
            <br />
            This project features a custom circuit board for signal sensing and
            conditioning.
            <br />
            <br />
            The circuit board was paired with an ATmega328PB microprocessor
            running firmware for signal processing.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
