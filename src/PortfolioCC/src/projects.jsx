/* 
  File: projects.jsx
  Student Name: Xiaowei Xue
  Student ID: 300579496
  Date: 2025-02-03
*/


export default function Projects() {
    return (
        <>
            <div class="projects-page">

                <div class="projects-container">
                    {/* list of projects */}
                    <div class="projects-card">
                        <img src="/img/printing.png" alt="Printing System" class="projects-icon"></img>
                        <h2>Printing System</h2>
                        <p>A graduation design project, i was the developer of this project, by using VB(visual basic), to provide an automatic printing function on the certificates from the data input by Excel. </p>
                    </div>

                    <div class="projects-card">
                        <img src="/img/brotato.png" alt="Roguelike Survivor" class="projects-icon"></img>
                        <h2>Roguelike Survivor Game</h2>
                        <p>A project which is being developed by myself, a game for players who could build different gameplay style to survive.  </p>
                    </div>

                    <div class="projects-card">
                        <img src="/img/slayidol.png" alt="SlayIdol" class="projects-icon"></img>
                        <h2>SlayIdol Game</h2>
                        <p>Another game project from the current course, team work, my role is a developer, focus on collecting the assets and develop it based on the unity platform.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
