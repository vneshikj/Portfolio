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
          title="Pathfinding Robot"
          description="A robot capable of navigate it's way through a light-projected maze. The project features a custom PCB for signal sensing and conditioning with photodiodes.
          
          The firmware dynamically solves the shortest path in the maze while the control system ensures seamless straight line navigation and turning through the motors. 
          "
          link="https://github.com/JamesNZL/compsys301-pathfinding-robot"
        >
          <Shield
            alt="PSOC 5LP"
            src="https://img.shields.io/badge/PSOC%205LP-3670A0?style=for-the-badge"
          />

          <Shield
            alt="PSOC Creator"
            src="https://img.shields.io/badge/PSOC%20Creator-AA5042?style=for-the-badge"
          />

          <Shield
            alt="LT Spice"
            src="https://img.shields.io/badge/LTspice-8E0A26?style=for-the-badge"
          />

          <Shield
            alt="Altium Designer"
            src="https://img.shields.io/badge/Altium_Designer-A5915F?style=for-the-badge&logo=altiumdesigner&logoColor=white"
          />

          <Shield
            alt="C"
            src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
          />
        </ProjectCard>

        <ProjectCard
          title="Inductive Energy Monitor"
          description="An embedded system project that monitors the real-time energy usage of an inductive appliance. 

          This project features a custom circuit board for signal sensing and conditioning.
          
          The circuit board was paired with an ATmega328PB microprocessor running firmware for signal processing.     "
          link="https://github.com/vneshikj/Energy-Monitor"
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

        <ProjectCard
          title="DDD Mode Pacemaker"
          description="A pacemaker deployed on a NIOS II processor for correcting bradycardia in the heart. 
          
          The project features two separate implementation of real time systems.
          
          One developed in C and another using SSCharts, a statechart language for specifying safety-critical reactive systems."
          link="https://github.com/vneshikj/Pacemaker"
        >
          <Shield
            alt="C"
            src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
          />

          <Shield
            alt="SCCharts"
            src="https://img.shields.io/badge/SCCharts-6fc92a?style=for-the-badge"
          />

          <Shield
            alt="Quartus"
            src="https://img.shields.io/badge/Quartus_Prime-00285A?style=for-the-badge"
          />

          <Shield
            alt="NIOS II"
            src="https://img.shields.io/badge/NIOS_II-28d17a?style=for-the-badge"
          />
        </ProjectCard>

        <ProjectCard
          title=" ASL Interpreter"
          description="An American sign language interpreter built in Python using PyTorch and PyQt5 for the UI.

          An MVC design pattern was used to streamline development. 
          
          The interpreter features three different AI models which can translate ASL. Users can either upload their own photos or use the camera feed within the app."
          link="https://github.com/vneshikj/ASL-Interpreter"
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
          title="Flappy Bird"
          description="An upgraded flappy bird clone developed using VHDL and deployed on a Cyclone 5 FPGA.  This project involved design of components for an FSM controlling the game state and inputs, VGA output and synchronization, collision detection, and overall game logic. 
          The improved game features different levels, power-ups, and custom character selection."
          link="https://github.com/vneshikj/Flappy-Bird"
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
          title="WatchList"
          description="WatchList is an Android application used for showcasing watches. 

          The app was built using Java and Android Studio and features search functionality, filtering by various categories, and a favorites page. The UI was designed in accordance with the Google Material Design guidelines and wireframed in Figma.  "
          link="https://github.com/vneshikj/Watch-App"
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
      </div>
    </div>
  );
}

export default Projects;
