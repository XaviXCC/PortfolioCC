/* 
  File: Home.jsx
  Student Name: Xiaowei Xue
  Student ID: 300579496
  Date: 2025-02-03
*/

export default function Home() {
    return (
        <div class="homepage">
            {/* a short welcome message */}
            <p class="introduction">Hello, I'm Xiaowei, Welcome to my site!</p>
            <p class="identification">A student in Centennial College, currently studying in Game Programming</p>
            <p class="mission">As a passionate and driven game programming student, my mission is to harness the power of creativity and technology to design and develop immersive, innovative, and engaging gaming experiences. Through continuous learning, collaboration, and experimentation, I aim to master the technical skills and artistic principles necessary to bring unique game worlds to life. My goal is to contribute to the gaming industry by creating games that inspire, entertain, and connect people, while pushing the boundaries of what interactive entertainment can achieve.</p>

            {/* a link to about me page*/}
            <a href="/about" class="aboutmelink"><p>Want to learn more about me? Click Here</p></a>
        </div>
    );


}
