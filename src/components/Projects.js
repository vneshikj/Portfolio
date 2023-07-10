import "../App.css";

function Projects() {
  return (
    <div className="projects-section" id="projects-section">
      <a className="name">
        <h1 className="purple-headers-generic">Projects</h1>
      </a>
      <div className="projects-layout">
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
      </div>
    </div>
  );
}

export default Projects;
