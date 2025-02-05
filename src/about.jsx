/* 
  File: about.jsx
  Student Name: Xiaowei Xue
  Student ID: 300579496
  Date: 2025-02-03
*/


export default function About() {
    return (
        <div class="container_about">
            {/* a photo & first paragraph */}
            <div class="aboutme">
                <img class="selfie" src="/img/headshot.jpg" alt="example"></img>
                <p class="detailsaboutme">Hello! My name is Xiaowei Xue, I am passionate about newest technology in the AI and gaming fields. With a background in computer network and currently studying game programming in Centennail College, I have developed a strong foundation in computer related fields. I thrive on solving complex problems and continuously seek opportunities to learn and grow.</p>
            </div>

            {/* second paragraph */}
            <div class="aboutme_2">
                <p class="detailsaboutme_2">Outside of work, I enjoy reading, gaming, things full of imaginations, which help me stay creative and energized. I believe in the power of collaboration and am always excited to connect with like-minded individuals to create meaningful and impactful projects. Let's build something amazing together!</p>
            </div>

            {/* resume */}
            <a href="/pdf/resume_sample1.pdf" target="_blank" class="resumelink">
                Click me to open the Resume
            </a>
        </div>
    );
}
